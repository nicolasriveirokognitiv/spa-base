import React from 'react';
import Item from './Item';
import { getBlockByType } from 'Components/BlockCollection';
import { Alert } from 'antd';

function BlockList(props) {
    const { rows, onClick } = props;
    const availableBlocks = [];

    rows.forEach(
        columns => columns.columns.forEach(
            blocks => blocks.blocks.forEach(
                ({ id, type, data, design, config }) => {
                    const currentBlock = getBlockByType(type);
                    if (currentBlock) {
                        availableBlocks.push(<Item
                            onClick={onClick}
                            key={id}
                            block={{
                                ...currentBlock,
                                properties: { ...currentBlock.properties, config, data, design, id },
                            }}
                        />);
                    } else {
                        availableBlocks.push(<Alert showIcon message="Oops!" description="Block not found" type="error" key={Math.random()} />);
                    }
                },
            ),
        ),
    );
    return availableBlocks;
}

export default BlockList;
