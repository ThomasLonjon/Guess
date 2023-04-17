import { useState } from "react";
import PropTypes from "prop-types";

function Slider({ maxRange, defaultRange, unit }) {
  const [rangeValue, setRangeValue] = useState(defaultRange);
  return (
    <div className="sliderBox">
      <p className="textSlider">
        {rangeValue} {unit}
      </p>
      <input
        className="slider"
        type="range"
        min="1"
        max={maxRange}
        defaultValue={rangeValue}
        onChange={(e) => setRangeValue(e.target.value)}
      />
    </div>
  );
}

Slider.propTypes = {
  maxRange: PropTypes.number.isRequired,
  defaultRange: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default Slider;
