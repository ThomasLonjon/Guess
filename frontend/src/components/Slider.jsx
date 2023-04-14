import React from "react";
import { useState } from "react";

export default function Slider({ maxRange, defaultRange, unit }) {
  const [rangeValue, setRangeValue] = useState(defaultRange);
  return (
    <>
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
    </>
  );
}
