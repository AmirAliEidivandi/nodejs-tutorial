const router = require("express").Router();
const { addTodo, getIndex, deleteTodo, completeTodo } = require("../controllers/todo.controller");

router.get("/", getIndex);
router.post("/add-todo", addTodo);
router.get("/delete-todo/:id", deleteTodo);
router.get("/completed-todo/:id", completeTodo);

module.exports = router;
