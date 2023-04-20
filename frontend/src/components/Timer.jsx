import { useEffect, useState } from "react";

function Timer(props) {
  const { time } = props;
  console.warn(">", props);
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

export default Timer;
