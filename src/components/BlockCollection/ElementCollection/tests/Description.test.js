import React from 'react';
import { render, fireEvent } from 'Utils/TestLibraryHelper';
import EditorContext from 'State/editorContext';
import Description from '../Description';

describe('Description', () => {
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

    const renderDescription = p => render(
        <EditorContext.Provider value={{ isTestModeActive: true }}>
            <Description {...props} {...p} />
        </EditorContext.Provider>,
    );

    test('Should render Correctly', () => {
        expect(<Description />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Description />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Description should be get from props', () => {
        const { getByTestId } = renderDescription({ testId: 'description-text' });
        const elem = getByTestId('description-text');
        expect(elem.innerHTML).toBe(props.value);
    });

    test('should call onChange prop on changes in input', () => {
        const { getByTestId } = renderDescription({ testId: 'description-text' });
        fireEvent.change(getByTestId('description-text'), { target: { value: 'foo' } });
        expect(props.onChange).toHaveBeenCalledWith('foo');
    });
});
