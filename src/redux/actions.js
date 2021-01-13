import {
    CHANGE_MODE,
    TOGGLE_DELETE_MODE,
    TOGGLE_THEME,
    ADD_NOTE,
    DELETE_NOTE
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

export const addNote = (note) => ({
    type: ADD_NOTE,
    payload: {note}
});

export const deleteNote = (notes) => ({
    type: DELETE_NOTE,
    payload: {notes}
});