"use client"; // runs only in browser

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function PemayangtseMapPage() {
  useEffect(() => {
    // Initialize map centered on Pemayangtse Monastery
    const map = L.map("map").setView([27.3025, 88.2456], 13);

    // Add base map tiles
    L.tileLayer(
      "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=fSf83YTkBpQYgCd1WnDM",
      {
        attribution:
          '© <a href="https://www.maptiler.com/" target="_blank">MapTiler</a> ' +
          '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap contributors</a>',
      }
    ).addTo(map);

    // Add Pemayangtse marker
    const pemayangtseMarker = L.marker([27.3025, 88.2456]).addTo(map);
    pemayangtseMarker.bindPopup(
      "<b>Pemayangtse Monastery</b><br>Famous for its wooden sculptures and religious importance."
    );

    // Add scale bar
    L.control.scale().addTo(map);

    // Cleanup on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="h-screen w-full">
      {/* Fullscreen map */}
      <div id="map" className="h-[100vh] w-full"></div>
    </div>
  );
}
