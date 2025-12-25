const Todo=require("../models/Todo")

const getAllTodos= async (req,res)=>{
    const todos=await Todo.find()
    if(!todos)
        return res.send("No todos")
    res.json(todos)
}

const getTodoById= async(req,res)=>{
    const {id}=req.params
    const todo= await Todo.findById(id)
    if(!todo)
        return res.status(400).send("Todo not found")
    return res.json(todo)
}

const createTodo= async (req,res)=>{
    const {title, tags}=req.body
    if(!title)
        return res.status(400).send("title is required")
    const todo= await Todo.create({title,tags})
    if(!todo)
        return res.send("error")
    res.json(todo)
}

const updateTodo=async (req,res)=>{
    const {id,title,tags}=req.body
    if(!id || !title)
        return res.status(400).send("id title are required")
    const todo= await Todo.findById(id)
    if(!todo)
        return res.status(400).send("not found")
    todo.title=title
    todo.tags=tags
    const newTodo=await todo.save()
    res.json(newTodo)
 }

 const updateTodoComplete= async (req,res)=>{
    const {id,complete}= req.body
    if(!id || !complete)
        return req.send("the id and complete are required")
    const todo= await Todo.findById(id)
    if(!todo)
        return res.status(400).send("not found")
    todo.completed=complete
    const newTodo=await todo.save()
    res.json(newTodo)
 }

 const deleteTodo= async(req,res)=>{
     const {id}=req.params
     const todo= await Todo.findById(id)
     if(!todo)
         return res.status(400).send("todo not found")
    const deletetodo=await todo.deleteOne()
    res.send(`Todo with id ${id} deleted`)
 }

 module.exports = {getAllTodos,getTodoById,createTodo,updateTodo,updateTodoComplete,deleteTodo}