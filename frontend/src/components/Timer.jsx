import { useEffect } from "react";
import PropTypes from "prop-types";

function Timer({ time, setCounter }) {
  useEffect(() => {
    const timer = time > 0 && setInterval(() => setCounter(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <div> {time} s</div>
    </div>
  );
}
Timer.propTypes = {
  time: PropTypes.string.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default Timer;
