import React from 'react';
import useTestMode from 'Hooks/useTestMode';
import { Select } from 'antd';
import { elementCategories } from 'Constants/global';
import { toolPropTypes } from 'Constants/propTypes';

const { Option } = Select;

function Width({ onChange, value, propertyKey, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = val => onChange(val === 'container-full' ? undefined : val, propertyKey);

    return (
        <Select value={value || defaultValue} onChange={handleChange} {...testProps}>
            <Option value="container-full">Full width</Option>
            <Option value="container">Container width</Option>
        </Select>
    );
}

Width.propTypes = toolPropTypes;
Width.defaultProps = {
    label        : 'Width',
    defaultValue : 'container-full',
    propertyKey  : 'width',
    category     : elementCategories.SETTINGS,
    onChange     : () => {},
};

export default Width;
