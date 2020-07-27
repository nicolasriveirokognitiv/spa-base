import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import Static from '../Static';

describe('Card Static', () => {
    test('Should render Correctly', () => {
        expect(<Static />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Static />);
        expect(asFragment()).toMatchSnapshot();
    });
});
