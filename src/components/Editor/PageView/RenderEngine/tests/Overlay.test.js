import React from 'react';
import { render, screen } from 'Utils/TestLibraryHelper';
import Overlay from '../Overlay';

describe('Overlay', () => {
    let props;
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        props = {
            block: {
                category : 'Headers',
                config   : { title: 'Dummy' },
                data     : { description: 'This is a notification ', title: 'Notification Title' },
                design   : { size: 'Medium' },
                id       : 'xaF0kvS',
                type     : 'Notification',
            },
            type : 'Notification',
            mode : 'static',
        };
    });

    test('Should render Correctly', () => {
        expect(<Overlay {...props} />).toBeDefined();
    });

    test('Should match snapshot', async () => {
        const { asFragment } = render(<Overlay {...props} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should show an alert if type is no correct', () => {
        props.type = 'Foo';
        render(<Overlay {...props} />);
        expect(screen.getByTestId('alert')).toBeDefined();
    });

    test('Should show an alert if type is no correct', () => {
        props.mode = 'dynamic';
        render(<Overlay {...props} />);
        expect(screen.getByTestId('notification-dynamic')).toBeDefined();
    });
});

