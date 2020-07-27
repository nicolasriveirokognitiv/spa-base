import React from 'react';
import PropTypes from 'prop-types';
import useTestMode from 'Hooks/useTestMode';
import getClassName from 'Utils/getClassName';
import Width from './Width';

/**
 * Provides an stylized frame that will change it form according the block config
 */

function StyledWrapper({ children, className, design, config, testId }) {
    const { backgroundColor, border, borderRadius } = design;
    const { width, alignment, flexAlignment } = config;

    const testProps = useTestMode(testId);
    const wrapperClasses = getClassName({ hasBorder: border }, 'styled-wrapper', borderRadius, alignment, flexAlignment, className);

    return (
        <div className={width || Width.defaultProps.defaultValue} {...testProps}>
            <div className={wrapperClasses} style={{ backgroundColor, borderColor: border?.borderColor }}>
                {children}
            </div>
        </div>
    );
}

StyledWrapper.defaultProps = {
    className : '',
    config    : {},
    design    : {},
};

StyledWrapper.propTypes = {
    testId    : PropTypes.string.isRequired,
    children  : PropTypes.node.isRequired,
    className : PropTypes.string,
    config    : PropTypes.shape({
        width         : PropTypes.string,
        alignment     : PropTypes.string,
        flexAlignment : PropTypes.string,
    }),
    design: PropTypes.shape({
        backgroundColor : PropTypes.string,
        border          : PropTypes.shape({}),
        borderRadius    : PropTypes.string,
    }),
};

export default StyledWrapper;
