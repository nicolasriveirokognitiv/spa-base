import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import useTestMode from 'Hooks/useTestMode';
import { Switch } from 'antd';
import { elementCategories } from 'Constants/global';
import { toolPropTypes } from 'Constants/propTypes';
import BackgroundColor from './BackgroundColor';

function Border({ onChange, value, hasColorTool, testId }) {
    const [switchStatus, setSwitchStatus] = useState(value);
    const [border, setBorder] = useState({});

    const testProps = useTestMode(testId);

    const handleChildrenChange = useCallback((data, element) => {
        setBorder(prev => {
            const newState = { ...prev, [element]: data };
            onChange(newState);
            return newState;
        });
    }, [onChange]);

    const handleSwitchChange = useCallback(newSwitchStatus => {
        setSwitchStatus(newSwitchStatus);
        onChange(newSwitchStatus ? border : null);
    }, [border, onChange]);

    return (
        <>
            <Switch
                checked={switchStatus}
                onClick={handleSwitchChange}
                {...testProps}
            />
            {hasColorTool && <BackgroundColor label="Border color" propertyKey="borderColor" onChange={handleChildrenChange} value={border.borderColor} />}
        </>
    );
}

const borderPropTypes = {
    hasColorTool : PropTypes.bool,
    value        : PropTypes.bool,
};
Border.propTypes = { ...toolPropTypes, ...borderPropTypes };
Border.defaultProps = {
    onChange         : () => {},
    value            : false,
    label            : 'Border',
    propertyKey      : 'border',
    wrapperClassName : 'type-switch',
    category         : elementCategories.STYLE,
    hasColorTool     : false,
};

export default Border;
