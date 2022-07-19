const Todo = require("../models/todo.model");
const { generateRandomId } = require("../utils/todos.utils");

exports.addTodo = (req, res) => {
    if (!req.body.todo) return res.redirect("/");

    const todo = new Todo(generateRandomId(), req.body.todo);
    todo.save((err) => {
        if (!err) res.redirect("/");
        console.log(err);
    });
};

exports.getIndex = (req, res) => {
    Todo.fetchAll((todos) => {
        res.render("index", {
            pageTitle: "todo-list",
            todos,
        });
    });
};

exports.deleteTodo = (req, res) => {
    Todo.deleteTodo(req.params.id, (err) => {
        if (!err) res.redirect("/");
        console.log(err);
    });
};

exports.completeTodo = (req, res) => {
    Todo.setTodoToComplete(req.params.id, (err) => {
        if (!err) res.redirect("/");
        console.log(err);
    });
};
