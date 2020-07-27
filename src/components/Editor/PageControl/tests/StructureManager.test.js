import React from 'react';
import StructureManager from '../StructureManager';
import { render } from 'Utils/TestLibraryHelper';
import jsonPageStructure from '../../../../mocks/jsonPageStructure';

describe('StructureManager', () => {
    let props;
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = {
            page             : jsonPageStructure,
            handleBlockClick : jest.fn(),
        };
    });

    test('Should render correctly', () => {
        expect(<StructureManager {...props} />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<StructureManager {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
