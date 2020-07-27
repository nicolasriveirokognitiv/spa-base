import { useContext, useState } from 'react';
import BlocksContext from 'State/blocksContext';

function useControlProperties(id, initialProperties) {
    let properties = initialProperties;
    let setProperties;

    const { instanciatedBlocks, isContextInitialized } = useContext(BlocksContext);

    if (isContextInitialized && instanciatedBlocks?.[id]?.current) {
        ({ properties, setProperties } = instanciatedBlocks?.[id]?.current);
    }

    const [toolsetProperties, setToolsetProperties] = useState(properties);

    const setAllProperties = p => {
        setToolsetProperties(p);
        setProperties(p);
    };

    return [toolsetProperties, setAllProperties];
}

export default useControlProperties;
