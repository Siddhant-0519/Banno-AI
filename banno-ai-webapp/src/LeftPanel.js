// LeftPanel.js
import React from 'react';
import TextInput from './TextInput';
import ImageUploader from './ImageUploader';
import GenerateButton from './GenerateButton';
import ImagePreview from './ImagePreview';

const LeftPanel = ({ onGenerate, onTextChange, onImageChange, onUpload, imagePreview }) => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column'}}>
      <div style={{ marginBottom: '20px', width: '100%' }}>
        <TextInput onTextChange={onTextChange} />
      </div>
      <div style={{  marginBottom: '20px', flexDirection: "row" , justifyContent: 'space-evenly', display: 'flex' }}>
        <ImageUploader onImageChange={onImageChange} onUpload={onUpload} />
        <GenerateButton onGenerate={onGenerate}/>
      </div>
    <div>
      <ImagePreview image={imagePreview} />
    </div>
    </div>
  );
};

export default LeftPanel;
