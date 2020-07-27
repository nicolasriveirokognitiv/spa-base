import React, { useState } from 'react';
import BlockList from './BlockList/BlockList';
import Item from './BlockList/Item';
import PropTypes from 'prop-types';

function StructureManager({ page: { rows } }) {
    const [Block, setBlock] = useState(null);

    const handleBlockClick = (isOpen, block) => setBlock(isOpen ? null : block);

    return Block
        ? (
            <>
                <Item isOpen onClick={handleBlockClick} block={Block} />
                <Block.Toolset {...Block.properties} />
            </>
        )
        : <BlockList rows={rows} onClick={handleBlockClick} />;
}

StructureManager.propTypes = { page: PropTypes.shape({ rows: PropTypes.arrayOf(PropTypes.shape({})) }).isRequired };

export default StructureManager;
