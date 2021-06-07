import db from "../../firebase";
import axios from "axios";

const initBirthday = {
    firedb: [],
    serverdb: [],
    loading: true,
    objectbr:[]
};


export const BRTREEReducer = (state = initBirthday, action) => {
    switch (action.type) {
        case 'OKBRO':
            debugger;
            return {
                ...state, firedb: action.db
            };
        case 'OK':
            debugger;
            return {
                ...state, firedb: []
            };
        case 'OKSERVERBR':
            debugger;
            return {
                ...state, serverdb: action.db.data
            };
        case 'OKSERVERBRFilter':
            debugger;
            return {
                ...state, serverdb: action.db
            };
        case 'LOADING':
            debugger;
            return {
                ...state, loading: action.data
            };
            case 'OKSERVERBROBJECT':
            debugger;
            return {
                ...state, objectbr: action.db.data
            };
        default :
            return state;
    }
};
//fire base
export const testDispatcherFireDB = (db) => ({type: 'OKBRO', db});
export const testDispatcherFireDBClean = () => ({type: 'OK'});
export const thunkTestDispatcherFireDB = () => (dispatch) => {
    db.collection('birthdays').onSnapshot(snapshot => {
        dispatch(testDispatcherFireDB(snapshot.docs.map(doc => doc.data())));
    })
};
//server db
export const testAxiosReqDispatcherServerDBBR = (db) => ({type: 'OKSERVERBR', db});
export const thunkAxiosReqDispatcherServerBR = () => async (dispatch) => {
    try {
        dispatch(testAxiosReqDispatcherServerLoadingBR(true));
        const dataBR = await axios.get('http://localhost:8456/');
        console.log(dataBR);
        dispatch(testAxiosReqDispatcherServerDBBR(dataBR));
        dispatch(testAxiosReqDispatcherServerLoadingBR(false));
    } catch (e) {
        console.log(e)
    }

};

export const testAxiosReqDispatcherServerDBFilterBR = (db) => ({type: 'OKSERVERBRFilter', db});
export const testAxiosReqDispatcherServerLoadingBR = (data) => ({type: 'LOADING', data});
//server get object
export const testAxiosReqDispatcherServerGetObjectDBBR = (db) => ({type: 'OKSERVERBROBJECT', db});
export const thunkAxiosReqDispatcherServerGetObjectBR = (index) => async (dispatch) => {
    try {
        dispatch(testAxiosReqDispatcherServerLoadingBR(true));
        const dataBR = await axios.get(`http://localhost:8456/br3/${index}`);
        console.log(dataBR);
        dispatch(testAxiosReqDispatcherServerGetObjectDBBR(dataBR));
        dispatch(testAxiosReqDispatcherServerLoadingBR(false));
    } catch (e) {
        console.log(e)
    }

};

