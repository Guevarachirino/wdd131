document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const images = document.querySelectorAll(".food-image");

    images.forEach(image => {
        const altText = image.alt.toLowerCase();
        if (altText.includes(query)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});


// script.js
// probando.js
const images = [
    '/project/images/eloteloco.webp',
    '/project/images/arrozconleche.webp',
    '/project/images/panesrellenos.webp' // Agrega todas las imágenes que quieras
];

let currentIndex = 0;
const videoElement = document.getElementById('video');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
    videoElement.src = images[currentIndex]; // Cambia la imagen
}

// Cambia la imagen cada 2 segundos (2000 ms)
setInterval(changeImage, 4000);

