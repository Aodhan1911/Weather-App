"use strict";

window.addEventListener("load", () => {
  let long;
  let lat;

  let temperatureDescription = document.querySelector(
    ".temperature-descripton"
  );
  let temperatureDegree = document.querySelector(".temperature-degree");
  let locationTimezone = document.querySelector(".location-timezone");

  let weatherImg = document.querySelector(".weather-icon");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.weatherapi.com/v1/current.json?key=9c4b50e4c44f46ab9ed12428210912&q=${lat},${long}&aqi=no`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const temperature = data.current.temp_c;
          const condition = data.current.condition.text;
          const timezone = data.location.name;
          const timezone2 = data.location.region;
          const weatherImage = data.current.condition.icon;
          // Set DOM Elements from the API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = condition;
          locationTimezone.textContent = timezone;
          locationTimezone.textContent = timezone;
          weatherImg.setAttribute("src", `${weatherImage}`);
        });
    });
  }
});
