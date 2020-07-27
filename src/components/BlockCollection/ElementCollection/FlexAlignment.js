import React from 'react';
import { toolPropTypes } from 'Constants/propTypes';
import { Select } from 'antd';
import useTestMode from 'Hooks/useTestMode';
import { elementCategories } from 'Constants/global';

const { Option } = Select;

function FlexAlignment({ onChange, value, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = e => onChange(e);

    return (
        <Select defaultValue={defaultValue} value={value} onChange={handleChange} {...testProps}>
            <Option value="flex-left">Left</Option>
            <Option value="flex-center">Center</Option>
            <Option value="flex-right">Right</Option>
        </Select>
    );
}

FlexAlignment.propTypes = toolPropTypes;
FlexAlignment.defaultProps = {
    label        : 'Alignment',
    defaultValue : 'flex-center',
    category     : elementCategories.SETTINGS,
    propertyKey  : 'flexAlignment',
    onChange     : () => {},
};

export default FlexAlignment;
