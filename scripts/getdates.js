const getyear = document.getElementById('year');
const actualyear = new Date().getFullYear();
getyear.textContent = actualyear;



let oLastModif = new Date(document.lastModified)
oLastModif.textContent = `Last Modification: ${document.oLastModif}`;
