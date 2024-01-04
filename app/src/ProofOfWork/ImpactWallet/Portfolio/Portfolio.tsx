//@ts-nocheck
import { useState, useEffect, useRef } from "react";
import { isEmpty } from "lodash";
import { Button, Modal } from "react-bootstrap";
const data = {
  Duolingo: 0,
  Cloudflare: 0,
  Coinbase: 13000,
  Microstrategy: 13000,
  Bitcoin: 43000,
  Block: 61000,
  Pinterest: 25000,
  "US Market": 8333,
  "Berkshire Hathaway": 8333,
  Apple: 8334,
};

export const Portfolio = () => {
  const canvasRef = useRef(null);
  const colors = [
    "#bab9b8",
    "#bab9b8",
    "#032dff",
    "#ff030b",
    "#F6931A",
    "#37DCCC",
    "#fc4e4e",
    "#00d620",
    "#7e02fa",
    "#F5F5F7",
  ]; // Teal and Aquamarine colors

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    drawPieChart(context, canvas.width, canvas.height, data);
  }, [data]);

  const drawPieChart = (context, width, height, data) => {
    let total = Object.values(data).reduce((acc, value) => acc + value, 0);
    let startAngle = 0;

    Object.entries(data).forEach(([key, value], index) => {
      const sliceAngle = (value / total) * 2 * Math.PI;
      const endAngle = startAngle + sliceAngle;

      context.beginPath();
      context.moveTo(width / 2, height / 2);
      context.arc(width / 2, height / 2, height / 2, startAngle, endAngle);
      context.fillStyle = colors[index % colors.length];
      context.fill();

      startAngle = endAngle;
    });
  };

  return (
    <div>
      <br />
      <canvas ref={canvasRef} width="400" height="400" />
      <div>
        {Object.entries(data).map(([key, value], index) => (
          <div
            key={key}
            style={{ margin: "5px 0", display: "flex", alignItems: "center" }}
          >
            <span
              style={{
                color: colors[index % colors.length],
                marginRight: "8px",
              }}
            >
              ■
            </span>
            <span>
              {key}: ${value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
