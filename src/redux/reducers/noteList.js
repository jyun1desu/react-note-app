import {
    ADD_NOTE,
    DELETE_NOTE
} from "../actionTypes";


const list = (state = [], action) => {
    switch (action.type) {
        case ADD_NOTE: {
            const newList = [...state,action.payload.note]
            return newList
        }
        case DELETE_NOTE: {
            return action.payload.mode;
        }
        default: {
            return state;
        }
    }
};



export default list;