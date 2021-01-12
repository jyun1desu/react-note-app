import {
    CHANGE_MODE
} from "../actionTypes";

const initialState = 'list';

const listMode = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MODE: {
            return action.payload.mode;
        }
        default: {
            return state;
        }
    }
};



export default listMode;