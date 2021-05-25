import db from "../../firebase";

const initTest = {
    nameBR: 'bro',
    db: []
};


export const testReducer = (state = initTest, action) => {
    switch (action.type) {
        case 'BRO':
            return {
                ...state, nameBR: action.nameBR
            };
        case 'OKBRO':
            debugger;
            return {
                ...state, db: action.db
            };
        default :
            return state;
    }
};


export const testDispatcher = () => ({type: 'BRO', nameBR: 'BRO COOL'});
export const testDispatcherDB = (db) => ({type: 'OKBRO', db});

export const thunkTestDispatcher = (tweetMessage, tweetImage) => (dispatch) => {
    db.collection('posts').add({
        displayName: 'BroCool1234',
        userName: 'eeeee',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: 'https://i.pinimg.com/originals/60/04/30/600430c1d22c731b94cf4e7dae6b398a.gif'

    });
    dispatch(testDispatcher());
};

export const thunkTestDispatcherDB = () => (dispatch) => {
    db.collection('posts').onSnapshot(snapshot => {
        dispatch(testDispatcherDB(snapshot.docs.map(doc => doc.data())));
    })
};
