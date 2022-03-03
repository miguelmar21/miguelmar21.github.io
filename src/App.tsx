import * as React from 'react';
import { hot } from "react-hot-loader/root";
import Button from '@material-ui/core/Button';

function App() {
  return(
      <div>
        <h1>
          Hello Miguel
        </h1>
        <Button variant="contained">this is a material UI button</Button>
      </div>
    );
}

export default hot(App);