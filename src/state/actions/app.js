import * as types from '../types/app';

export function setAppState(payload) {
    return { type: types.APP_STATE_SET, payload };
}

export function setUser(payload) {
    return { type: types.USER_SET, payload };
}
