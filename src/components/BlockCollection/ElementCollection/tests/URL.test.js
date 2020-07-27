import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import EditorContext from 'State/editorContext';
import URL from '../URL';

describe('URL', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    const renderURL = props => render(
        <EditorContext.Provider value={{ isTestModeActive: true }}>
            <URL {...props} />
        </EditorContext.Provider>,
    );

    test('Should render Correctly', () => {
        expect(<URL />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<URL />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('URL should be recibed on props', () => {
        const { getByTestId } = renderURL({ value: 'URL', testId: 'url-input' });
        const elem = getByTestId('url-input');
        expect(elem.value).toBe('URL');
    });
});
