/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let navLIST = document.querySelector("#navbar__list");
let sectionA = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function build_nav() {
    for (let item of sectionA) {
        let BulidHold = document.createElement("div");
        BulidHold.classList = "menu__link";
        BulidHold.dataset.nav = item.id;
        BulidHold.innerText = item.dataset.nav;
        navLIST.appendChild(BulidHold);

        // Scroll to anchor ID using scrollTO event

        navLIST.addEventListener("click", (event) => {
            const Click = document.querySelector("#" + event.target.dataset.nav);
            Click.scrollIntoView({ behavior: "smooth" });
        });
    }
}
build_nav();

// Add class 'active' to section when near top of viewport

function activeClss() {
    let a = 8;
    let b = window.innerHeight;
    sectionA.forEach((sectionA, i) => {
        let c = sectionA.getBoundingClientRect();
        if (Math.abs(c.top) < b) {
            b = Math.abs(c.top);
            a = i;
        }
    });
    if (a != 8) {
        for (let i = 0; i < sectionA.length; i++) {
            if (i == a) {
                sectionA[i].classList.add("your-active-class");
            } else {
                sectionA[i].classList.remove("your-active-class");
            }
        }
    }
}
document.addEventListener("scroll", activeClss);

