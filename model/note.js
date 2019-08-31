let mongoose = require("mongoose");
let noteSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true,
    }
});
var Note = mongoose.model("Note", noteSchema);
module.exports = Note;