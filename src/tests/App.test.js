import React from 'react';
import { renderWithRedux } from 'Utils/TestLibraryHelper';
import App from '../App';

const props = {
    appConnected    : true, // TODO: this props are not longer valid
    editorConnected : true,
};

test('Component App should match snapshot', async () => {
    const { asFragment } = renderWithRedux(<App {...props} />);
    expect(asFragment()).toMatchSnapshot();
});
