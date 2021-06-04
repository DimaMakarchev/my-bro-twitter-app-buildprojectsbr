import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {BRTREEReducer} from "./BRTREEReducer";


const rootStore = combineReducers({
    birthday: BRTREEReducer
});

export const store = createStore(rootStore, applyMiddleware(thunk));
