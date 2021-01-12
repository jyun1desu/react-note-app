import {
    TOGGLE_THEME
} from "../actionTypes";

const initialState = 'default';

const theme = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME: {
            return action.payload.theme;
        }
        default: {
            return state;
        }
    }
};



export default theme;