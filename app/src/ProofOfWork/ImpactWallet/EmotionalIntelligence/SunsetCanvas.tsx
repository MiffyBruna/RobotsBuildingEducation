import React, { useEffect, useRef } from "react";
function hexToHSL(hex) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length == 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length == 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  // Then convert RGB to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { hue: h, saturation: s, lightness: l };
}

export const SunsetCanvas = () => {
  const canvasRef = useRef(null);
  let requestId;

  const draw = (ctx, frameCount) => {
    // Convert the hex colors to HSL
    const brightBlueHSL = hexToHSL("#051efc");
    const mediumDarkBlueHSL = hexToHSL("#1a247d");
    const veryDarkBlueHSL = hexToHSL("#041838");

    // Animated gradient
    const gradient = ctx.createLinearGradient(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );
    gradient.addColorStop(
      0,
      `hsl(${brightBlueHSL.hue}, ${brightBlueHSL.saturation}%, ${
        brightBlueHSL.lightness + Math.sin(frameCount * 0.1) * 10
      }%)`
    );
    gradient.addColorStop(
      0.5,
      `hsl(${mediumDarkBlueHSL.hue}, ${mediumDarkBlueHSL.saturation}%, ${
        mediumDarkBlueHSL.lightness + Math.sin(frameCount * 0.1 + 2) * 10
      }%)`
    );
    gradient.addColorStop(
      1,
      `hsl(${veryDarkBlueHSL.hue}, ${veryDarkBlueHSL.saturation}%, ${
        veryDarkBlueHSL.lightness + Math.sin(frameCount * 0.1 + 4) * 10
      }%)`
    );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    //   // Draw the text
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Take a deep breath and think positively",
      ctx.canvas.width / 2,
      ctx.canvas.height / 2
    );
    ctx.shadowColor = "rgba(0, 0, 0, 1)"; // Shadow color
    ctx.shadowBlur = 5; // Blurevel
    ctx.shadowOffsetX = 5; // Horizontal offset
    ctx.shadowOffsetY = 5; // Vertical offset
  };

  const animate = (ctx) => {
    requestId = requestAnimationFrame(() => animate(ctx));
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    draw(ctx, requestId * 0.08);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    animate(context);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <canvas
      style={{
        boxShadow: "-5px -5px 50px -20px rgba(125,0,255,1)",
        borderRadius: "200px",
      }}
      ref={canvasRef}
    ></canvas>
  );
};

export default SunsetCanvas;
