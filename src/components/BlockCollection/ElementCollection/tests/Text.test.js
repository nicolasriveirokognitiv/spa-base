import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import EditorContext from 'State/editorContext';
import Text from '../Text';

describe('Text', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    const renderText = props => render(
        <EditorContext.Provider value={{ isTestModeActive: true }}>
            <Text {...props} />
        </EditorContext.Provider>,
    );

    test('Should render Correctly', () => {
        expect(<Text />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Text />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Text should be recibed on props', () => {
        const { getByTestId } = renderText({ value: 'Text', testId: 'text-input' });
        const elem = getByTestId('text-input');
        expect(elem.value).toBe('Text');
    });
});
