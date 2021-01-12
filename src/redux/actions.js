import {
    CHANGE_MODE,
    TOGGLE_DELETE_MODE
} from "./actionTypes";

export const changeListMode = (mode) => ({
    type: CHANGE_MODE,
    payload: {mode}
});

export const toggleDeleteMode = () => ({
    type: TOGGLE_DELETE_MODE,
});