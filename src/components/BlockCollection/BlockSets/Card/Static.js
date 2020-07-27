import React from 'react';
import PropTypes from 'prop-types';
import properties from './properties';
import { View, Tools } from '../../ElementCollection';
import { Button } from 'antd';
import getClassName from 'Utils/getClassName';

const { defaultValues } = Tools;

function Card({ config, data, design }) {
    return (
        <View.StyledWrapper
            className={getClassName({ imageLeft: config.flexDirection }, 'card-block')}
            config={config}
            design={design}
            testId={`${properties.type}-static`}
        >
            {data.blockTitle && (
                <div className="row">
                    <div className="col-12 text-align-center">
                        <div className="card-block-header">{data.blockTitle}</div>
                    </div>
                </div>
            )}
            <div className={`row flex-middle row-medium ${config.flexDirection || defaultValues.flexDirection}`}>
                <div className="col-6 col-sm-6">
                    <div className="card-block-title">
                        {data.title}
                    </div>
                    <div className="card-block-description">
                        {data.description}
                    </div>
                    <div className={`card-block-button ${config.buttonAlignment || defaultValues.textAlignment}`}>
                        <Button href="#" type="primary">{data.buttonLabel}</Button>
                    </div>
                </div>
                <div className="col-6 col-sm-6">
                    <div className="card-block-img-placeholder" />
                </div>
            </div>
        </View.StyledWrapper>
    );
}

Card.defaultProps = {
    config : {},
    design : {},
    data   : {},
};

Card.propTypes = {
    config: PropTypes.shape({
        flexDirection   : PropTypes.string,
        width           : PropTypes.string,
        buttonAlignment : PropTypes.string,
    }),
    design: PropTypes.shape({
        border       : PropTypes.shape({}),
        borderRadius : PropTypes.string,
    }),
    data: PropTypes.shape({
        title       : PropTypes.string,
        description : PropTypes.string,
        blockTitle  : PropTypes.string,
        buttonLabel : PropTypes.string,
    }),
};

export default Card;
