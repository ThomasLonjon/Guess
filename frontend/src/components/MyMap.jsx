import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function MyMap({ longitude, latitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
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

MyMap.propTypes = {
  longitude: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
};
