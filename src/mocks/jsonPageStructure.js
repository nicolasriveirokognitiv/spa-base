export default {
    config: {
        title             : 'SPA Base',
    },
    rows : [
        {
            columns: [
                {
                    width  : '100',
                    blocks : [
                        {
                            id       : 'NgVHq6',
                            type     : 'Notification',
                            category : 'Basic',
                            config   : {},
                            design   : {
                                border        : {},
                                borderRadius  : 'border-radius-slightly',
                                textAlignment : 'flex-left',
                            },
                            data: {
                                description : 'This is a notification for you to be notified',
                                title       : 'Notification Title',
                            },
                        },
                    ],
                },
            ],
        },
        {
            columns: [
                {
                    width  : '100',
                    blocks : [
                        {
                            id       : 'xaF0kvS',
                            type     : 'Notification',
                            category : 'Headers',
                            config   : { title: 'Dummy' },
                            design   : { size: 'Medium' },
                            data     : {
                                description : 'This is a notification for you to be notified',
                                title       : 'Notification Title',
                            },
                        },
                    ],
                },
            ],
        },
        {
            columns: [
                {
                    width  : '100',
                    blocks : [
                        {
                            id       : 'jf3FD3',
                            type     : 'Card',
                            category : 'Headers',
                            config   : { title: 'Dummy' },
                            design   : { size: 'Medium' },
                            data     : {
                                header      : 'Block title',
                                title       : 'Best travel destination ever',
                                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sem sit amet urna egestas, eget dapibus tellus malesuada. Ut eu elementum lacus. Ut eu elementum lacus.',
                                buttonLabel : 'Sample Text',
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
