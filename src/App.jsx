import React, {useCallback, useEffect, useState} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {thunkAxiosReqDispatcherServerBR, thunkAxiosReqDispatcherServerGetObjectBR} from "./BLL/redux/BRTREEReducer";
import {BR3} from "./ComponentsBro/BR3/BR3";

export const App = () => {
    const data = useSelector(state => state.birthday.serverdb);
    const object = useSelector(state => state.birthday.object);
    const loading = useSelector(state => state.birthday.loading);
    const dispatch = useDispatch();
    const reqDataBr = () => {
        dispatch(thunkAxiosReqDispatcherServerBR());
        dispatch(thunkAxiosReqDispatcherServerGetObjectBR(0));
    };

    const methodReqObBr = (index) => {
        dispatch(thunkAxiosReqDispatcherServerGetObjectBR(index));
    };


    useEffect(() => {
        reqDataBr();
    }, []);
    return (
        <div className={'app__container'}>
            {/*{data.map(value => <h1>{value.id}</h1>)}*/}
            <BR3 methodReqObBr={methodReqObBr} loading={loading} data={data} {...object}/>
        </div>
    );
};

export default App;
