import { combineReducers } from 'redux';
import appReducer from './app';
import editorReducer from './editor';

export default combineReducers({
    app    : appReducer,
    editor : editorReducer,
});
