import * as React from 'react';
import { Link } from 'react-router-dom';
import Planets from './Planets'

const App: React.FC = () => {
  return(
    <div>
      <Planets />
      {/* <nav>
        <Link to="/projects">Projects</Link>
        <Link to="/aboutMe">About me</Link>
      </nav> */}
    </div>
    );
}

export default App;