import React, { useState, useEffect } from "react";

import character1 from "../../../media/images/characters/1.png";
import character2 from "../../../media/images/characters/2.png";
import character3 from "../../../media/images/characters/3.png";
import character4 from "../../../media/images/characters/4.png";
import character5 from "../../../media/images/characters/5.png";
import character6 from "../../../media/images/characters/6.png";
import character7 from "../../../media/images/characters/7.png";
import character8 from "../../../media/images/characters/8.png";
import character9 from "../../../media/images/characters/9.png";
import character10 from "../../../media/images/characters/10.png";
import character11 from "../../../media/images/characters/11.png";
import character12 from "../../../media/images/characters/12.png";
import character13 from "../../../media/images/characters/13.png";
import character14 from "../../../media/images/characters/14.png";
import {
  FadeInComponent,
  RiseUpAnimation,
} from "../../../../styles/lazyStyles";

const characterImages = [
  character1,
  character2,
  character3,
  character4,
  character5,
  character6,
  character7,
  character8,
  character9,
  character10,
  character11,
  character12,
  character13,
  character14,
];

const characterImagesMap = {
  "1": character1,
  "2": character2,
  "3": character3,
  "4": character4,
  "5": character5,
  "6": character6,
  "7": character7,
  "8": character8,
  "9": character9,
  "10": character10,
  "11": character11,
  "12": character12,
  "13": character13,
  "14": character14,
};

const RandomCharacter = ({
  notSoRandomCharacter = null,
  width = "50px",
  speed = 1.33,
  borderRadius = null,
}) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    // Randomly select an image when the component mounts
    const randomImage =
      characterImages[Math.floor(Math.random() * characterImages.length)];
    setImage(randomImage);
  }, []);

  return notSoRandomCharacter ? (
    <FadeInComponent speed={speed}>
      <img
        src={characterImagesMap[notSoRandomCharacter]}
        alt={`Character ${notSoRandomCharacter}`}
        width={width}
        style={{ borderRadius: borderRadius }}
      />
    </FadeInComponent>
  ) : (
    <FadeInComponent speed={speed}>
      <img src={image} alt="Random Character" width={width} />{" "}
    </FadeInComponent>
  );
};

export default RandomCharacter;
