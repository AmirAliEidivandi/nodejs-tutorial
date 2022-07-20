const Todo = require("../models/todo.model");

exports.addTodo = (req, res) => {
    if (!req.body.todo) return res.redirect("/");

    Todo.create({ text: req.body.todo })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};

exports.getIndex = (req, res) => {
    Todo.count({
        where: {
            completed: true,
        },
    }).then((completedTodos) => {
        Todo.findAll()
            .then((todos) => {
                res.render("index", {
                    pageTitle: "todo-list",
                    todos,
                    completedTodos,
                    remainingTodo: todos.length - completedTodos,
                });
            })
            .catch((err) => console.log(err));
    });
};

exports.deleteTodo = (req, res) => {
    Todo.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then(() => {
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};

exports.completeTodo = (req, res) => {
    Todo.findByPk(req.params.id)
        .then((todo) => {
            todo.completed = true;
            return todo.save();
        })
        .then(() => res.redirect("/"))
        .catch((err) => console.log(err));
};
