let mongoose = require("mongoose");
let gallarySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  files: {
    type: Array,
    Required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
var Gallary = mongoose.model("Gallary", gallarySchema);
module.exports = Gallary;
