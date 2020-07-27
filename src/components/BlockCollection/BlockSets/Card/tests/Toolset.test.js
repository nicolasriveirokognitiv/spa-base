import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import Toolset from '../Toolset';

const blockId = 'a';

describe('Card Toolset', () => {
    test('Should render Correctly', () => {
        expect(<Toolset id={blockId} />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Toolset id={blockId} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
