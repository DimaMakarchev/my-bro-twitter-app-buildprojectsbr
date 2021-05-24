import React from 'react';
import {SideBarComponent} from "./ComponentsBro/SideBar/SideBarComponent";
import './App.css';
import {Feed} from "./ComponentsBro/Feed/Feed";
import {Widgets} from "./ComponentsBro/Widgest/Widgets";

function App() {
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
