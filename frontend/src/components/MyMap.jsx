import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function MyMap({ longitude, latitude, countryCode }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const start = {
    center: [longitude, latitude],
    zoom: 11,
    antialias: true,
  };
  const end = {
    center: [longitude, latitude],
    zoom: 1,
    antialias: true,
  };

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thomaslonjon/clgi954hh005d01qqabchcqkk",
      ...start,
    });

    map.current.on("load", () => {
      // Adding the mapbox boundery source
      map.current.addSource("countries-borders", {
        type: "vector",
        url: "mapbox://mapbox.country-boundaries-v1",
      });

      // Adding boundary layer
      map.current.addLayer({
        id: "boundaries",
        type: "line",
        source: "countries-borders",
        "source-layer": "country_boundaries",
        layout: {},
        paint: {
          "line-color": "#ff0000",
          "line-width": 2,
          "line-opacity": 0.5,
        },
        maxzoom: 7,
      });

      // Filtering the boundery layer, so there is only the selected border
      map.current.setFilter("boundaries", [
        "in",
        "iso_3166_1_alpha_3",
        countryCode,
      ]);
    });

    // zoom out with delay
    let isAtStart = true;
    const target = isAtStart ? end : start;
    isAtStart = !isAtStart;

    setTimeout(() => {
      map.current.flyTo({
        ...target, // Fly to the selected target
        duration: 30000, // Animate over 30 seconds
        essential: true, // This animation is considered essential with respect to prefers-reduced-motion
      });
    }, 3000);

    // setTimeout(() => {
    //   map.current.flyTo({
    //     ...target, // Fly to the selected target
    //     duration: 30000, // Animate over 30 seconds
    //     essential: true, // This animation is considered essential with respect to prefers-reduced-motion
    //     easing: (t) => {
    //       return t * 2;
    //     },
    //   });
    // }, 3000);
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
  countryCode: PropTypes.string.isRequired,
};
