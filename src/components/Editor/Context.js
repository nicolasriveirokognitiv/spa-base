import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { pageStructurePropTypes } from 'Constants/propTypes';
import EditorContext from 'State/editorContext';
import BlocksContext from 'State/blocksContext';
import EditorInformation from './EditorInformation';

function shouldActivateTestMode() {
    if (process.env.NODE_ENV !== 'production') {
        const searchParams = new URLSearchParams(window.location.search);
        return searchParams.get('qa') !== null;
    }
    return false;
}

function Context({ page, instanciatedBlocks, setInstanciatedBlocks, children }) {
    // The separation between contexts allow us to perform changes in
    // one avoiding to re-render the children of the other one
    const [pageForTesting, setPageForTesting] = useState();

    const editorContext = useMemo(() => ({
        page                 : pageForTesting || page,
        renderEngineMode     : 'static',
        isTestModeActive     : shouldActivateTestMode(),
        isContextInitialized : true,
    }),
    [page, pageForTesting]);

    const blocksContext = useMemo(() => ({
        instanciatedBlocks,
        setInstanciatedBlocks,
        isContextInitialized: true,
    }),
    [instanciatedBlocks, setInstanciatedBlocks]);

    return (
        <BlocksContext.Provider value={blocksContext}>
            <EditorContext.Provider value={editorContext}>
                {editorContext.isTestModeActive && (
                    <EditorInformation
                        setPageForTesting={setPageForTesting}
                        info={{ title: editorContext.page.config.title, request: {}, unsavedBlocks: '', instanciatedBlocks }}
                        loadedPage={page}
                    />
                )}
                {children}
            </EditorContext.Provider>
        </BlocksContext.Provider>
    );
}

Context.propTypes = {
    page                  : pageStructurePropTypes.isRequired,
    instanciatedBlocks    : PropTypes.shape({}).isRequired,
    setInstanciatedBlocks : PropTypes.func.isRequired,
    children              : PropTypes.node.isRequired,
};

export default Context;
