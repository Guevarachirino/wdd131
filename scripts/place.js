const year = document.querySelector("#getyear");
const today = new Date();
year.innerHTML = `©️ <span class="getyear">${today.getFullYear()}</span>`;

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

