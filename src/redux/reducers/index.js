import { combineReducers } from "redux";
import listMode from "./listMode";
import deleteMode from "./deleteMode";
import theme from "./theme";

export default combineReducers({ listMode,deleteMode, theme });
