let mongoose = require("mongoose");
const Note = require("../model/note");

exports.allNotes = (req, res, next) => {
  Note.find()
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.searchNote = (req, res, next) => {
  let title = req.query.title;
  Note.find({ title: title })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.addNote = (req, res, next) => {
  const note = new Note({
    title: req.body.title,
    description: req.body.description
  });
  note
    .save()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log({ err: err });
    });
};

exports.singleNote = (req, res, next) => {
  Note.findById(req.params.noteId)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.deleteNote = (req, res, next) => {
  const id = req.params.noteId;
  Note.remove({ _id: id })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.update = (req, res, next) => {
  const id = req.params.noteId;
  Note.findById({ _id: id }, (err, note) => {
    if (err) res.send(err);
    (note.title = req.body.title), (note.description = req.body.description);

    note
      .save()
      .then(response => {
        res.status(200).status(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
};
