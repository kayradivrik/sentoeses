
const swiper = new Swiper('.progress-swiper', {
  loop: true,
  autoplay: { delay: 4000, disableOnInteraction: false },
  slidesPerView: 1,
  allowTouchMove: true,
  speed: 700,
});

let gsapAnim;
function animateProgress(slide) {
  if (gsapAnim) gsapAnim.kill(); // Eski animasyonu temizle
  const circle = slide.querySelector('.progressCircle');
  const text = slide.querySelector('.progressText');
  if (!circle || !text) return;
  const maxPercent = parseInt(circle.getAttribute('data-value'));
  const circumference = 2 * Math.PI * 60;
  gsap.set(circle, { strokeDashoffset: circumference });
  gsap.set(text, { innerText: '0%' });
  gsapAnim = gsap.to(circle, {
    strokeDashoffset: circumference - (maxPercent / 100) * circumference,
    duration: 1.2,
    ease: 'power1.out'
  });
  gsap.to(text, {
    innerText: maxPercent,
    duration: 1.2,
    snap: { innerText: 1 },
    ease: 'power1.out',
    onUpdate: function() {
      text.innerText = `${Math.round(this.targets()[0].innerText)}%`;
    }
  });
}

// İlk animasyon
setTimeout(() => {
  animateProgress(document.querySelector('.swiper-slide-active'));
}, 200);

// Her slide değişiminde animasyon başlat
swiper.on('slideChangeTransitionStart', function () {
  setTimeout(() => {
    animateProgress(document.querySelector('.swiper-slide-active'));
  }, 200);
});
