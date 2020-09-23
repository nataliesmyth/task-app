const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  priority: {
    type: Boolean,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)
