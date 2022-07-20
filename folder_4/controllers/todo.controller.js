const Todo = require("../models/todo.model");

exports.addTodo = async (req, res) => {
    if (!req.body.todo) return res.redirect("/");
    try {
        const todo = new Todo({ text: req.body.todo });
        await todo.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.getIndex = async (req, res) => {
    try {
        const completedTodos = await Todo.countDocuments({ completed: true });
        const todos = await Todo.find();
        res.render("index", {
            pageTitle: "todo-list",
            todos,
            completedTodos,
            remainingTodo: todos.length - completedTodos,
        });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

exports.completeTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        todo.completed = true;
        await todo.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};
