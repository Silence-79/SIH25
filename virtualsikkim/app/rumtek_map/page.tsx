"use client"; // runs only in browser

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function RumtekMapPage() {
  useEffect(() => {
    // Initialize map
    const map = L.map("map").setView([27.3389, 88.6065], 13);

    // Add base map tiles
    L.tileLayer(
      "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=nomB8CrzsDZCPanZJ3Hm",
      {
        attribution:
           '© <a href="https://www.maptiler.com/" target="_blank">MapTiler</a> ' +
           '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',

      }
    ).addTo(map);

    // Add Rumtek marker
    const rumtekMarker = L.marker([27.3389, 88.6065]).addTo(map);
    rumtekMarker.bindPopup(
      "<b>Rumtek Monastery</b><br>One of the largest and most important monasteries in Sikkim."
    );

    // Add scale bar
    L.control.scale().addTo(map);

    // Cleanup map when leaving page
    return () => {
      map.remove();
    };
  }, []);

    return (
    <div className="h-screen w-full">
      {/* Map only */}
      <div id="map" className="h-[100vh] w-full"></div>
    </div>
  );
}
