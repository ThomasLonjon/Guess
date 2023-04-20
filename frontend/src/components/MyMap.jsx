import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function MyMap({ longitude, latitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thomaslonjon/clgi954hh005d01qqabchcqkk",
      center: [longitude, latitude],
      zoom: 12,
      antialias: true,
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
  longitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
};
