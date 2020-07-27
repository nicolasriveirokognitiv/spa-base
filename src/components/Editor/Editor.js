import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as editorActions from 'State/actions/editor';
import Context from './Context';
import PageControl from './PageControl';
import PageView from './PageView';

function Editor({ page }) {
    // Used to provide access to the rendered blocks :)
    const [instanciatedBlocks, setInstanciatedBlocks] = useState({});

    return (
        <Context
            instanciatedBlocks={instanciatedBlocks}
            setInstanciatedBlocks={setInstanciatedBlocks}
            page={page}
        >
            <PageControl />
            <PageView />
        </Context>
    );
}

const mapStateToProps = state => ({ ...state.editor });

const mapDispatchToProps = dispatch => ({
    setPage          : page => dispatch(editorActions.setPage(page)),
    setSelectedBlock : block => dispatch(editorActions.setSelectedBlock(block)),
});

Editor.propTypes = { page: PropTypes.shape({}).isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
