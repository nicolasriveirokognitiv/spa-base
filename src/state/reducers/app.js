import * as types from '../types/app';

const initialState = {};

const appReducer = (state = initialState, action = { type: null }) => {
    switch (action.type) {
        case types.APP_STATE_SET:
            return { ...state, state: action.payload };
        case types.USER_SET:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default appReducer;
