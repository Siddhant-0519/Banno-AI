// ImagePreview.js
import React from 'react';

const ImagePreview = ({ image }) => {
  return <img 
  src={image}
            alt="Preview"
            style={{ width: '85%', height: '85%', objectFit: 'cover' }}
/>;
};

export default ImagePreview;
