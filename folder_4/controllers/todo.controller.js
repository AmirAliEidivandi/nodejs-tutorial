const Todo = require("../models/todo.model");

exports.addTodo = async (req, res) => {
    if (!req.body.todo) return res.redirect("/");
    try {
        await Todo.create({ text: req.body.todo });
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.getIndex = async (req, res) => {
    try {
        const completedTodos = await Todo.count({
            where: {
                completed: true,
            },
        });
        const todos = await Todo.findAll();
        res.render("index", {
            pageTitle: "todo-list",
            todos,
            completedTodos,
            remainingTodo: todos.length - completedTodos,
        });
    } catch (error) {}
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.completeTodo = async (req, res) => {
    try {
        const todos = await Todo.findByPk(req.params.id);
        todos.completed = true;
        await todos.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};
