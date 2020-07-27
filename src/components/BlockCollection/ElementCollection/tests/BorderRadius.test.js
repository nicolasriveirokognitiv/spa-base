import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import BorderRadius from '../BorderRadius';

describe('BorderRadius', () => {
    let container;
    let props;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = {
            onChange             : jest.fn(),
            value                : 'Rounded',
            isBorderRadiusEnable : true,
        };
    });

    test('Should render Correctly', () => {
        expect(<BorderRadius />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<BorderRadius {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
