import React from 'react';
import useTestMode from 'Hooks/useTestMode';
import { Input } from 'antd';
import { toolPropTypes } from 'Constants/propTypes';
import { elementCategories } from 'Constants/global';

function Description({ label, onChange, value, defaultValue, testId }) {
    const testProps = useTestMode(testId);
    const { TextArea } = Input;

    const handleChange = e => onChange(e.target.value);

    return (
        <TextArea
            value={value}
            defaultValue={defaultValue}
            rows={4}
            placeholder={label}
            onChange={handleChange}
            data-testid="description-text"
            {...testProps}
        />
    );
}

Description.propTypes = toolPropTypes;
Description.defaultProps = {
    label       : 'Description',
    category    : elementCategories.CONTENT,
    propertyKey : 'description',
    onChange    : () => {},
};

export default Description;
