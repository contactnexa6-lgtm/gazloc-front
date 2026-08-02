"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Correction TypeScript pour l'icône Leaflet
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface Depot {
  name: string;
  pos: [number, number];
  info: string;
}

export default function MapDynamique() {
  const centerPosition: [number, number] = [3.8480, 11.5021]; 

  const depots: Depot[] = [
    { name: "Dépôt Mvog-Ada", pos: [3.8445, 11.5140], info: "SCTM & Totalaz dispo" },
    { name: "Dépôt Bastos", pos: [3.8820, 11.5150], info: "Stock limité" },
    { name: "Dépôt Emana Centre", pos: [3.9100, 11.5080], info: "En stock" }
  ];

  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl overflow-hidden z-0">
      <MapContainer center={centerPosition} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {depots.map((depot, idx) => (
          <Marker key={idx} position={depot.pos} icon={customIcon}>
            <Popup>
              <div className="text-gray-950">
                <strong className="block text-sm">{depot.name}</strong>
                <span className="text-xs text-gray-500">{depot.info}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}