import React from 'react';
import PropTypes from 'prop-types';
import useRenderProperties from 'Hooks/useRenderProperties';

const StaticRenderController = ({ children, block }) => {
    const properties = useRenderProperties(block.id, block);
    return React.cloneElement(children, properties);
};

// eslint-disable-next-line react/forbid-prop-types
StaticRenderController.propTypes = { children: PropTypes.node.isRequired };

export default StaticRenderController;
