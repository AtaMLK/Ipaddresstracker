"use strict";

/* ================== Variables ================== */
const ipAddress = document.querySelector(".ipaddress");
const ipLocation = document.querySelector(".location");
const utcTimezone = document.querySelector(".timezone");
const ispName = document.querySelector(".isp");
const serachedIp = document.querySelector(".search-bar");
const searchedButton = document.querySelector(".search-btn");

const myIp = "78.174.26.241";
const API_KEY = "at_OXooYfHJxMAdvCndpkbl0AOxrtnND";
const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${/* API_KEY */}` /* 
const postitionCoords = []; */ /* 
  const url = 'https://apiip.net/api/check?ip='&accessKey='+ accessKey;  */
let ip;
let ipLoc;
let ipUtc;
let ipIsp;
/* ================== User Location Finder ================== */
/* navigator.geolocation.getCurrentPosition(function locationFinder(pos) {
  postitionCoords[0] = pos.coords.latitude;
  postitionCoords[1] = pos.coords.longitude;
  postitionCoords[2] = pos.coords.accuracy;
}); */

/* ================== API reader  ================== */

async function ipadress() {
  const response = await fetch(URL).then((res) => res.json());
  console.log(response);
  let data = await response;
  if (!data) {
    throw new Error(`${response.status} : ${response.statusText}`);
  }
  return data;
}
ipadress();

ipadress()
  .then((data) => {
    console.log(data);
    const { city, country, geonameId } = data.location;

    ip = data.ip;
    ipIsp = data.isp;
    ipUtc = data.location.timezone;

    ipAddress.textContent = ip;
    ipLocation.textContent = `${city}  ${country} ${geonameId}`;
    utcTimezone.textContent = `${ipUtc} UTC`;
    ispName.textContent = `${ipIsp} ${data.as.name}`;
  })
  .catch((error) => {
    console.error(error);
  });

/* ================== MAP  ================== */
let map = L.map("map").setView([myLat, myLng], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

/* ================== MAP  Options ================== */
L.marker([myLat, myLng]).addTo(map).bindPopup("here you are").openPopup();
