import React from 'react';
import PropTypes from 'prop-types';
import { Tools } from '../../ElementCollection';
import properties from './properties';

function CardToolset({ id }) {
    return (
        <Tools.Controller blockId={id} blockType={properties.type}>
            <Tools.Title label="Block title" propertyKey="blockTitle" />
            <Tools.UploadImage />
            <Tools.Title />
            <Tools.Description />
            <Tools.Border />
            <Tools.BorderRadius />
            <Tools.Text label="Button Label" propertyKey="buttonLabel" />
            <Tools.URL label="Button Link" propertyKey="buttonUrl" placeholder="Button Link" />
            <Tools.FlexDirection label="Image placement" />
            <Tools.TextAlignment label="Button placement" propertyKey="buttonAlignment" defaultValue="text-align-left" />
            <Tools.Width />
        </Tools.Controller>
    );
}

CardToolset.propTypes = { id: PropTypes.string.isRequired };

export default CardToolset;
