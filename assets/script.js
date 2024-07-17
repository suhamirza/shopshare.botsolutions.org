const heroSection = document.querySelector('.hero');
const navbar = document.querySelector('.navbar');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove('navbar-color');
        } else {
            navbar.classList.add('navbar-color');
        }
    });
});
observer.observe(heroSection);

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50; // Adjusted for navbar height
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
