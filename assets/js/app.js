"use strict";

import { myIp, KEY, API_URL } from "./config.js";
import { initializeMap } from "./map.js";

/* ================== Variables ================== */
const ipAddress = document.querySelector(".ipaddress");
const ipLocation = document.querySelector(".location");
const utcTimezone = document.querySelector(".timezone");
const ispName = document.querySelector(".isp");
const serachedIp = document.querySelector(".search-bar");
const searchedButton = document.querySelector(".search-btn");

let ip;
let ipLoc;
let ipUtc;
let ipIsp;

async function ipaddress() {
  const response = await fetch(/* API_URL */).then((res) => res.json());
  let data = await response;
  try {
    if (!data) {
      throw new Error(`${response.status} : ${response.statusText}`);
    }
    /* ================== Store in global variable  ================== */
    ip = data.ip;
    ipIsp = data.isp;
    ipUtc = data.location.timezone;

    /* ================== Update Dom  ================== */
    ipAddress.textContent = ip;
    ipLocation.textContent = `${data.location.city}  ${data.location.country}`;
    utcTimezone.textContent = `${ipUtc} UTC`;
    ispName.textContent = `${ipIsp} ${data.as.name}`;

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("💥There is no data💥 ");
  }
}

async function getIp() {
  const data = await ipaddress();

  const { lat, lng } = data.location;
  console.log(lat, lng);
}

initializeMap();
getIp()

