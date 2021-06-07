import React, {useEffect} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {thunkAxiosReqDispatcherServerBR, thunkAxiosReqDispatcherServerGetObjectBR} from "../../BLL/redux/BRTREEReducer";
import {BR3} from "./BR3";

export const AppBR3 = () => {
    const data = useSelector(state => state.birthday.serverdb);
    const object = useSelector(state => state.birthday.objectbr);
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
            {/*{server}*/}
            <BR3 methodReqObBr={methodReqObBr} loading={loading} data={data} {...object}/>
        </div>
    );
};

