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


//galeria de imagenes, buucar foto de acuerdo al figcaption
document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const figures = document.querySelectorAll("figure");

    figures.forEach(figure => {
        const img = figure.querySelector("img");
        const caption = figure.querySelector("figcaption").textContent.toLowerCase();


        if (img.alt.toLowerCase().includes(query) || caption.includes(query)) {
            figure.style.display = "block";  // Mostrar figura
        } else {
            figure.style.display = "none";   // Ocultar figura
        }
    });
});

// video con imagenes 
const images = [
    'images/arroz-con-leche.webp',
    'images/canela.webp',
    'images/ingredientes.webp' // Agrega todas las imágenes que quieras
];

let currentIndex = 0;
const videoElement = document.getElementById('video');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
    videoElement.src = images[currentIndex]; // Cambia la imagen
}

// Cambia la imagen cada 2 segundos (2000 ms)
setInterval(changeImage, 4000);