import {
    createStore
} from "redux";
import rootReducer from "./reducers";
import {
    loadState,
    saveNotes
} from "./localStorage";
import throttle from 'lodash.throttle';

const existedNotes = loadState();

const store = createStore(rootReducer, {
    noteList: existedNotes
});

store.subscribe(throttle(() => {
    saveNotes(store.getState().noteList);
}, 1000));

export default store;