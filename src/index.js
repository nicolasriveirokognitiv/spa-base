import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './state/store';
import App from './App';
import './styles/imports.less';

const store = initStore();

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'),
);
