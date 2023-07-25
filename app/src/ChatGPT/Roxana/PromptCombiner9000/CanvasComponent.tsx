// import React, { useRef, useEffect } from "react";

// const CanvasComponent = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let i = 0;

//     const interval = setInterval(() => {
//       if (i < 5) {
//         ctx.beginPath();
//         ctx.arc(50 * i + 50, 100, 20, 0, 2 * Math.PI);
//         ctx.stroke();
//         i++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 500);

//     // Cleanup function to clear the interval when component unmounts
//     return () => {
//       clearInterval(interval);
//     };
//   }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

//   return (
//     <canvas
//       ref={canvasRef}
//       width="500"
//       height="500"
//       style={{ border: "1px solid #d3d3d3" }}
//     />
//   );
// };

// export default CanvasComponent;
