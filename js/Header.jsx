import React from 'react'

const headerStyle = {
    position:'relative',
    height:'80px',
    display:'flex',
    alignItems:'center',
    width:'95%'
}
const navButtonStyle = {
    display:'inline-block',
    position:'absolute',
}
const logoStyle = {
    display:'inline-block',
    marginLeft:'50%'
}

const Header = () => 
    <header style={headerStyle}>
        <div className="site-margin" style={navButtonStyle}>Nav Button</div>
        <div style={logoStyle}>CSS Logo Website</div>
    </header>

export default Header;