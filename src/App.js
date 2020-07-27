/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Editor from 'Components/Editor';
import { connect } from 'react-redux';
import * as appActions from 'State/actions/app';
import AuthenticationLayer from 'Components/AuthenticationLayer';

function App() {
    return (
        <div className="main-wrapper">
            <AuthenticationLayer>
                <Editor />
            </AuthenticationLayer>
        </div>
    );
}

const mapStateToProps = state => ({ ...state.app });
const mapDispatchToProps = dispatch => ({ setAppState: appState => dispatch(appActions.setAppState(appState)) });

App.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
