import React from 'react';
import { render, fireEvent } from 'Utils/TestLibraryHelper';
import EditorContext from 'State/editorContext';
import BackgroundColor from '../BackgroundColor';

describe('BackgroundColor', () => {
    let container;
    let props;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = {
            onChange : jest.fn(),
            value    : 'chunk',
        };
    });

    const renderBackgroundColor = p => render(
        <EditorContext.Provider value={{ isTestModeActive: true }}>
            <BackgroundColor {...props} {...p} />
        </EditorContext.Provider>,
    );

    test('Should render Correctly', () => {
        expect(<BackgroundColor />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<BackgroundColor />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Input text should be the same in value', async () => {
        const { getByTestId } = renderBackgroundColor({ testId: 'background-color-input' });
        const input = getByTestId('background-color-input');
        expect(input.value).toBe('chunk');
    });

    test('should call onChange prop on changes in input', () => {
        const { getByTestId } = renderBackgroundColor({ testId: 'background-color-input' });
        fireEvent.change(getByTestId('background-color-input'), { target: { value: 'foo' } });
        expect(props.onChange).toHaveBeenCalledWith('foo', 'backgroundColor');
    });
});
