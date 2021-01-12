import {
    TOGGLE_DELETE_MODE
} from "../actionTypes";

const initialState = false;

const deleteMode = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DELETE_MODE: {
            return !state;
        }
        default: {
            return state;
        }
    }
};

export default deleteMode;