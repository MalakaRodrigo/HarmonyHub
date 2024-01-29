const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  credentials: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  modified: {
    type: Date,
    required: true,
    default: Date.now,
  },
  createdBy: {
    type: String,
    required: true,
    default: '1', // You can set this to the default value you prefer
  },
  modifiedBy: {
    type: String,
    required: true,
    default: '1', // You can set this to the default value you prefer
  },
  archived: {
    type: Number,
    required: true,
    default: 0,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
