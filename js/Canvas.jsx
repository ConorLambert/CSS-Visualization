import React from 'react';

const mainStyle = {
    display:'flex',
    flexGrow:'1',
    backgroundColor:'#f5f5f5'
}

class Canvas extends React.Component { 
    constructor(props){
        super(props);
        this.state = {}
    } 
    render() {
        return (
            <main style={mainStyle}>
                <canvas id="canvas" />
            </main>
        )
    }
}

export default Canvas;