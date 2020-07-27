import React from 'react';
import useTestMode from 'Hooks/useTestMode';
import { toolPropTypes } from 'Constants/propTypes';
import { Select } from 'antd';
import { elementCategories } from 'Constants/global';

const { Option } = Select;

function BorderRadius({ onChange, value, propertyKey, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = val => onChange(val === 'no-border' ? undefined : val, propertyKey);

    return (
        <Select
            value={value || defaultValue}
            onChange={handleChange}
            data-testid="border-radius-select"
            {...testProps}
        >
            <Option value="no-border">No radius</Option>
            <Option value="border-radius-slightly">Slighty Rounded</Option>
            <Option value="border-radius-medium">Medium rounded</Option>
            <Option value="border-radius-rounded">Very rounded</Option>
            <Option value="border-radius-circle">Circular</Option>
        </Select>
    );
}

BorderRadius.propTypes = toolPropTypes;
BorderRadius.defaultProps = {
    onChange     : () => {},
    defaultValue : 'no-border',
    propertyKey  : 'borderRadius',
    label        : 'Border radius',
    category     : elementCategories.STYLE,
};

export default BorderRadius;
