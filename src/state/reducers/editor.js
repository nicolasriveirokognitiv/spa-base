import * as types from '../types/editor';

const initialState = {};

const editorReducer = (state = initialState, action = { type: null }) => {
    switch (action.type) {
        case types.PAGE_SET:
            return { ...state, page: action.payload };
        default:
            return state;
    }
};

export default editorReducer;
