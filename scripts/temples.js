
//hamb botton

// Store the selected elements that we are going to use. 
const burgermenu = document.querySelector(".burgermenu")
const navLinks = document.querySelector(".nav-links")

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
burgermenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
}
)
