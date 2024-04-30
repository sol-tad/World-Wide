import React, { useState } from "react";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";

function Map() {
  const navigate = useNavigate(); //navigate where ever we want
  const [searchParam, setSearchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <div
      className={styles.mapContainer}
      // onClick={() => {
      //   navigate("form");
      // }}
    >
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <Marker position={mapPosition}>
          <Popup>
            Aprrety css3 popup
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
