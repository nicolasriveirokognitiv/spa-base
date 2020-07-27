import React from 'react';

function PageRow({ children, columns }) {
    return columns.map((column, index) => (
        <div className="row" key={index}>
            {children({ ...column, index })}
        </div>
    ));
}

export default PageRow;
