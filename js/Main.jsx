import React from 'react';

const mainStyle = {
    display:'flex',
    flexGrow:'1',
    backgroundColor:'#f5f5f5'
}
const navStyle = {
    flexGrow:'1'
}
const canvasStyle = {
    flexGrow:'5',
}
const ulStyle = {
    listStyle:'none',
    padding: '0' // override ul default padding
}

const Main = () => 
    <main style={mainStyle}>
        <nav className='site-margin' style={navStyle}>
            <ul style={ulStyle}>
                <li>Box Model</li>
                <li>Flex
                    <ul style={ulStyle}>
                        <li>Playground</li>
                    </ul>
                </li>
                <li>Grid</li>
            </ul>
        </nav>
        <canvas style={canvasStyle} />
    </main>

export default Main;