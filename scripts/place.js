//getting dates and time

const getyear = document.getElementById('year');
const actualyear = new Date().getFullYear();
getyear.textContent = actualyear;


let text = document.lastModified;
document.getElementById("oLastModif").innerHTML = text;

function WindChill() {
    let temperature = 10;
    let wind = 5;
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16)).toFixed(2);
}
let windChill = WindChill();

document.getElementById("wind-chill").textContent = ` ${windChill} ⁰C`;