import React from 'react';
import RegisterFace from './components/RegisterFace';
import MarkAttendance from './components/MarkAttendance';

const App = () => {
  return (
    <div>
      <h1>Smart Attendance System</h1>
      <RegisterFace />
      <MarkAttendance />
    </div>
  );
};

export default App;
