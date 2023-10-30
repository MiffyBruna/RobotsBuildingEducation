export const lowEnergyFeelings = [
  {
    label: "Peaceful",
    emoji: "(˘⌣˘)",
    color: "#00A3AF",
    colorHover: "#00919D",
  },
  {
    label: "Content",
    emoji: "(＾▽＾)",
    color: "#00A3AF",
    colorHover: "#00919D",
  },
  { label: "Sad", emoji: "(╥﹏╥)", color: "#87CEEB", colorHover: "#76BADB" },
  {
    label: "Tired",
    emoji: "(-_-) zzZ",
    color: "#87CEEB",
    colorHover: "#76BADB",
  },
];

export const highEnergyFeelings = [
  {
    label: "Motivated",
    emoji: "(｡•̀ᴗ-)✧",
    color: "#FF91A4",
    colorHover: "#FF7F95",
  },
  {
    label: "Excited",
    emoji: "(*^‿^*)",
    color: "#FF91A4",
    colorHover: "#FF7F95",
  },
  {
    label: "Stressed",
    emoji: "(；￣Д￣)",
    color: "#FFB3A7",
    colorHover: "#FF9F93",
  },
  {
    label: "Anxious",
    emoji: "(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    color: "#FFB3A7",
    colorHover: "#FF9F93",
  },
];

export const postInstructions = {
  url: "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};
