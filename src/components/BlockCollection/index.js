import BlockSets from './BlockSets';
import { availableBlockTypes } from 'Constants/config';
import StaticRenderController from './StaticRenderController';

// We filter the blocks that are not enabled
const availableBlockSets = availableBlockTypes.map(type => BlockSets[type]);

export const getBlockByType = type => availableBlockSets.find(block => block.properties.type === type);
export const getBlocksByCategory = category => availableBlockSets.filter(block => block.properties.category === category);
export const getCategories = () => availableBlockSets.reduce(
    (allCat, el) => (allCat.find(cat => cat === el.properties.category) === undefined ? [...allCat, el.properties.category] : allCat), [],
);

export { StaticRenderController };
export default availableBlockSets;
