let mongoose = require("mongoose");
let noteSchema = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true,
    },
    created: {
        type:Date,
        default:Date.now(),
    }
});
var Note = mongoose.model("Note", noteSchema);
module.exports = Note;