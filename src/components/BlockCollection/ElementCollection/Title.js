import React from 'react';
import { toolPropTypes } from 'Constants/propTypes';
import { Input } from 'antd';
import { elementCategories } from 'Constants/global';
import useTestMode from 'Hooks/useTestMode';

function Title({ label, onChange, value, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = e => onChange(e.target.value);

    return (
        <Input
            placeholder={label}
            defaultValue={defaultValue}
            value={value}
            onChange={handleChange}
            {...testProps}
        />
    );
}

Title.propTypes = toolPropTypes;
Title.defaultProps = {
    label       : 'Title',
    propertyKey : 'title',
    category    : elementCategories.CONTENT,
    onChange    : () => {},
};

export default Title;
