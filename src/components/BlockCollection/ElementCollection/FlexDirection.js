import React from 'react';
import { toolPropTypes } from 'Constants/propTypes';
import { Select } from 'antd';
import useTestMode from 'Hooks/useTestMode';
import { elementCategories } from 'Constants/global';

const { Option } = Select;

function FlexDirection({ onChange, value, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = val => onChange(val === 'flex-row' ? undefined : val);

    return (
        <Select value={value || defaultValue} onChange={handleChange} {...testProps}>
            <Option value="flex-row">Right</Option>
            <Option value="flex-row-reverse">Left</Option>
        </Select>
    );
}

FlexDirection.propTypes = toolPropTypes;
FlexDirection.defaultProps = {
    onChange     : () => {},
    label        : 'Element position',
    defaultValue : 'flex-row',
    propertyKey  : 'flexDirection',
    category     : elementCategories.SETTINGS,
};

export default FlexDirection;
