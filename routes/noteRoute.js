"use strict";

module.exports = function(app) {
  let note = require("../controllers/noteController");

  app
    .route("/note")
    .get(note.allNotes)
    .post(note.addNote);
  app
    .route("/note/:noteId")
    .get(note.singleNote)
    .delete(note.deleteNote);
};
