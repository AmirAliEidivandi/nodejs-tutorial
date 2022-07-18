const Todo = require("../models/todo.model");

exports.addTodo = (req, res) => {
    if (!req.body.todo) return res.redirect("/");

    const todo = new Todo(Math.floor(Math.random() * 1000), req.body.todo);
    todo.save((err) => {
        if (err) res.redirect("/");
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
