import React from 'react';
import PropTypes from 'prop-types';
import useTestMode from 'Hooks/useTestMode';
import { Tabs } from 'antd';

function DeviceSelector({ onChange }) {
    const testProps = useTestMode('device-selector');
    const handleOnChange = activeKey => onChange({ [activeKey]: true });

    return (
        <div className="toolbar-device-selector">
            <Tabs defaultActiveKey="1" onChange={handleOnChange} {...testProps}>
                <Tabs.TabPane tab={<span className="bm-icon-desktop" />} key="is-desktop" />
                <Tabs.TabPane tab={<span className="bm-icon-tablet" />} key="is-tablet" />
                <Tabs.TabPane tab={<span className="bm-icon-mobile" />} key="is-mobile" />
            </Tabs>
        </div>
    );
}

DeviceSelector.propTypes = { onChange: PropTypes.func.isRequired };
export default DeviceSelector;
