// JavaScript for scrolling the timeline cards

document.addEventListener('DOMContentLoaded', function() {
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');
    const container = document.querySelector('.cards-container');
    const dots = document.querySelectorAll('.scroll-dots span');

    leftBtn.addEventListener('click', function() {
        container.scrollBy({
            left: -293,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', function() {
        container.scrollBy({
            left: 293,
            behavior: 'smooth'
        });
    });

    // Calculate positions for 6 dots
    const totalScroll = container.scrollWidth - container.clientWidth;
    const step = totalScroll / 5; // 6 positions: 0, 1*step, 2*step, ..., 5*step

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