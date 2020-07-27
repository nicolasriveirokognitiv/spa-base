import React from 'react';
import { render } from 'Utils/TestLibraryHelper';
import EditorContext from 'State/editorContext';
import Title from '../Title';

describe('Title', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    const renderTitle = props => render(
        <EditorContext.Provider value={{ isTestModeActive: true }}>
            <Title {...props} />
        </EditorContext.Provider>,
    );

    test('Should render Correctly', () => {
        expect(<Title />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Title />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Title should be recibed on props', () => {
        const { getByTestId } = renderTitle({ value: 'Title', testId: 'title-input' });
        const elem = getByTestId('title-input');
        expect(elem.value).toBe('Title');
    });
});
