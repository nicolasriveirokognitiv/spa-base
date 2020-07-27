import React from 'react';
import PropTypes from 'prop-types';
import DeviceSelector from './DeviceSelector';

function Toolbar({ setSelectedDevice }) {
    return (
        <div className="toolbar">
            <DeviceSelector onChange={setSelectedDevice} />
        </div>
    );
}

Toolbar.propTypes = { setSelectedDevice: PropTypes.func.isRequired };
export default Toolbar;
