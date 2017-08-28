const mongoose = require('mongoose');
const Note = mongoose.model('Note');

exports.getNote = async (req, res) => {
  const note = await Note.findOne({
    _user: req.user.id,
    _id: req.params.id
  });
  res.send(note);
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ _user: req.user.id });
  res.send(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;

  const note = await new Note({
    _user: req.user.id,
    title,
    content,
    createAt: Date.now()
  }).save();

  res.send(note);
};

exports.updateNote = async (req, res) => {
  const { title, content } = req.body;

  const note = await Note.findOneAndUpdate({
    _user: req.user.id,
    _id: req.params.id
  }, {
    $set: { title, content },
    lastUpdate: Date.now()
  }, { new: true }).exec();

  res.send(note);
};

exports.deleteNote = async (req, res) => {
  const note = await Note.findOneAndRemove({
    _user: req.user.id,
    _id: req.params.id
  });

  res.send(note);
};
