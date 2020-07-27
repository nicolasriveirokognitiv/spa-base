import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import Item from '../Item';

describe('Item', () => {
    let props;
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = {
            onClick       : jest.fn(),
            itemClassName : jest.fn(),
            isOpen        : true,
            block         : {
                properties: {
                    name : 'foo',
                    icon : 'icon',
                },
            },
        };
    });

    test('Should render Correctly', () => {
        expect(<Item {...props} />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Item {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
