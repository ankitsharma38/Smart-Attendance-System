import React, { useState } from 'react';
import axios from 'axios';

const MarkAttendance = () => {
  const [video, setVideo] = useState(null);
  const [attendance, setAttendance] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', video);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/recognize-face', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setAttendance(response.data.attendance);
    } catch (error) {
      console.error(error);
      alert('Error recognizing faces');
    }
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          required
        />
        <button type="submit">Upload Video</button>
      </form>
      <h3>Attendance List:</h3>
      <ul>
        {attendance.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarkAttendance;
