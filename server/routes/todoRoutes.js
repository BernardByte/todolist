const express = require('express');
const todoRoutes = express.Router()
const {createTodoItem} = require('../controllers/todoController.js')

todoRoutes.get('/',(req,res)=>{
    res.send('hello')
})

todoRoutes.post('/',createTodoItem)



module.exports = todoRoutes;