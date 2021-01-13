import {
    ADD_NOTE,
    DELETE_NOTE,
    EDIT_NOTE
} from "../actionTypes";


const list = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTE: {
            const newList = [action.payload.note,...state]
            return newList
        }
        case EDIT_NOTE: {
            const index = action.payload.index;
            const edittedNote = action.payload.note;
            const newList = [...state.slice(0, index), edittedNote, ...state.slice(index + 1)]
            return newList
        }
        case DELETE_NOTE: {
            const shouldDelete = action.payload.notes
            const newList = state.filter((note,index)=>{
                return !shouldDelete.includes(index)
            })
            return newList;
        }
        default: {
            return state;
        }
    }
};



export default list;