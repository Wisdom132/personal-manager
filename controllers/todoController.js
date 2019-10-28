let mongoose = require("mongoose");
const Todo = require("../model/todo");

exports.allTodos = (req, res, next) => {
  Todo.find()
    .exec()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.addTodos = (req, res, next) => {
  const todo = new Todo({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category
    // status: req.body.status
  });
  todo
    .save()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
      console.log(err);
    });
};

exports.deleteTodo = (req, res, next) => {
  const id = req.params.todoId;
  Todo.remove({ _id: id })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

exports.singleTodo = (req, res, next) => {
  const id = req.params.todoId;
  Todo.findById({ _id: id })
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

exports.update = (req, res, next) => {
  const id = req.params.todoId;
  Todo.findById({ _id: id }, (err, todo) => {
    if (err) res.send(err);
    (todo.name = req.body.name),
      (todo.description = req.body.description),
      (todo.category = req.body.category),
      (todo.status = req.body.status);

    todo
      .save()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
};
