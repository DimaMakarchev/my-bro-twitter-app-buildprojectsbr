import React from "react";
import {SideBarComponent} from "./ComponentsBro/SideBar/SideBarComponent";
import './App.css';
// import {useDispatch, useSelector} from "react-redux";
import {Feed} from "./ComponentsBro/Feed/Feed";
import {Widgets} from "./ComponentsBro/Widgest/Widgets";
import {useSelector} from "react-redux";
// import {useSelector} from "react-redux";

export const App = () => {


    return (
        <div className={'app'}>
            {/*SideBar*/}
            <SideBarComponent/>
            {/*Feed*/}
            <Feed/>
            {/*Widgets*/}
            <Widgets/>
        </div>
    );
}

export default App;
