import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhvbWFzbG9uam9uIiwiYSI6ImNsZndqYzN6dDA3NmkzbnRhZTBtMDN4Y2QifQ.Jv1RaxmPtEmRY9sLVwlC4g";

function MyMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.346402507560419);
  const [lat, setLat] = useState(48.85486527430587);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thomaslonjon/clgi63o6g005h01o1g8qm7h8t",
      center: [lng, lat],
      zoom: zoom,
      antialias: true,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    map.current.on("load", () => {
      map.current.addSource("dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      });
      map.current.addLayer(
        {
          id: "hillshading",
          source: "dem",
          type: "hillshade",
        },
        // Insert below land-structure-polygon layer,
        // where hillshading sits in the Mapbox Streets style.
        "land-structure-polygon"
      );
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default MyMap;
