import * as types from '../types/editor';

export function setPage(payload) {
    return { type: types.PAGE_SET, payload };
}

export function setSelectedBlock(payload) {
    return { type: types.BLOCK_SELECTED, payload };
}
