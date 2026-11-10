const temperature = 6;
const windspeed = 5;

const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.innerHTML = today.getFullYear();
document.getElementById("lastModified").textContent = 'Last Modified ' + document.lastModified;

const calculateWindChill = function (temperature, windspeed) {
    return Math.round((13.12 + 0.6215 * temperature - 11.37 * (Math.pow(windspeed, 0.16)) + 0.3965 * temperature * (Math.pow(windspeed, 0.16))) * 10) / 10;
}

const temp = document.querySelector("#temp");
temp.textContent = `${temperature} \u00B0C`;

const wind = document.querySelector("#wind");
wind.textContent = `${windspeed} km/h`;

if (temperature <= 10 && windspeed > 4.8) {
    const windchill = document.querySelector("#windchill");
    windchill.textContent = `${calculateWindChill(temperature, windspeed)} \u00B0C`;
}





