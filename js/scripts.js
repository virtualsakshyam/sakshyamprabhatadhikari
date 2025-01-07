/*!
* Start Bootstrap - Freelancer v7.0.3 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector("header").offsetHeight,
                    behavior: "smooth",
                });
            }
        });
    });

    // Button hover animation on hero section
    const heroButton = document.querySelector(".hero button");
    if (heroButton) {
        heroButton.addEventListener("mouseenter", () => {
            heroButton.style.transform = "scale(1.2)";
        });

        heroButton.addEventListener("mouseleave", () => {
            heroButton.style.transform = "scale(1)";
        });
    }

    // Contact form submission (placeholder functionality)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your message! I'll get back to you soon.");
            contactForm.reset();
        });
    }
});
