import React from "react";
import './SideBarOption.css'

export const SideBarOptions = ({active, text, Icon}) => {
    return (
        <div className={`sideBarOptions ${active && "sideBarOptions--active"}`}>
            <Icon/>
            <h2>{text}</h2>

        </div>
    )
};
