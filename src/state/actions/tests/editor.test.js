import * as Actions from '../editor';
import * as types from 'State/types/editor';

describe('Editor Actions', () => {
    test('Should dispatch a Set Page action', () => {
        const page = {
            something     : 'a',
            somethingElse : 'b',
        };

        const expectedAction = {
            type    : types.PAGE_SET,
            payload : page,
        };

        expect(Actions.setPage(page)).toEqual(expectedAction);
    });
    test('Should dispatch a Select Block action', () => {
        const block = {
            something     : 'a',
            somethingElse : 'b',
        };

        const expectedAction = {
            type    : types.BLOCK_SELECTED,
            payload : block,
        };

        expect(Actions.setSelectedBlock(block)).toEqual(expectedAction);
    });
});
