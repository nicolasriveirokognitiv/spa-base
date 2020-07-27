import React from 'react';
import { render, fireEvent } from 'Utils/TestLibraryHelper';
import EditorContext from 'State/editorContext';
import Border from '../Border';

describe('Border', () => {
    let container;
    let props;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = {
            onChange : jest.fn(),
            value    : true,
        };
    });

    const renderBorder = p => render(
        <EditorContext.Provider value={{ isTestModeActive: true }}>
            <Border {...props} {...p} />
        </EditorContext.Provider>,
    );

    test('Should render Correctly', () => {
        expect(<Border />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Border />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Switch status should be the same in value', async () => {
        const { getByTestId } = renderBorder({ testId: 'border-switch' });
        const element = getByTestId('border-switch');
        expect(element.checked).toBeTruthy();
    });

    test('should call onChange prop on changes in input', () => {
        const { getByTestId } = renderBorder({ testId: 'border-switch' });
        fireEvent.click(getByTestId('border-switch'));
        expect(props.onChange).toHaveBeenCalled();
    });

    // TO DO test change color (handleChildrenChange)
});
