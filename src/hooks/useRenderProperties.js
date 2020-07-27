import { useState, useEffect, useContext, useRef, useImperativeHandle } from 'react';
import BlocksContext from 'State/blocksContext';

function useRenderProperties(id, savedProperties) {
    const { instanciatedBlocks, setInstanciatedBlocks, isContextInitialized } = useContext(BlocksContext);
    const [unsavedProperties, setUnsavedProperties] = useState({});
    const blockRef = useRef();

    const properties = {
        design : { ...(savedProperties?.design || {}), ...(unsavedProperties?.design || {}) },
        config : { ...(savedProperties?.config || {}), ...(unsavedProperties?.config || {}) },
        data   : { ...(savedProperties?.data || {}), ...(unsavedProperties?.data || {}) },
    };

    useImperativeHandle(blockRef, () => ({ setProperties: setUnsavedProperties, properties, unsavedProperties }));

    useEffect(() => {
        // NOTE: Should we check if the block is already inserted?
        if (isContextInitialized && Object.keys(instanciatedBlocks).length === 0) {
            setInstanciatedBlocks(prev => ({ ...prev, [id]: blockRef }));
        }
    }, [instanciatedBlocks, setInstanciatedBlocks, isContextInitialized, id]);

    return properties;
}

export default useRenderProperties;
