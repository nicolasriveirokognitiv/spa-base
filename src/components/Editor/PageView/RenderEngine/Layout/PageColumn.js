import React from 'react';

function PageColumn({ children, blocks }) {
    return blocks.map((block, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="col-12" key={index}>
            {children({ block, type: block.type, index })}
        </div>
    ));
}

export default PageColumn;
