import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Timer({ time }) {
  const [counter, setCounter] = useState(time);
  console.warn(time);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div> {counter} s</div>
    </div>
  );
}
Timer.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Timer;
