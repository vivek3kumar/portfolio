console.log("JS Loaded");

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SMOOTH SCROLL
    // =========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // =========================
    // NAVBAR ACTIVE LINK
    // =========================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

    // =========================
    // STICKY NAVBAR
    // =========================
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-shrink");
        } else {
            navbar.classList.remove("navbar-shrink");
        }
    });

    // =========================
    // SCROLL ANIMATION
    // =========================
    const fadeElements = document.querySelectorAll(".fade-in");

    function reveal() {
        fadeElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", reveal);

    // =========================
    // TYPING EFFECT
    // =========================
    const typingElement = document.querySelector(".typing");

    if (typingElement) {
        const words = ["Web Developer", "Python Developer", "AI Enthusiast"];
        let wordIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < words[wordIndex].length) {
                typingElement.textContent += words[wordIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 1500);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50);
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 300);
            }
        }

        type();
    }

    // =========================
    // EMAILJS CONTACT FORM (FINAL WORKING)
    // =========================
   const form = document.getElementById("contact-form");

if (form && typeof emailjs !== "undefined") {

    emailjs.init("8Nr_Ou_JHh9oi096n");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const msgBox = document.getElementById("form-message");
        msgBox.innerText = "Sending...";

        emailjs.sendForm("service_76pd96h", "template_8x1hf34", this)
        .then(function () {
            msgBox.style.color = "lightgreen";
            msgBox.innerText = "Message sent successfully!";
            form.reset();
        }, function (error) {
            msgBox.style.color = "red";
            msgBox.innerText = "Failed to send message!";
            console.log(error);
        });

    });

} else {
    console.error("EmailJS not loaded or form not found");
}  
 });