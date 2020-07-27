import React from 'react';
import ReactDOM from 'react-dom';
import DeviceSelector from '../DeviceSelector';
import { render } from 'Utils/TestLibraryHelper';
import { act, Simulate } from 'react-dom/test-utils';

describe('DeviceSelector', () => {
    let props;
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = { onChange: jest.fn() };
    });

    test('Should render correctly', () => {
        expect(<DeviceSelector {...props} />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<DeviceSelector {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should call onChange prop on changes in the tab with the corresponding object', () => {
        act(() => {
            ReactDOM.render(<DeviceSelector {...props} />, container);
            Simulate.click(container.querySelector('[id="tab-is-tablet"]'));
        });
        expect(props.onChange).toHaveBeenCalledWith({ 'is-tablet': true });

        act(() => {
            ReactDOM.render(<DeviceSelector {...props} />, container);
            Simulate.click(container.querySelector('[id="tab-is-mobile"]'));
        });
        expect(props.onChange).toHaveBeenCalledWith({ 'is-mobile': true });

        act(() => {
            ReactDOM.render(<DeviceSelector {...props} />, container);
            Simulate.click(container.querySelector('[id="tab-is-desktop"]'));
        });
        expect(props.onChange).toHaveBeenCalledWith({ 'is-desktop': true });
    });
});
