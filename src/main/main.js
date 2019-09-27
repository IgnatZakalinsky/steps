import React from 'react';
import {NavLink, Route} from "react-router-dom";
import Links from "./links";
import Page1 from "../steps/s1/pages/pageFirst_nameLast_name/UI/page1";
import Profile from "../pages/profileIgnatZakalinsky/UI/profile";
import Page2 from "../steps/s2/pages/pageFirst_nameLast_name/UI/page2";
import Page3 from "../steps/s3/pages/pageFirst_nameLast_name/UI/page3";
import Page4 from "../steps/s4/pages/pageFirst_nameLast_name/UI/page4";

const Main = () => {
    return (
        <div>
            <NavLink to={'/'}>Main</NavLink>
            <Route exact path='/' render={() => <Links/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/page1' render={() => <Page1/>}/>
            <Route path='/page2' render={() => <Page2/>}/>
            <Route path='/page3' render={() => <Page3/>}/>
            <Route path='/page4' render={() => <Page4/>}/>
        </div>
    );
};

export default Main;
