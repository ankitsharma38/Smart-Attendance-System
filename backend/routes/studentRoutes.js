const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Add new student
router.post('/add', async (req, res) => {
  const { name, studentId, images } = req.body;
  try {
    const newStudent = new Student({ name, studentId, images });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ error: 'Error adding student' });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching students' });
  }
});

module.exports = router;
