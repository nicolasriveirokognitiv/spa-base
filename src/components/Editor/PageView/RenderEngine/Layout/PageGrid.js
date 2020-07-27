import React from 'react';

function PageGrid({ children, rows }) {
    return rows.map((row, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="section" key={index}>
            {children({ ...row, index })}
        </div>
    ));
}

export default PageGrid;
