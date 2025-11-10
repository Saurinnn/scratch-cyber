document.addEventListener("DOMContentLoaded", () => {
  VANTA.NET({
    el: "#my-cover",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fffd1
  })
  
  const images = document.querySelectorAll(".text01-text, .sec02, .img-KEN, .img-TIN");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // 一度表示したら監視を解除
      }
    });
  }, {
    threshold: 0.1 // 画像の10％が見えたら発火
  });

  images.forEach(img => {
    observer.observe(img);
  });
});