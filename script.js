document.addEventListener('DOMContentLoaded', function() {
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    const container = document.querySelector('.cards-container');
    const dots = document.querySelectorAll('.scroll-dots span');

    // Calculate positions for 6 dots
    const totalScroll = container.scrollWidth - container.clientWidth;
    const step = totalScroll / 5; // 6 positions: 0, 1*step, 2*step, ..., 5*step

    leftBtn.addEventListener('click', function() {
        const currentScroll = container.scrollLeft;
        const nextIndex = Math.round(currentScroll / step) - 1;
        container.scrollTo({
            left: Math.max(0, step * nextIndex),
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', function() {
        const currentScroll = container.scrollLeft;
        const nextIndex = Math.round(currentScroll / step) + 1;
        container.scrollTo({
            left: Math.min(totalScroll, step * nextIndex),
            behavior: 'smooth'
        });
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            container.scrollTo({
                left: step * index,
                behavior: 'smooth'
            });
            updateActiveDot(index);
        });
    });

    function updateActiveDot(activeIndex) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activeIndex);
        });
    }

    // Update active dot on scroll
    container.addEventListener('scroll', () => {
        const currentScroll = container.scrollLeft;
        const activeIndex = Math.round(currentScroll / step);
        updateActiveDot(activeIndex);
    });

    // Initial active dot
    updateActiveDot(0);
});

(function () {
  const rtlLanguages = ["ar", "he", "iw", "fa", "ur"];

  const userLang =
    navigator.languages?.[0] ||
    navigator.language ||
    "en";

  const langCode = userLang.split("-")[0];

  const isRTL = rtlLanguages.includes(langCode);

  document.documentElement.lang = langCode;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
})();