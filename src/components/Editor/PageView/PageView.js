import React, { useState } from 'react';
import RenderEngine from './RenderEngine';
import Toolbar from './Toolbar';

function PageView() {
    const [selectedDevice, setSelectedDevice] = useState({ isDesktop: true });

    return (
        <div className="wrapper-right">
            <Toolbar setSelectedDevice={setSelectedDevice} />
            <RenderEngine selectedDevice={selectedDevice} />
        </div>
    );
}

export default PageView;
