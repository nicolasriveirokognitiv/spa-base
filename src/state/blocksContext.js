import React from 'react';

export default React.createContext({
    instanciatedBlocks    : {},
    setInstanciatedBlocks : () => {},
    isContextInitialized  : false,
});
