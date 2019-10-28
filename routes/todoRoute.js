"use strict";

module.exports = function(app) {
  let todo = require("../controllers/todoController");

  app
    .route("/todo")
    .get(todo.allTodos)
    .post(todo.addTodos);

  app
    .route("/todo/:todoId")
    .get(todo.singleTodo)
    .delete(todo.deleteTodo)
    .patch(todo.update);
};
