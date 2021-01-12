import {
    CHANGE_MODE,
    TOGGLE_DELETE_MODE,
    TOGGLE_THEME
} from "./actionTypes";

export const changeListMode = (mode) => ({
    type: CHANGE_MODE,
    payload: {mode}
});

export const toggleDeleteMode = () => ({
    type: TOGGLE_DELETE_MODE,
});

export const toggleTheme = (theme) => ({
    type: TOGGLE_THEME,
    payload: {theme}
});