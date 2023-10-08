import styled, { keyframes } from "styled-components";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

export const sineWave = keyframes`
0%, 100% {
  border-radius: 25% 75% 25% 75%;
}
25% {
  border-radius: 37.5% 62.5% 62.5% 37.5%;
}
50% {
  border-radius: 25% 75% 25% 75%;
}
75% {
  border-radius: 62.5% 37.5% 37.5% 62.5%;
}
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 100%;
  min-width: 100%;

  /* max-width: 100%; */
  transition: 0.2s all ease-in-out;
  padding: 12px;
  border-radius: 2px;
  /* box-shadow: 0 3px 6px #0b186be2, 0 6px 6px rgba(0, 0, 0, 0.23); */
  &:hover {
    /* transform: scale(1.01); */
    /* box-shadow: 0 19px 38px  #0b186be2, 0 15px 12px rgba(0,0,0,0.22); */
  }
`;

export const StyledCollectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-top: 12px;
  margin-bottom: 12px;
  transition: 0.2s all ease-in-out;
  padding: 12px;
  border-radius: 2px;
  /* box-shadow: 0 3px 6px #6b0b68e1, 0 6px 6px rgba(0, 0, 0, 0.23); */
  &:hover {
    /* transform: scale(1.01); */
    /* box-shadow: 0 19px 38px  #0b186be2, 0 15px 12px rgba(0,0,0,0.22); */
  }
`;
export const StyledModule = styled.button`
  border: 1px solid #636366;
  background-color: black;
  // background-size: cover;
  box-sizing: border-box;
  margin: 8px;
  width: 140px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  color: white;
  transition: 0.15s all ease-in-out;
  border: 1px solid
    ${(props) => {
      return props.patreonObject.isModuleDisabled
        ? "#11220E"
        : props.patreonObject.rare
        ? "#DA830D"
        : props.patreonObject.highValue
        ? "#F8B125"
        : props.patreonObject.new
        ? "#f9c4ff"
        : props.patreonObject.underConstruction
        ? "#6A74B4"
        : "#B271D1";
    }};

  text-shadow: 1px 1px 5px black;

  /* cursor: ${(props) => {
    return props.patreonObject.isModuleDisabled ? "not-allowed" : "grab";
  }}; */

  &:hover {
    transform: scale(1.1);

    background: ${(props) => {
      return props.patreonObject.isModuleDisabled ? "#48464A" : "#f5befa";
    }};

    animation: ${sineWave} 3s infinite ease-in-out;
  }

  background-image: url(${(props) => props.patreonObject.backgroundImgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ComingSoonModule = styled.button`
  border: 1px solid #636366;
  background-color: black;
  background-size: cover;
  box-sizing: border-box;
  margin: 8px;
  width: 140px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  color: white;
  transition: 0.15s all ease-in-out;
  border: 5px dashed
    ${(props) => {
      return props.patreonObject.isModuleDisabled
        ? japaneseThemePalette.SakuraMochiPink
        : props.patreonObject.rare
        ? "#DA830D"
        : props.patreonObject.highValue
        ? "#F8B125"
        : props.patreonObject.new
        ? "#f9c4ff"
        : props.patreonObject.underConstruction
        ? "#6A74B4"
        : "#B271D1";
    }};

  text-shadow: 1px 1px 5px black;
  background-color: ${(props) => {
    return props.patreonObject.isModuleDisabled
      ? "black"
      : props.patreonObject.rare
      ? "#DA830D"
      : props.patreonObject.highValue
      ? "#F8B125"
      : props.patreonObject.new
      ? "#f6a3ff"
      : props.patreonObject.underConstruction
      ? "#6A74B4"
      : "#F099AD";
  }};

  cursor: ${(props) => {
    return props.patreonObject.isModuleDisabled
      ? "not-allowed!important"
      : "grab";
  }};

  &:hover {
    transform: scale(1.1);

    background: ${(props) => {
      return props.patreonObject.isModuleDisabled ? "black" : "#f5befa";
    }};
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    cursor: ${(props) => {
      return props.active ? "grab" : "not-allowed";
    }};
    transform: ${(props) => {
      return props.active &&
        props.pathSelectionAnimationData.path === props.path
        ? "scale(0.95)"
        : props.active &&
          !(props.pathSelectionAnimationData.path === props.path)
        ? "scale(1.02)"
        : "";
    }};

    background: ${(props) => {
      const isActive = props.active;
      const isSelectedPath =
        props.pathSelectionAnimationData.path === props.path;
      const currentPath = props.path;
      console.log("currentPath", currentPath);

      let backgroundColor = "";

      // Function to convert a hex color to its blue version
      const toBlueVersion = (color) => {
        // Implement your logic to convert to blue version
        return "#64ddff"; // Example
      };

      // Function to convert a hex color to its golden version
      const toGoldenVersion = (color) => {
        // Implement your logic to convert to golden version
        return "#ffd164"; // Example
      };

      if (isActive && isSelectedPath) {
        backgroundColor = "#ff64ff";
      } else if (isActive && !isSelectedPath) {
        backgroundColor = "#ff64ff;";
      }

      // Adjust color based on path
      if (currentPath === "Engineer") {
        // Colors remain the same
      } else if (currentPath === "Creator") {
        backgroundColor = toBlueVersion(backgroundColor);
      } else if (currentPath === "Entrepeneur") {
        console.log("ok");
        backgroundColor = toGoldenVersion(backgroundColor);
      }

      return backgroundColor;
    }};

    animation: ${sineWave} 3s infinite ease-in-out;

    text-shadow: 1px 1px 5px black;
    color: white;
  }

  background: ${(props) => {
    const isActive = props.active;
    const isSelectedPath = props.pathSelectionAnimationData.path === props.path;
    const currentPath = props.path;

    let backgroundColor = "";

    if (isActive && isSelectedPath) {
      backgroundColor = "#FF64FF"; // Original color for selected path
    } else if (isActive && !isSelectedPath) {
      backgroundColor = "#b271d1"; // Original color for non-selected path
    }

    // Adjust color based on path
    if (currentPath === "Engineer") {
      // Colors remain the same
    } else if (currentPath === "Creator") {
      backgroundColor = backgroundColor === "#FF64FF" ? "#6495ff" : "#6495ff"; // Blue versions
    } else if (currentPath === "Entrepeneur") {
      backgroundColor = backgroundColor === "#FF64FF" ? "#ffb264" : "#ffb264"; // Golden versions
    }

    return backgroundColor;
  }};

  border: 2px solid hotpink;

  width: 125px;

  height: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 12px;

  color: white;
  transition: 0.15s all ease-in-out;
  text-shadow: 1px 1px 5px black;
  // color: #f5befa;
  border-radius: 44%;

  box-shadow: ${(props) => {
    return props.pathSelectionAnimationData.path === props.path
      ? "1px 1px 17px 6px rgba(255,100,255,1);"
      : "";
  }};

  /* cursor: ${(props) => {
    return props.active ? "grab" : "not-allowed";
  }}; */

  transform: ${(props) => {
    return props.pathSelectionAnimationData.path === props.path
      ? "scale(0.95)"
      : "";
  }};
`;
//

export const StyledPath = styled.button`
  box-sizing: border-box;
  background-color: #f5befa;

  /* max-width: 200px; */
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  /* padding: 10px;
  margin: 12px; */
  /* border-radius: 46%; */
  color: white;
  transition: 0.15s all ease-in-out;
  text-shadow: 1px 1px 5px black;

  cursor: ${(props) => {
    return props.active ? "grab" : "not-allowed";
  }};

  &:hover {
    transform: ${(props) => {
      return props.active ? "scale(1.1)" : "";
    }};

    /* background: #B993D6;  /* fallback for old browsers */
    /* background: -webkit-linear-gradient(to top, #8CA6DB, #B993D6);  Chrome 10-25, Safari 5.1-6 */
    /* background: linear-gradient(to top, #8CA6DB, #B993D6);  */
    background-color: #ff64ff;
    box-shadow: 0 3px 6px #0b186be2, 0 6px 6px #fff5ca;
    /* box-shadow: 0 14px 28px #340627e0, 0 10px 10px rgba(0, 0, 0, 0.22); */
  }
`;

export const StyledPromptButton = styled.button`
  background-color: ${(props) => {
    return props.loadingMessage ? "#48484A" : "black";
  }};

  cursor: ${(props) => {
    return props.loadingMessage ? "not-allowed" : "grab";
  }};

  color: white;
  /* border: 2px solid #48484a; */

  border: 1px solid
    ${(props) => {
      return props?.borderHighlight;
    }};
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px; */
  text-align: left;
  padding: 10px;
  width: 200px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  transition: 0.15s all ease-in-out;
  -webkit-box-shadow: 0px 1px 15px -1px rgba(42, 63, 120, 1);
  -moz-box-shadow: 0px 1px 15px -1px rgba(42, 63, 120, 1);
  box-shadow: 0px 1px 15px -1px rgba(42, 63, 120, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export let prettyColorPalette = {
  banner: "#F8B125",
  paths: "#F5BEFA",
  softYellowGlow: "#FFF5CA",
};

export let japaneseThemePalette = {
  CherryBlossomPink: "#FFB7C5", // Cherry Blossom
  KyotoPurple: "#663399", // Sweet Potato Purple
  FujiSanBlue: "#6f97d3", // Mount Fuji Blue
  TokyoTwilight: "#706fd3", // Twilight in Tokyo
  SakuraMochiPink: "#FF92A9", // Sakura Mochi
  WisteriaPurple: "#89729E", // Wisteria Flower
  GoldenAccent: "#bf8902", // Gold in Japanese Art
  WoodenArchitectureBrown: "#d3a86f", // Japanese Wood Architecture
  BambooForestGreen: "#6fd3bc", // Bamboo Forest
  DeepCherryBlossomPink: "#C71585", // Deep Cherry Blossom
  ProsperityEmeraldGreen: "#88d36f", // Symbol of Wealth
  StrongRed: "#DC143C", // Japanese Flag Red
  StrongBlue: "#00008B", // Indigo Blue Textile
  DarkMetallicSilver: "#5A5A5A", // Darkened Steel Samurai Sword
  Lavender: "rgba(220,205,255, 1)",
  PowerPurple: "rgba(102, 3, 252, 1)",
  PowerPink: "#f7059d",
  iphoneBlue: "",
};

// opinionated
export let textBlock = (
  backgroundColor,
  shadowSize = 4,
  borderRadius = 4,
  color = "white",
  boxShadow = "0px 0px 0px 0px rgba(0,0,0, 1);"
) => {
  return {
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    padding: 16,
    textShadow: `${shadowSize}px ${shadowSize}px ${shadowSize || 10}px black`,
    color: color,
    boxShadow: boxShadow,
  };
};
