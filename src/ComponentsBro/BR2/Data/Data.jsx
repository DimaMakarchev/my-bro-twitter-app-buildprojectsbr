import React, {useMemo, useState} from "react";

import './Data.css'

export const Data = ({data, remove}) => {
    return (
        <div>
            {data.map(data => (
                <DataInBr key={data.id} remove={remove} {...data}/>
            ))
            }
        </div>
    )
};
export const DataInBr = ({id, img, firstName, remove,...data}) => {


    const [showMore, setShowMore] = useState(false);
    const removeBr = () => {
        remove(id);
    };
    return (
        <div className={'data'}>
            <img src={img} alt={id}/>
            <p>
                {showMore ? firstName : `${firstName.substring(0, 100)}...`}
                <button className={'data_btn_text'} onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'show less' : 'read all'}
                </button>
            </p>
            <button onClick={removeBr} className={'data_btn_remove'}>Don`t interesting</button>
        </div>
    )
};
