import React from 'react';
import PropTypes from 'prop-types';

function PageName({ name }) {
    return (
        <div className="page-control-header">
            <img src="/static/img/logo.svg" alt="kognitiv" className="page-control-header-logo" />
            <h4 className="page-control-header-title">{name}</h4>
        </div>
    );
}

PageName.propTypes = { name: PropTypes.string.isRequired };

export default PageName;
