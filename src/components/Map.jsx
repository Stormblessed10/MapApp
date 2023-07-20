import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useCities } from "../context/CitiesContext";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
export default function Map() {
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const [searchParams] = useSearchParams();
    const {cityList} = useCities();

    const lng = searchParams.get("lng");
    const lat = searchParams.get("lat");

    useEffect(() => {
        if(lng && lat) setMapPosition([lat, lng]);
    }, [lng, lat]);
    
    return <section className={styles["map-container"]}>
        <MapContainer className={styles.map} center={mapPosition} zoom={8} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cityList.map(city => {
            return <Marker key={city.id} position={city.position}>
            <Popup>
                {city.notes}
            </Popup>
            </Marker>
            })}
            <Center position={mapPosition}/>
            <DetectClick/>
        </MapContainer>
    </section>
}

function Center({ position }) {
    const map = useMap();
    map.setView(position);

    return null
}

function DetectClick() {
    const navigate = useNavigate();
    useMapEvents({click: e => {
        navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    }});

    return null;
}