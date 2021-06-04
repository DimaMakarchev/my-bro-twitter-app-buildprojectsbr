import React, {useCallback, useEffect, useState} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {thunkAxiosReqDispatcherServerBR, thunkAxiosReqDispatcherServerGetObjectBR} from "./BLL/redux/BRTREEReducer";

export const App = () => {
    const data = useSelector(state => state.birthday.serverdb);
    const object = useSelector(state => state.birthday.object);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const reqDataBr = () => {
        dispatch(thunkAxiosReqDispatcherServerBR());
        dispatch(thunkAxiosReqDispatcherServerGetObjectBR(0));
    };

    const methodLeft = (index) => {
        debugger
        if (index < data.length && index >= 0) {
            dispatch(thunkAxiosReqDispatcherServerGetObjectBR(index));
            setCount(index);
        } else {
            setCount(index + 1);
        }

    };
    const methodRight = (index) => {
        debugger
        if (index < data.length) {
            dispatch(thunkAxiosReqDispatcherServerGetObjectBR(index));
            setCount(index);
        } else {
            setCount(data.length - 1);
        }

    };

    useEffect(() => {
        reqDataBr();
    }, []);
    return (
        <div className={'app__container'}>
            {/*{data.map(value => <h1>{value.id}</h1>)}*/}
            {object.firstName}
            <img src={object.img} alt={''}/>
            <p>{object.text}</p>
            <button onClick={() => {
                methodLeft(count - 1)
            }}><h1>left</h1></button>

            <button onClick={() => {
                methodRight(count + 1)
            }}><h1>Right</h1></button>

        </div>
    );
};

export default App;
