import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'Utils/getClassName';

function ElementWrapper({ children, label, className, testId }) {
    return (
        <div className={getClassName({}, 'tool-wrapper', className)}>
            <label data-testid={`label-${testId}`} className="tool-input-label">{label}</label>
            {children}
        </div>
    );
}

ElementWrapper.defaultProps = {
    label     : null,
    className : '',
    testId    : null,
};

ElementWrapper.propTypes = {
    children  : PropTypes.shape({}).isRequired,
    label     : PropTypes.string,
    className : PropTypes.string,
    testId    : PropTypes.string,

};

export default ElementWrapper;
