
import { createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { app } from 'Constants/global';
import jsonPageStructure from 'Mocks/jsonPageStructure';

const composeEnhancers = composeWithDevTools({});

const initialState = {
    app: {
        user         : {},
        error        : {},
        snackbar     : { isVisible: false },
        confirmation : { isVisible: false },
        state        : app.state.new,
    },
    editor: { page: jsonPageStructure },
};

const initStore = (state = initialState) => createStore(
    combinedReducers,
    state,
    composeEnhancers(applyMiddleware(thunk)),
);

export default initStore;
