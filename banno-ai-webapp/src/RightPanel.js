// RightPanel.js
import React from 'react';
import ImagePreview from './ImagePreview';

const RightPanel = ({ outputImage }) => {
  return (
    <div style={{ flex: 1, padding: '20px' }}>
      <h2>Output Image</h2>
      <ImagePreview image={outputImage} />
    </div>
  );
};

export default RightPanel;
