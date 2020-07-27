import React from 'react';
import { toolPropTypes } from 'Constants/propTypes';
import { elementCategories } from 'Constants/global';

function UploadImage({ label }) {
    return (
        <div className="upload-image-block-container">
            <div className="bm-icon-upload-arrow" />
            <span className="upload-image-block-label">{label}</span>
        </div>
    );
}

UploadImage.propTypes = toolPropTypes;
UploadImage.defaultProps = {
    label            : 'Upload an Image',
    propertyKey      : 'imageSrc',
    wrapperClassName : 'type-upload',
    category         : elementCategories.CONTENT,
};

export default UploadImage;
