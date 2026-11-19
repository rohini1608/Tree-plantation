
// Mobile navigation menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.innerHTML = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Highlight active navigation section

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("current");
        }
    });
});
