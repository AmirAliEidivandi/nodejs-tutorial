const router = require("express").Router();
const { addTodo } = require("../controllers/todo.controller");

router.post("/", addTodo);

module.exports = router;
