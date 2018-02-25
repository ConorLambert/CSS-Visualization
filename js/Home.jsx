import React from 'react';
import Header from './Header';
import Main from './Main';

const homeStyle = {
    display:'flex',
    flexDirection:'column',
    height:'100vh'
}

const Home = () =>
    <div style={homeStyle}>
        <Header />
        <Main />
    </div>

export default Home;