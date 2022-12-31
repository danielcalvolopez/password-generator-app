import { useState } from "react";
import "./Slider.scss";

const Slider = () => {
  const [characterLength, setCharacterLength] = useState(10);

  const handleCharacterLength = (event) => {
    setCharacterLength(event.target.value);
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(characterLength * 100) / 20}% 100%` };
  };

  return (
    <div className="character-length-container">
      <div className="character-length">
        <p>Character Length</p>
        <h1>{characterLength}</h1>
      </div>
      <input
        onChange={handleCharacterLength}
        value={characterLength}
        type="range"
        min="1"
        max="20"
        steps="1"
        style={getBackgroundSize()}
      />
    </div>
  );
};

export default Slider;
