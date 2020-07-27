import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import Dynamic from '../Dynamic';

describe('Card Dynamic', () => {
    test('Should render Correctly', () => {
        expect(<Dynamic />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Dynamic />);
        expect(asFragment()).toMatchSnapshot();
    });
});
