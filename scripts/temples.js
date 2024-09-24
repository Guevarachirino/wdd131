//getting dates and time

const getyear = document.getElementById('year');
const actualyear = new Date().getFullYear();
getyear.textContent = actualyear;


let text = document.lastModified;
document.getElementById("oLastModif").innerHTML = text;

//menu

const burgermenu = document.querySelector(".burgermenu")
const navLinks = document.querySelector(".nav-links")

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
burgermenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
}
)