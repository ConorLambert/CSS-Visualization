import React from 'react';

const headerStyle = {
    position:'relative',
    display:'flex',
    alignItems:'center',
}
const logoWrapperStyle = {
    display:'inline-block',
    flexGrow:'1',
    textAlign: 'center'
}
const logoStyle = {
    fontSize: '40px',
    letterSpacing: '2px',
    transition: 'color 0.125s ease-in-out',
    color: '#58ade3',
    textDecoration: 'none',
    fontWeight:'600'
}

const Header = () => 
    <header style={headerStyle}>
        <div style={logoWrapperStyle}>
            <a style={logoStyle}>CSS Interactive Tutorials</a>
        </div>
    </header>

export default Header;