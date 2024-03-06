/* ================== MAP  ================== */

export function initializeMap() {
  // Function implementation
  let map = L.map("map").setView([46, 15], 17);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  /* ================== MAP  Options ================== */
  L.marker([46, 15]).addTo(map);
}
