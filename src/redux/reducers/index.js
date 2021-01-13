import {
    combineReducers
} from "redux";
import listMode from "./listMode";
import deleteMode from "./deleteMode";
import theme from "./theme";
import noteList from "./noteList";

export default combineReducers({
    noteList,
    listMode,
    deleteMode,
    theme
});