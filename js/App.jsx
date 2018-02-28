import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main'

const homeStyle = {
  display:'flex',
  flexDirection:'column'
}

const App = () =>
  <BrowserRouter>
    <div style={homeStyle}>
      <Header />
      <Navigation />
      <Main />
    </div>
  </BrowserRouter>

export default App;
