import React from 'react';
import { toolPropTypes } from 'Constants/propTypes';
import { Input } from 'antd';
import useTestMode from 'Hooks/useTestMode';
import { elementCategories } from 'Constants/global';

function Text({ label, onChange, value, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = e => onChange(e.target.value);

    return (
        <Input
            value={value}
            defaultValue={defaultValue}
            placeholder={label}
            onChange={handleChange}
            {...testProps}
        />
    );
}

Text.propTypes = toolPropTypes;
Text.defaultProps = {
    label       : 'Text',
    propertyKey : 'text',
    category    : elementCategories.CONTENT,
    onChange    : () => {},
};

export default Text;
