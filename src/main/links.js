import React from 'react';
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <div>
            <div><NavLink to={'/profile'}>Profile</NavLink></div>
            <div><NavLink to={'/page1'}>Page1</NavLink></div>
            <div><NavLink to={'/page2'}>Page2</NavLink></div>
            <div><NavLink to={'/page3'}>Page3</NavLink></div>
            <div><NavLink to={'/page4'}>Page4</NavLink></div>
        </div>
    );
};

export default Links;
