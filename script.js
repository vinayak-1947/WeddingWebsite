/* ==========================================
   WEDDING DATE COUNTDOWN
========================================== */

const weddingDate =
new Date("January 27, 2027 00:00:00").getTime();

function updateCountdown() {

    const now =
    new Date().getTime();

    const difference =
    weddingDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days =
    Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (difference %
            (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (difference %
            (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (difference %
            (1000 * 60))
        /
        1000
    );

    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        seconds;
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

/* ==========================================
   RSVP PLACEHOLDER
========================================== */

function comingSoon() {

    alert(
        "RSVP form will be connected soon. ❤️"
    );
}

/* ==========================================
   MOBILE HAMBURGER MENU
========================================== */

const hamburger =
document.getElementById(
    "hamburger"
);

const navLinks =
document.getElementById(
    "navLinks"
);

hamburger.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );

    }
);

/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

document
.querySelectorAll(".nav-link")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "active"
            );

        }
    );

});

/* ==========================================
   SECTION REVEAL ANIMATION
========================================== */

const observer =
new IntersectionObserver(

    (entries) => {

        entries.forEach(
            (entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            }
        );

    },

    {
        threshold: 0.15
    }

);

document
.querySelectorAll(".hidden")
.forEach(element => {

    observer.observe(element);

});

/* ==========================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================== */

const sections =
document.querySelectorAll(
    "section, header"
);

const navItems =
document.querySelectorAll(
    ".nav-link"
);

window.addEventListener(
    "scroll",
    () => {

        let currentSection =
        "home";

        sections.forEach(
            (section) => {

                const sectionTop =
                section.offsetTop - 150;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                    section.getAttribute(
                        "id"
                    );

                }

            }
        );

        navItems.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" +
                    currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);

/* ==========================================
   HERO CINEMATIC REVEAL
========================================== */

window.addEventListener(
    "load",
    () => {

        const revealItems =
        document.querySelectorAll(
            ".reveal"
        );

        revealItems.forEach(
            (
                item,
                index
            ) => {

                setTimeout(
                    () => {

                        item.style.opacity =
                            "1";

                        item.style.transform =
                            "translateY(0)";

                    },

                    index * 400

                );

            }
        );

    }
);

/* ==========================================
   PARALLAX EFFECT
========================================== */

const parallaxImages =
document.querySelectorAll(
    ".parallax"
);

window.addEventListener(
    "scroll",

    () => {

        const scrollPosition =
            window.pageYOffset;

        parallaxImages.forEach(
            image => {

                image.style.transform =
                `translateY(${
                    scrollPosition * 0.08
                }px)`;

            }
        );

    }
);

/* ==========================================
   BUTTON SHIMMER EFFECT
========================================== */

const buttons =
document.querySelectorAll(
    ".btn"
);

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",

        () => {

            button.style.transition =
                "all 0.3s ease";

        }
    );

});

/* ==========================================
   TIMELINE STAGGER ANIMATION
========================================== */

const timelineObserver =
new IntersectionObserver(

    (entries) => {

        entries.forEach(
            entry => {

                if (
                    entry.isIntersecting
                ) {

                    const timelineItems =
                    document.querySelectorAll(
                        ".timeline-item"
                    );

                    timelineItems.forEach(
                        (
                            item,
                            index
                        ) => {

                            setTimeout(
                                () => {

                                    item.style.opacity =
                                        "1";

                                    item.style.transform =
                                        "translateY(0)";

                                },

                                index * 250

                            );

                        }
                    );

                }

            }
        );

    },

    {
        threshold: 0.2
    }

);

const timeline =
document.querySelector(
    ".timeline"
);

if (timeline) {

    timelineObserver.observe(
        timeline
    );

}

/* ==========================================
   INITIAL STYLES FOR REVEAL
========================================== */

document
.querySelectorAll(".reveal")
.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(40px)";

    item.style.transition =
        "all 1s ease";

});

document
.querySelectorAll(".timeline-item")
.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(30px)";

    item.style.transition =
        "all 0.8s ease";

});