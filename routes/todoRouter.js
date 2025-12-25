const express= require("express")
const router= express.Router()
const todoController=require("../controllers/todoController")



router.get("/", todoController.getAllTodos)
router.get("/:id", todoController.getTodoById)
router.post("/", todoController.createTodo)
router.put("/",todoController.updateTodo)
router.put("/updateComplete",todoController.updateTodoComplete)
router.delete("/:id",todoController.deleteTodo)


module.exports = router