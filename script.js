
// =================================
// WANJIKU ALEX PORTFOLIO JAVASCRIPT
// =================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));

});


// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 2. TYPING ANIMATION

const typingText = document.getElementById("typing-text");

const words = [
    "Aspiring Developer",
    "Web Developer",
    "Software Enthusiast",
    "Data Analysis Learner",
    "Technology Explorer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 55 : 100;

    if (!deleting && characterIndex === currentWord.length) {

        deleting = true;
        speed = 1400;

    } else if (deleting && characterIndex === 0) {

        deleting = false;

        wordIndex = (wordIndex + 1) % words.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// 3. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, " +
    ".project-card, .timeline-item, .goal-card, .contact-card"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {

    observer.observe(element);

});


// 4. BACK TO TOP BUTTON

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 5. AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 6. CONTACT FORM

const contactForm = document.getElementById("contact-form");

// IMPORTANT:
// Replace this with your actual email address.

const myEmail = "YOUR-EMAIL@example.com";

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        alert("Please fill in all the fields.");

        return;

    }

    const subject = encodeURIComponent(
        "Portfolio Contact from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    const mailtoLink =
        "mailto:" + myEmail +
        "?subject=" + subject +
        "&body=" + body;

    window.location.href = mailtoLink;

});
