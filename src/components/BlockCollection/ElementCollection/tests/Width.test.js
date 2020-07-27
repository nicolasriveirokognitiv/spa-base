import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import Width from '../Width';

describe('Width', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    test('Should render Correctly', () => {
        expect(<Width />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Width />);
        expect(asFragment()).toMatchSnapshot();
    });
});
