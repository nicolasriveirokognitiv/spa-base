
export const app = {
    state: {
        new       : 'new',
        draft     : 'draft',
        published : 'published',
    },
};

export const renderEngine = {
    mode: {
        STATIC  : 'static',
        DYNAMIC : 'dynamic',
    },
};

export default {
    INIT        : 'init',
    DONE        : 'done',
    IN_PROGRESS : 'in_progress',
};

// NOTE: There are dependencies on this values, consider not to modify them
export const elementCategories = Object.freeze({
    STYLE    : 'design',
    CONTENT  : 'data',
    SETTINGS : 'config',
});

