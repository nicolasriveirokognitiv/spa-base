import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import ElementWrapper from './ElementWrapper';
import useControlProperties from 'Hooks/useControlProperties';
import getClassName from 'Utils/getClassName';
import { Tabs } from 'antd';
import { elementCategories } from 'Constants/global';

const { TabPane } = Tabs;
const categories = [elementCategories.CONTENT, elementCategories.STYLE, elementCategories.SETTINGS];
const initialProperties = categories.reduce((prev, curr) => ({ ...prev, [curr]: {} }), {}); // Generates a { config: {}, data: {}...}

const ToolsetController = ({ blockId, blockType, children }) => {
    const [properties, setProperties] = useControlProperties(blockId, initialProperties);

    const tools = useMemo(() => React.Children.toArray(children), [children]);
    const connectToolsToProperies = useCallback(allTools => categories.map(category => allTools
        .filter(tool => tool.props.category === category)
        .map(tool => (
            <ElementWrapper
                className={getClassName({}, tool.props.className, tool.props.wrapperClassName)}
                label={tool.props.label}
                testId={tool.props.propertyKey}
                key={tool.props.propertyKey}
            >
                {
                    React.cloneElement(tool, {
                        testId   : `${blockType}-${tool.props.category}-${tool.props.propertyKey}`,
                        value    : properties[category][tool.props.propertyKey],
                        onChange : value => setProperties(prev => ({
                            ...prev,
                            [category]: { ...prev[category], [tool.props.propertyKey]: value },
                        })),
                    })
                }
            </ElementWrapper>
        ))),
    [properties, blockType, setProperties]);

    const [contentTools, styleTools, settingsTools] = connectToolsToProperies(tools);

    return (
        <div className="page-control-item-tabs">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Content" key={1}>
                    {contentTools}
                </TabPane>
                <TabPane tab="Style" key={2}>
                    {styleTools}
                </TabPane>
                <TabPane tab="Settings" key={3}>
                    {settingsTools}
                </TabPane>
            </Tabs>
        </div>
    );
};

ToolsetController.propTypes = {
    children  : PropTypes.node.isRequired,
    blockId   : PropTypes.string.isRequired,
    blockType : PropTypes.string.isRequired,
};

export default ToolsetController;
