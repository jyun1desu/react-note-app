import {
    CHANGE_MODE
} from "./actionTypes";

export const changeListMode = (mode) => ({
    type: CHANGE_MODE,
    payload: {mode}
});