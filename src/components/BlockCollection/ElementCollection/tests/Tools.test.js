import React from 'react';
import Tools from '../Tools';
import Context from 'Components/Editor/Context';
import { render, fireEvent } from 'Utils/TestLibraryHelper';

const blockId = 'a';
const blockType = 'card';
const instanciatedBlocksMock = {
    [blockId]: {
        current: {
            setProperties     : jest.fn(),
            properties        : { data: { }, config: {}, design: {} },
            unsavedProperties : { },
        },
    },
};
const littlePageMock = {
    config: {
        title           : '',
        metaDescription : '',
        metaKeywords    : '',
    },
    design : { className: '' },
    rows   : {
        columns: [{
            blocks: [
                {
                    type     : 'Card',
                    category : 'Basic',
                    config   : {},
                    data     : {},
                    design   : {},
                    content  : {},
                },
            ],
        }],
    },
};

// Enables QA Mode on the Context
window.history.pushState({}, 'Test QA', '?qa');

describe('Tools', () => {
    let props;
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = { blockId, blockType };
    });

    const renderController = (setBlocks = () => {}) => render(
        <Context
            instanciatedBlocks={instanciatedBlocksMock}
            setInstanciatedBlocks={setBlocks}
            page={littlePageMock}
        >
            <Tools.Controller {...props}>
                <Tools.Title />
            </Tools.Controller>
        </Context>,
    );

    test('Should render the controller correctly', () => {
        expect(renderController()).toBeDefined();
    });

    test('Should match snapshot for the controller', async () => {
        const { asFragment } = renderController();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should call setProperties', async () => {
        const { getByTestId } = renderController();
        const element = getByTestId('card-data-title');

        fireEvent.click(element);
        fireEvent.change(element, { target: { value: 'foo' } });

        expect(instanciatedBlocksMock[blockId].current.setProperties).toHaveBeenCalled();
    });
});
