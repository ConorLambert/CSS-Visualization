import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
    position:'fixed',
    left:'0',
    top:'0',
    bottom:'0'
}

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tutorials:[
                {
                    key:"BoxModel",
                    title:"Box Model", 
                    children:[]
                },
                {
                    key:"Units",
                    title:"Units",
                    children:[]
                },
                {
                    key:"Flex",
                    title:"Flex",
                    children:[
                        {
                            key:"FlexContainer",
                            title:"Flex Container",
                            children:[]
                        },
                        {
                            key:"FlexItems",
                            title:"Flex Items",
                            children:[]
                        }
                    ]
                },
                {
                    key:"Grid",
                    title:"Grid",
                    children:[]
                }
            ]
        }
    }
    renderTutorialListItem = (tutorial) => (
        <div className="tutorial" id={tutorial.key} key={tutorial.key}>
            <NavLink to={`/${tutorial.key}`} activeClassName="selectedLink">
                {tutorial.title}
            </NavLink>
            {tutorial.children.length > 0 && this.renderTutorialList(tutorial.children)}
        </div>
    )
    renderTutorialList = (list) => (
        <div className='menu'>
            {list.map(this.renderTutorialListItem)}
        </div>
    )
    render(){
        return (
            <nav style={navStyle}>
                <div className="menuIcon">
                    <img src='../public/images/Hamburger_icon.svg.png' alt="Menu Icon" />
                </div>
                {this.renderTutorialList(this.state.tutorials)}
            </nav>
        )
    }
}

export default Navigation;