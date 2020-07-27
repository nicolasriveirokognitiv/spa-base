import React, { useContext } from 'react';
import EditorContext from 'State/editorContext';
import StructureManager from './StructureManager';
import PageName from './PageName';

function PageControl() {
    const { page } = useContext(EditorContext);

    return (
        <div className="wrapper-left">
            <div className="page-control">
                <PageName name={page.config.title} />
                <StructureManager page={page} />
            </div>
        </div>
    );
}

export default PageControl;
