const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// Mark attendance
router.post('/mark', async (req, res) => {
  const { studentId, date, status } = req.body;
  try {
    const newAttendance = new Attendance({ studentId, date, status });
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    res.status(400).json({ error: 'Error marking attendance' });
  }
});

// Get attendance by student
router.get('/student/:id', async (req, res) => {
  try {
    const attendance = await Attendance.find({ studentId: req.params.id });
    res.status(200).json(attendance);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching attendance' });
  }
});

module.exports = router;
