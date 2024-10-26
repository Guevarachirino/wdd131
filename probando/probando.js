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
