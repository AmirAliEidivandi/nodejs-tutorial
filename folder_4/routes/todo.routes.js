const router = require("express").Router();
const { addTodo, getIndex, deleteTodo } = require("../controllers/todo.controller");

router.get("/", getIndex);
router.post("/add-todo", addTodo);
router.get("/delete-todo/:id", deleteTodo);

module.exports = router;
