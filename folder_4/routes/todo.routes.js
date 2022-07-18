const router = require("express").Router();
const { addTodo } = require("../controllers/todo.controller");

router.post("/add-todo", addTodo);

module.exports = router;
