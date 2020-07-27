import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import EditorContext from 'State/editorContext';
import CSSPreprocessor from './CSSPreprocessor';
import getClassName from 'Utils/getClassName';
import Layout from './Layout';

function RenderEngine({ selectedDevice }) {
    const { page, renderEngineMode } = useContext(EditorContext);
    const classNames = getClassName({ ...selectedDevice }, 'page-view-wrapper');

    return (
        <div className={classNames}>
            <div className="render-engine">
                <CSSPreprocessor page={page} mode={renderEngineMode} />
                <Layout page={page} mode={renderEngineMode} />
            </div>
        </div>
    );
}

RenderEngine.propTypes = {
    selectedDevice: PropTypes.oneOfType([
        PropTypes.shape({ desktop: PropTypes.bool }),
        PropTypes.shape({ mobile: PropTypes.bool }),
        PropTypes.shape({ tablet: PropTypes.bool }),
    ]).isRequired,
};
export default RenderEngine;
