const router = require("express").Router();
const { addTodo, getIndex } = require("../controllers/todo.controller");

router.get("/", getIndex);
router.post("/add-todo", addTodo);

module.exports = router;
