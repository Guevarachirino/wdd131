// select the DOM elements for output
const full = document.querySelector("#full");
const worldfull = document.querySelector("#world-full");
const short = document.querySelector("#short");
const medium = document.querySelector("#medium");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const dayofweek = document.querySelector("#dayofweek");

// use the date object
const today = new Date();

full.innerHTML = `Today is <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;
worldfull.innerHTML = `UK: <span class="highlight">${new Intl.DateTimeFormat(
    "en-UK",
    {
        dateStyle: "full"
    }
).format(today)}</span>`;
short.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short"
    }
).format(today)}</span>`;
medium.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "medium"
    }
).format(today)}</span>`;

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear()}</span>`;
month.innerHTML = `getMonth(): <span class="highlight">${today.getMonth()}</span>`;
day.innerHTML = `getDate(): <span class="highlight">${today.getDate()}</span>`;
dayofweek.innerHTML = `getDay(): <span class="highlight">${today.getDay()}</span>`;




//last modified

const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
    document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${location.pathname
        }`;

    if (isFinite(lastVisit)) {
        alert("This page has been changed!");
    }
}
//hamb botton

// Store the selected elements that we are going to use. 
const burgermenu = document.querySelector(".burgermenu")
const navLinks = document.querySelector(".nav-links")

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
burgermenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
}
)
