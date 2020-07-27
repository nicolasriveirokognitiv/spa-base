import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import TextAlignment from '../TextAlignment';

describe('TextAlignment', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    test('Should render Correctly', () => {
        expect(<TextAlignment />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<TextAlignment />);
        expect(asFragment()).toMatchSnapshot();
    });
});
