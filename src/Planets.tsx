import * as React from 'react';

const Planets: React.FC = () => {
  return (
    <div>
      <div className="planet"> 
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
  )
}

export default Planets;