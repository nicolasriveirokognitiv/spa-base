import React from 'react';
import PropTypes from 'prop-types';
import properties from './properties';
import { View } from '../../ElementCollection';

function Notification({ config, data, design }) {
    return (
        <View.StyledWrapper
            className="notification-block"
            config={config}
            design={design}
            testId={`${properties.type}-static`}
        >
            <div className="notification-block-title">
                {data.title}
            </div>
            <div className="notification-block-description">
                {data.description}
            </div>
        </View.StyledWrapper>
    );
}

Notification.defaultProps = {
    config : {},
    design : {},
    data   : {},
};

Notification.propTypes = {
    config: PropTypes.shape({
        alignment : PropTypes.string,
        width     : PropTypes.string,
    }),
    design: PropTypes.shape({
        border       : PropTypes.shape({}),
        borderRadius : PropTypes.string,
    }),
    data: PropTypes.shape({
        title       : PropTypes.string,
        description : PropTypes.string,
    }),
};

export default Notification;
