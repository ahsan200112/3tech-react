import React from 'react';
import axios from 'axios';

const ImageUpload = ({ onUpload }) => {
  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

    try {
      const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onUpload(res.data.secure_url); 
    } catch (error) {
      console.error('Image upload error:', error.response?.data || error.message);
    }
  };

  return <input type="file" onChange={handleChange} />;
};

export default ImageUpload;
