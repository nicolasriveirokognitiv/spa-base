/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import initStore from 'State/store';

const store = initStore();

const renderWithRedux = children => render(
    <Provider store={store}>
        {children}
    </Provider>,
);

export * from '@testing-library/react';
export { renderWithRedux, render };
