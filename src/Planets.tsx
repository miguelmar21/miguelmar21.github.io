import React, { useState } from "react";

const clickedPlanetStlye={transform: "scale(3)", transition: "transform 2s"};

const Planets: React.FC = () => {
  const [clickedPlanet, setClickedPlanet] = useState("none");

  const togglePlanetClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const className = (event.target as HTMLDivElement).className;
    if (className === 'mask') {
      setClickedPlanet('planet-1');
    }
  };

  return (
    <div>
      <div
        className="planet"
        style={clickedPlanet === 'planet-1' ? clickedPlanetStlye : {}}
        onClick={togglePlanetClick}
      >
        <div className="wrap">
          <div className="background"></div>
          <div className="clouds"></div>
        </div>
        <div className="mask"></div>
      </div>
      <div className="planet-2">
        <div className="wrap-2">
          <div className="background-2"></div>
          <div className="clouds-2"></div>
        </div>
        <div className="mask-2"></div>
      </div>
    </div>
  );
};

export default Planets;
