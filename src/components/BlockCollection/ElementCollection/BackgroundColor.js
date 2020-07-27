import React from 'react';
import useTestMode from 'Hooks/useTestMode';
import { toolPropTypes } from 'Constants/propTypes';
import { Input } from 'antd';
import { elementCategories } from 'Constants/global';

function BackgroundColor({ onChange, value, propertyKey, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = e => onChange(e.target.value, propertyKey);

    return (
        <Input
            value={value}
            placeholder={defaultValue}
            defaultValue={defaultValue}
            onChange={handleChange}
            {...testProps}
        />
    );
}

BackgroundColor.propTypes = toolPropTypes;
BackgroundColor.defaultProps = {
    category         : elementCategories.STYLE,
    propertyKey      : 'backgroundColor',
    label            : 'Background color',
    wrapperClassName : 'type-color-picker',
    defaultValue     : '#ffc900',
    onChange         : () => {},
};

export default BackgroundColor;
