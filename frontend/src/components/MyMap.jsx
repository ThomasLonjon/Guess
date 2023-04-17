import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhvbWFzbG9uam9uIiwiYSI6ImNsZ2pmNHpqZjE0dGszcG15eGY1ZTlmajYifQ.D7NRzDUKM4NOLR3Gnc2PVA";

function MyMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(2.346402507560419);
  const [lat, setLat] = useState(48.85486527430587);
  const [zoomMap, setZoomMap] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thomaslonjon/clgi954hh005d01qqabchcqkk",
      center: [lng, lat],
      zoom: zoomMap,
      antialias: true,
    });
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoomMap(map.current.getZoom().toFixed(2));
    });
  }, []);

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
  }, []);
  // Ajout du périmètre des villes
  // Définir les paramètres de la ville et du pays
  const ville = "Paris";
  const pays = "France";

  // Construire la chaîne de requête Overpass API
  const overpassQuery = `[out:json];area[name="${pays}"][admin_level=2]->.a;relation[name="${ville}"][admin_level=8](area.a);out body;`;

  // Appeler Overpass API à partir de votre code JavaScript
  fetch(
    `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
      overpassQuery
    )}`
  );

  return (
    <div className="map-container">
      <div className="map-container-wrapper">
        <div className="map-container-overlay">
          <div ref={mapContainer} className="map" />
        </div>
      </div>
    </div>
  );
}

export default MyMap;
