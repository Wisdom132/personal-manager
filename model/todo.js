let mongoose = require("mongoose");
let todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true,
    default: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
var Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;