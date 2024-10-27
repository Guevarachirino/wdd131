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
];

let currentIndex = 0;
const videoElement = document.getElementById('video');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
    videoElement.src = images[currentIndex]; // Cambia la imagen
}

// Cambia la imagen cada 4 segundos (4000 ms)
setInterval(changeImage, 4000);


document.getElementById('submitComment').addEventListener('click', function () {
    const commentText = document.getElementById('comment').value;
    if (commentText) {
        const li = document.createElement('li');
        li.textContent = commentText;
        document.getElementById('commentList').appendChild(li);
        document.getElementById('comment').value = ''; // Limpiar el textarea
    }
});

// Manejo de calificación
const stars = document.querySelectorAll('.star');
let ratingValue = 0;

stars.forEach(star => {
    star.addEventListener('click', function () {
        ratingValue = this.getAttribute('data-value');
        document.getElementById('ratingMessage').textContent = `You rated this ${ratingValue} star(s)`;

        stars.forEach(s => {
            s.classList.remove('selected'); // Limpiar selección anterior
        });

        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.add('selected'); // Marcar estrellas seleccionadas
        }
    });
});