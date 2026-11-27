const weddingDate =
new Date("January 27, 2027 00:00:00").getTime();

/* COUNTDOWN */

function updateCountdown() {

    const now = new Date().getTime();

    const diff = weddingDate - now;

    const days =
    Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* RSVP */

function comingSoon() {
    alert("RSVP form will be available soon.");
}

/* HAMBURGER */

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* SCROLL ANIMATION */

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, { threshold: 0.15 });

document.querySelectorAll(".hidden")
.forEach(el => observer.observe(el));

/* ACTIVE NAV */

const sections =
document.querySelectorAll("section, header");

const links =
document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
        section.offsetTop - 150;

        if (scrollY >= top) {

            current =
            section.getAttribute("id");
        }
    });

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});