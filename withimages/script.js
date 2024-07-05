// // scripts.js

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Active Link Switching
// window.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('section');
//     const navLi = document.querySelectorAll('nav ul li a');

//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         if (pageYOffset >= sectionTop - 60) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLi.forEach(a => {
//         a.classList.remove('active');
//         if (a.getAttribute('href') === `#${current}`) {
//             a.classList.add('active');
//         }
//     });
// });






// scripts.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Link Switching
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('nav ul li a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});

// Animated Navbar on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade-in Effects
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});

// Animated Text
const animatedText = document.querySelector('.animated-text');
const text = animatedText.innerHTML;
animatedText.innerHTML = '';

text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.innerHTML = char;
    span.style.animationDelay = `${index * 0.05}s`;
    animatedText.appendChild(span);
});
