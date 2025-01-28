import React, { useState } from 'react';
import axios from 'axios';

const RegisterFace = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/register-face', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error registering face');
    }
  };

  return (
    <div>
      <h2>Register Student Face</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterFace;
