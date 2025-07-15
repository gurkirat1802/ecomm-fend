import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "400px",
};
const center = {
    lat: 31.3260,
    lng: 75.5762
};

const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBTZeuFXqniqARjf6g5vlIqGZtQ5yj1GCY">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;