let express = require("express");
let app = express();
let PORT = 5000;
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
const Note = require("./model/note");
const Todo = require("./model/todo");
let morgan = require("morgan");

mongoose.connect("mongodb://localhost:27017/clip");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev"));

let routes = require("./routes/noteRoute");
let todoRoutes = require("./routes/todoRoute");

routes(app);
todoRoutes(app);

app.listen(PORT, () => {
  console.log("this app is working");
});
