// @flow

import React from 'react';
import {render} from 'react-dom';

/* APP */
const App = function() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );  
}

render(<App />, document.getElementById('app'));
