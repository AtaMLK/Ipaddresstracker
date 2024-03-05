"use strict";
/* ================== Variables ================== */ const ipAddress = document.querySelector(".ipaddress");
const ipLocation = document.querySelector(".location");
const utcTimezone = document.querySelector(".timezone");
const ispName = document.querySelector(".isp");
const serachedIp = document.querySelector(".search-bar");
const searchedButton = document.querySelector(".search-btn");
const API_KEY = "at_wsS8PAPWhRErLBy942MlMMFermjPj";
const postitionCoords = [];
const data = [];
/* ================== User Location Finder ================== */ navigator.geolocation.getCurrentPosition(function locationFinder(pos) {
    postitionCoords[0] = pos.coords.latitude;
    postitionCoords[1] = pos.coords.longitude;
    postitionCoords[2] = pos.coords.accuracy;
});
/* ================== API reader  ================== */ async function ipadress() {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`); /* .then(response=> response.json()) */ 
    const data = await response.json();
    console.log(data);
    if (!data) throw new Error(`${response.status} : ${await response.statusText()}`);
}
/* ipadress(); */ /* ================== MAP  ================== */ let map = L.map("map").setView([
    41.01526,
    28.9597
], 15);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
/* ================== MAP  Options ================== */ L.marker([
    41.01526,
    28.9597
]).addTo(map).bindPopup("here you are").openPopup();

//# sourceMappingURL=index.7c0ccee6.js.map
