import React from 'react';
import useTestMode from 'Hooks/useTestMode';
import { Input } from 'antd';
import { toolPropTypes } from 'Constants/propTypes';
import { elementCategories } from 'Constants/global';

function URL({ onChange, value, placeholder, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const handleChange = e => onChange(e.target.value);

    return (
        <Input
            addonBefore="https://"
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={handleChange}
            {...testProps}
        />
    );
}

URL.propTypes = toolPropTypes;
URL.defaultProps = {
    wrapperClassName : 'type-url',
    label            : '',
    value            : null,
    onChange         : () => {},
    propertyKey      : 'url',
    category         : elementCategories.CONTENT,
};

export default URL;
