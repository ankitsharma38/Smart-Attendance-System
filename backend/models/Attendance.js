const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentId: String,
  date: Date,
  status: { type: String, default: 'Present' },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
