// ImageUploader.js
import React from 'react';
import UploadButton from './UploadButton';

const ImageUploader = ({ onImageChange, onUpload }) => {
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    onImageChange(imageFile);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <UploadButton onUpload={onUpload} />
    </div>
  );
};

export default ImageUploader;
