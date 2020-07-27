import PropTypes from 'prop-types';

export const blockPropTypes = PropTypes.shape({
    type     : PropTypes.string,
    category : PropTypes.string,
    config   : PropTypes.shape({}),
    data     : PropTypes.shape({}),
    design   : PropTypes.shape({}),
    content  : PropTypes.shape({}),
}).isRequired;

export const toolPropTypes = {
    onChange     : PropTypes.func,
    defaultValue : PropTypes.string,
    testId       : PropTypes.string,
    value        : PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    label        : PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    propertyKey  : PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    category     : PropTypes.string,
};

export const pageStructurePropTypes = PropTypes.shape({
    config: PropTypes.shape({
        title           : PropTypes.string,
        metaDescription : PropTypes.string,
        metaKeywords    : PropTypes.string,
    }).isRequired,
    design : PropTypes.shape({ className: PropTypes.string }).isRequired,
    rows   : PropTypes.arrayOf(PropTypes.shape(
        { columns: PropTypes.arrayOf(PropTypes.shape({ blocks: PropTypes.arrayOf(blockPropTypes) })) },
    )),
});
