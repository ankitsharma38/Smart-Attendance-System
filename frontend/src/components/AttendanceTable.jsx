import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AttendanceTable = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/attendance`)
      .then(response => {
        setAttendance(response.data);
      })
      .catch(error => console.error("Error fetching attendance data:", error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {attendance.map((record) => (
          <tr key={record._id}>
            <td>{record.studentId}</td>
            <td>{new Date(record.date).toLocaleDateString()}</td>
            <td>{record.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;



