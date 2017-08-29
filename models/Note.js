const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    require: 'Title cannot be blank',
    maxlength: 150,
    trim: true
  },
  content: {
    type: String,
    require: 'Content cannot be blank',
    minlength: 10,
    trim: true
  },
  createAt: Date,
  lastUpdate: Date
});

mongoose.model('Note', noteSchema);
