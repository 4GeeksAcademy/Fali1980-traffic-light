import React, { useState } from "react";

const TrafficLight = () => {
  const [startLight, setStartLight] = useState(null);
  const [iconColor, setIconColor] = useState("black");

  const handleLightChange = (color) => {
    setStartLight(color);
    if (color === "lightRed") {
      setIconColor("green");
    } else if (color === "lightGreen") {
      setIconColor("red");
    }
  };

  return (
    <div className="container">
      <div className="boxLight">
        <div className={`lightRed ${startLight === "lightRed" ? "lightOn" : ""}`}
          onClick={() => handleLightChange("lightRed")}>
        </div>

        <div className={`lightYellow ${startLight === "lightYellow" ? "lightOn" : ""}`}
          onClick={() => handleLightChange("lightYellow")}>
        </div>

        <div className={`lightGreen ${startLight === "lightGreen" ? "lightOn" : ""}`}
          onClick={() => handleLightChange("lightGreen")}>

        </div>
      </div>
      <div className="sticks">
        <div className="verticalStick"></div>
        <div className="horizontalStick"></div>
        <div className="manBoxLight">
          <div
            className="man text-center pt-2"
          >
            <i className="fa-solid fa-person iconMan" style={{ color: iconColor }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrafficLight;
