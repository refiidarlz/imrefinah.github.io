document.addEventListener('DOMContentLoaded', () => {
    const headerImage = document.querySelector('.header img');
    headerImage.classList.add('scale-in');
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = '1'; // Fade in navbar on load

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.opacity = '1'; // Fade in navbar on load

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animate about section
    const aboutSection = document.getElementById('about');
    observer.observe(aboutSection);

    // Animate certifications
    const certSection = document.getElementById('certifications');
    observer.observe(certSection);
});
