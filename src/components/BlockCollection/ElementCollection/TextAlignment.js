import React from 'react';
import { toolPropTypes } from 'Constants/propTypes';
import { Select } from 'antd';
import useTestMode from 'Hooks/useTestMode';
import { elementCategories } from 'Constants/global';

const { Option } = Select;

function TextAlignment({ onChange, value, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = val => onChange(val === 'text-align-left' ? undefined : val);

    return (
        <Select value={value || defaultValue} onChange={handleChange} {...testProps}>
            <Option value="text-align-left">Left</Option>
            <Option value="text-align-center">Center</Option>
            <Option value="text-align-right">Right</Option>
        </Select>
    );
}

TextAlignment.propTypes = toolPropTypes;
TextAlignment.defaultProps = {
    onChange     : () => {},
    label        : 'Text alignment',
    defaultValue : 'text-align-left',
    propertyKey  : 'alignment',
    category     : elementCategories.SETTINGS,
};

export default TextAlignment;
