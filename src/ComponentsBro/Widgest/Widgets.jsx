import React from "react";
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';

export const Widgets = () => {
    return (
        <div className={'widgets'}>
            <div className="widgts__input">
                <SearchIcon className={'widgts__search'}/>
                <input placeholder={'Search twitter'} type={'text'}/>
            </div>
            <div className="widgts__conteiner">
                <h2>What`s happening</h2>
            </div>

        </div>
    )
};
