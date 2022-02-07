import React from "react";
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"/>
                </a>
            </div>
            <div className="usuario">
                <a href="/">
                    <img src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg"/>
                </a>
            </div>
        </header>
    );
}