const year = document.querySelector("#getyear");
const today = new Date();
year.innerHTML = today.getFullYear();

let text = document.lastModified;
document.getElementById("lastModif").innerHTML = text;



function calculateWindChill() {

  let temperature = 30;
  let windSpeed = 13;

  if (units === 'US') {
    return Math.round(
      35.74 +
      0.6215 * temperature -
      35.75 * windSpeed ** 0.16 +
      0.4275 * temperature * windSpeed ** 0.16
    );
  }

  return Math.round(
    13.12 +
    0.6215 * temperature -
    11.37 * windSpeed ** 0.16 +
    0.3965 * temperature * windSpeed ** 0.16
  );

}

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);

const temp = 64;
const windSpeed = 19.71;
function calculateWindchill(temp, windSpeed) {
  if (temp <= 50 && windSpeed > 3) {
    const windchill = 35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16;
    const roundedWindchill = Math.round(windchill * 100) / 100;
    return roundedWindchill;
  } else {
    return "N/A";
  }
}
const windchillFactor = document.querySelector('#windchill-factor');
windchillFactor.textContent = calculateWindchill(temp, windSpeed);

