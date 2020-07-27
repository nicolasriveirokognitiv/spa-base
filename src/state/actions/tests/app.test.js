import * as Actions from '../app';
import * as types from 'State/types/app';

describe('App Actions', () => {
    test('Should dispatch a Set App State action', () => {
        const appState = {
            something     : 'a',
            somethingElse : 'b',
        };

        const expectedAction = {
            type    : types.APP_STATE_SET,
            payload : appState,
        };

        expect(Actions.setAppState(appState)).toEqual(expectedAction);
    });
    test('Should dispatch a Set User action', () => {
        const user = {
            something     : 'a',
            somethingElse : 'b',
        };

        const expectedAction = {
            type    : types.USER_SET,
            payload : user,
        };

        expect(Actions.setUser(user)).toEqual(expectedAction);
    });
});
