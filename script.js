// Data di lancio fissa: 1 agosto 2026 alle 00:00 (ora italiana CEST)
const launchDate = new Date('2026-08-01T00:00:00+02:00');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    // Quando il countdown arriva a zero, ferma tutto su 00
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ===== Intersection Observer for scroll animations =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.7s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
document.querySelectorAll('.feature-card, .step').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
