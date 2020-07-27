import React from 'react';
import PropTypes from 'prop-types';
import { Tools } from '../../ElementCollection';
import properties from './properties';

function NotificationToolset({ id }) {
    return (
        <Tools.Controller blockId={id} blockType={properties.type}>
            <Tools.Title />
            <Tools.Description />
            <Tools.Border />
            <Tools.BorderRadius />
            <Tools.BackgroundColor />
            <Tools.FlexAlignment label="Text alignment" />
            <Tools.Width />
        </Tools.Controller>
    );
}

NotificationToolset.propTypes = { id: PropTypes.string.isRequired };

export default NotificationToolset;
