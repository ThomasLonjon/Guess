// import { useEffect, useState } from "react";

// function Timer(props) {
//   console.info(">", props);
//   const [counter, setCounter] = useState(props.time);
//   console.info(props.time);

//   useEffect(() => {
//     const timer =
//       counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//     return () => clearInterval(timer);
//   }, [counter]);

//   return (
//     <div>
//       <div> {counter} s</div>
//     </div>
//   );
// }

// export default Timer;
