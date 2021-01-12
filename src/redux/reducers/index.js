import { combineReducers } from "redux";
import listMode from "./listMode";
import deleteMode from "./deleteMode";

export default combineReducers({ listMode,deleteMode });
