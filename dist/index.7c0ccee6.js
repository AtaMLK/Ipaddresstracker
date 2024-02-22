"use strict";
/* 
const { LatLng } = require("leaflet"); */ let myLocation = navigator.geolocation;
console.log(myLocation);
let map = L.map("map").setView([
    myLocation.lat,
    myLocation.lng
], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); //additional options that can placed on the map
 /* var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map); */ 

//# sourceMappingURL=index.7c0ccee6.js.map
