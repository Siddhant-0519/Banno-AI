// App.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const App = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [outputImage, setOutputImage] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  const handleGenerate = async () => {
    // Implement the logic to generate the image on the backend
    // You can use fetch or axios to make a request to your backend

    // Example:
    // const response = await fetch('your-backend-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify({ text, image }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const result = await response.json();
    // setOutputImage(result.outputImage);
  };

  const handleUpload = async () => {
    if (!image) {
      alert('Please select a image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData);
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('File upload failed.');
    }
  };

  return (
    <div  >
      <Header />
      <div style={{ display: 'flex' }}>
        <LeftPanel
          onTextChange={handleTextChange}
          onImageChange={handleImageChange}
          onGenerate={handleGenerate}
          onUpload={handleUpload}
          imagePreview={image ? URL.createObjectURL(image) : null}
        />
        <RightPanel outputImage={outputImage} />
      </div>
    </div>
  );
};

export default App;

