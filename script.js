/* =========================================
   WEDDING COUNTDOWN
========================================= */

const weddingDate = new Date(
    "January 27, 2027 00:00:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        weddingDate - now;

    if (difference <= 0) {

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (
            difference %
            (1000 * 60 * 60 * 24)
        )
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (
            difference %
            (1000 * 60 * 60)
        )
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (
            difference %
            (1000 * 60)
        )
        / 1000
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

/* =========================================
   MOBILE MENU
========================================= */

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

/* =========================================
   CLOSE MENU ON CLICK
========================================= */

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

/* =========================================
   CINEMATIC HERO REVEAL
========================================= */

window.addEventListener(
    "load",
    () => {

        const revealElements =
            document.querySelectorAll(
                ".reveal"
            );

        revealElements.forEach(
            (
                element,
                index
            ) => {

                setTimeout(
                    () => {

                        element.style.opacity =
                            "1";

                        element.style.transform =
                            "translateY(0)";

                    },

                    index * 400
                );

            }
        );

    }
);

/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

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
    .forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section, header"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );

window.addEventListener(
    "scroll",

    () => {

        let current = "home";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );

        navigationLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);

/* =========================================
   PARALLAX EFFECT
========================================= */

const parallaxItems =
    document.querySelectorAll(
        ".parallax"
    );

window.addEventListener(
    "scroll",

    () => {

        const scrollPosition =
            window.pageYOffset;

        parallaxItems.forEach(
            item => {

                const speed = 0.08;

                item.style.transform =
                    `translateY(${scrollPosition * speed}px)`;

            }
        );

    }
);

/* =========================================
   RSVP PLACEHOLDER
========================================= */

function comingSoon() {

    alert(
        "RSVP form will be added soon ❤️"
    );

}

/* =========================================
   SCROLL INDICATOR AUTO HIDE
========================================= */

const scrollIndicator =
    document.querySelector(
        ".scroll-indicator"
    );

window.addEventListener(
    "scroll",

    () => {

        if (!scrollIndicator) {
            return;
        }

        if (window.scrollY > 150) {

            scrollIndicator.style.opacity =
                "0";

        } else {

            scrollIndicator.style.opacity =
                "1";

        }

    }
);

/* =========================================
   TIMELINE STAGGER EFFECT
========================================= */

const timelineObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const items =
                            document.querySelectorAll(
                                ".timeline-item"
                            );

                        items.forEach(
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

/* =========================================
   INITIAL TIMELINE STATE
========================================= */

document
    .querySelectorAll(
        ".timeline-item"
    )
    .forEach(
        item => {

            item.style.opacity = "0";

            item.style.transform =
                "translateY(40px)";

            item.style.transition =
                "all 0.8s ease";

        }
    );