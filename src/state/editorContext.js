import React from 'react';

export default React.createContext({
    page                 : {},
    renderEngineMode     : 'static',
    isTestModeActive     : false,
    isContextInitialized : false,
});
