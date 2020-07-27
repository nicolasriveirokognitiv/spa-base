import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import getClassName from 'Utils/getClassName';
import { Button, Input } from 'antd';

function EditorInformation({ setPageForTesting, info: { title, request, instanciatedBlocks }, loadedPage }) {
    const [, refresh] = useState();
    const [isVisible, setVisibility] = useState();
    const [isTransparent, setTransparency] = useState();
    const [JSONForTesting, setJSONForTesting] = useState('');

    // TODO: Try to add each new request to array so we can show all of them
    // const [requests, setRequests] = useState([]);

    useEffect(() => {
        // The information is shown when the user press Shift+F1
        function setVisibilityOnKeyCombination(e) {
            if (e.keyCode === 112 && e.shiftKey) {
                setVisibility(prev => !prev);
            }
        }

        window.addEventListener('keydown', setVisibilityOnKeyCombination);
        return () => window.removeEventListener('keydown', setVisibilityOnKeyCombination);
    }, []);

    const stringifiedPage = useMemo(() => JSON.stringify(loadedPage), [loadedPage]);

    const handleSetMockClick = () => {
        const page = JSONForTesting.trim() ? JSON.parse(JSONForTesting) : null;
        setPageForTesting(page);
    };

    const handleCleanMockClick = () => setPageForTesting(null);

    const handleChangeText = e => setJSONForTesting(e.target.value);

    const handleChangeFile = inputEvent => {
        const fileReader = new FileReader();
        fileReader.addEventListener('load', fileEvent => setJSONForTesting(fileEvent.target.result));
        fileReader.readAsBinaryString(inputEvent.target.files[0]);
    };

    const blocksIDs = Object.keys(instanciatedBlocks);
    let unsavedBlocks = '';
    let blocksIDsList = '';

    if (blocksIDs.length) {
        unsavedBlocks = blocksIDs.reduce((prev, id) => (
            Object.keys(instanciatedBlocks[id].current.unsavedProperties).length > 0
                ? [...prev, id]
                : prev
        ), []).join(', ');

        blocksIDsList = blocksIDs.join(', ');
    }

    return (
        <div
            data-testid="editor-information"
            data-loaded-page-title={title}
            data-loaded-page-json={stringifiedPage}
            data-request-state={request.state}
            data-request-url={request.url}
            data-request-response={request.response}
            data-unsaved-blocks={unsavedBlocks}
            data-instanciated-blocks-ids={blocksIDsList}
            className={getClassName({ isVisible, isTransparent }, 'qa-block-wrapper')}
        >
            <div className="qa-block-data">
                <div className="qa-block-data-row flex flex-space-between flex-middle">
                    <div className="qa-block-data-title">Editor</div>
                    <div className="qa-block-data-buttons">
                        <span className={`${isTransparent ? 'bm-icon-visibility' : 'bm-icon-visibility-off'} qa-block-data-button-circle qa-block-data-toggle`} onClick={() => setTransparency(prev => !prev)} />
                        <span className="qa-block-data-button-circle bm-icon-refresh" data-testid="editor-information-refresh" onClick={refresh} />
                    </div>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Logged User</span>
                    <span className="qa-block-data-content">-</span>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Request State</span>
                    <span className="qa-block-data-content">{request.state || '-'}</span>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Request URL</span>
                    <span className="qa-block-data-content">{request.url || '-'}</span>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Request Response</span>
                    <span className="qa-block-data-content">{request.response || '-'}</span>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Unsaved Blocks</span>
                    <span className="qa-block-data-content">{unsavedBlocks || '-'}</span>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Instanciated Blocks  ID&apos;s</span>
                    <span className="qa-block-data-content">{blocksIDsList}</span>
                </div>
            </div>
            <div className="qa-block-data">
                <div className="qa-block-data-row">
                    <div className="qa-block-data-title">Page</div>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Current</span>
                    <span className="qa-block-data-content">{title}</span>
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Externally Loaded JSON Page</span>
                    <Input.TextArea readOnly className="qa-block-data-content" data-testid="editor-information-loaded-json" rows={5} value={stringifiedPage} />
                </div>
                <div className="qa-block-data-row">
                    <span className="qa-block-data-label">Open File</span>
                    <input id="upload" type="file" onChange={handleChangeFile} accept="application/JSON" />
                    <span className="qa-block-data-label">Paste JSON</span>
                    <Input.TextArea data-testid="editor-information-json-mock" onChange={handleChangeText} rows={5} placeholder="Paste a new JSON Page Structure here to replace the loaded one" />
                </div>
                <div className="qa-block-data-row text-align-right margin-bottom">
                    <Button type="text" className="qa-block-data-button" data-testid="editor-information-refresh" onClick={handleSetMockClick} disabled={!JSONForTesting}>Set mock</Button>
                    <Button type="text" className="qa-block-data-button" data-testid="editor-information-refresh" onClick={handleCleanMockClick}>Clean mock</Button>
                </div>
            </div>
        </div>
    );
}

EditorInformation.propTypes = {
    setPageForTesting : PropTypes.func.isRequired,
    info              : PropTypes.shape({
        title              : PropTypes.string,
        unsavedBlocks      : PropTypes.string,
        request            : PropTypes.shape({ state: PropTypes.string, url: PropTypes.string, response: PropTypes.string }),
        instanciatedBlocks : PropTypes.shape({}),
    }).isRequired,
};

export default EditorInformation;
