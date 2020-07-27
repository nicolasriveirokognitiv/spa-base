import React from 'react';
import PropTypes from 'prop-types';
import getClassName from 'Utils/getClassName';
import { blockPropTypes } from 'Constants/propTypes';
import useTestMode from 'Hooks/useTestMode';

function Item({ onClick, isOpen, block, className }) {
    const { name, icon, type, id } = block.properties;

    const testProps = useTestMode(`item-${type}-${id}`);
    const itemClassName = getClassName({ isOpen }, 'page-control-item', className);

    return (
        <div className={itemClassName} onClick={() => !isOpen && onClick(isOpen, block)} {...testProps}>
            <div className="page-control-item-header">
                <span className={`page-control-item-header-icon bm-icon-${icon}`} />
                <span className="page-control-item-header-name">{name}</span>
            </div>
            {isOpen && (
                <div className="page-control-item-close" onClick={() => onClick(block)}>
                    <span className="bm-icon-times" />
                </div>
            )}
        </div>
    );
}

Item.defaultProps = {
    className : '',
    isOpen    : false,
};

Item.propTypes = {
    className : PropTypes.string,
    isOpen    : PropTypes.bool,
    onClick   : PropTypes.func.isRequired,
    block     : blockPropTypes.isRequired,
};

export default Item;
