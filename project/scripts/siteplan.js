//getting dates and time

const getyear = document.getElementById('year');
const actualyear = new Date().getFullYear();
getyear.textContent = actualyear;


let text = document.lastModified;
document.getElementById("oLastModif").innerHTML = text;


// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const figures = document.querySelectorAll("figure");

    figures.forEach(figure => {
        const img = figure.querySelector("img");
        const caption = figure.querySelector("figcaption").textContent.toLowerCase();

        // Verifica si el alt de la imagen o el caption contiene el texto buscado
        if (img.alt.toLowerCase().includes(query) || caption.includes(query)) {
            figure.style.display = "block";  // Mostrar figura
        } else {
            figure.style.display = "none";   // Ocultar figura
        }
    });
});