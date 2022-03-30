import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./BaseMap.css";

const BaseMap = () => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    useEffect(() => {
        let map = new mapboxgl.Map({
            container: "mapContainer",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 40],
            zoom: 4,
        });
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "top-right");
        const marker = new mapboxgl.Marker()
            .setLngLat([103.811279, 1.345399])
            .addTo(map);
    }, []);

    return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;