import React from 'react';
import PropTypes from 'prop-types';
import { blockPropTypes } from 'Constants/propTypes';
import { getBlockByType, StaticRenderController } from 'Components/BlockCollection';
import { Alert } from 'antd';

function Overlay({ type, mode, block }) {
    // const localizedBlock = useLocalizedContent(block); TODO: This hook should get the translated content
    const Block = getBlockByType(type);

    if (Block) {
        if (mode === 'static') {
            return (
                <StaticRenderController block={block}>
                    <Block.Static />
                </StaticRenderController>
            );
        }
        return <Block.Dynamic />;
    }

    return <Alert showIcon message="Oops!" description="Block not found" type="error" data-testid="alert" />;
}

Overlay.defaultProps = { block: {} };

Overlay.propTypes = {
    block : blockPropTypes,
    type  : PropTypes.string.isRequired,
    mode  : PropTypes.string.isRequired,
};

export default Overlay;
