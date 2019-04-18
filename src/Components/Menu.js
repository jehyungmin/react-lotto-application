import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';


const Menu = () => {
    const activeStyle = {
        color: '#ffc0cb',
        fontWeight:'bold'
    };
const style ={
    color:'#c0c0c0',
    
}

    return (
        <div className="ulLiPosition">
                <ul>
                    <li><NavLink exact to="/" className="position" style={style} activeStyle={activeStyle}>회차별 번호</NavLink></li>
                    <li><NavLink exact to="/about" className="position" style={style} activeStyle={activeStyle}>로또게임</NavLink></li>
                    {/* <li><NavLink to="/about/react" activeStyle={activeStyle}>소개</NavLink></li> */}
                    {/* <li><NavLink to="/posts" activeStyle={activeStyle}>포스트목록</NavLink></li> */}
                </ul>
        </div>
    );
};

export default Menu;