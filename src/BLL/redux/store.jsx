import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {testReducer} from "./testReducer";


const rootStore = combineReducers({
    testBR: testReducer
});

export const store = createStore(rootStore, applyMiddleware(thunk));
