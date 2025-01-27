const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  images: [String],  // Store paths or filenames of student images
});

module.exports = mongoose.model('Student', studentSchema);
