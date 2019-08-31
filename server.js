let express = require("express");
let app = express();
let PORT = 4000;
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
const Note = require("./model/note");
let morgan = require("morgan")

mongoose.connect("mongodb://localhost:27017/clip");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(morgan("dev"));

let routes = require("./routes/noteRoute");
// let contactRoutes = require("./routes/contactRoutes");

routes(app);
// contactRoutes(app);


app.listen(PORT, () => {
  console.log("this app is working");
});