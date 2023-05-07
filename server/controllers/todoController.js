const Todo = require('../models/todoModel.js');

const createTodoItem = async (req, res) => {
  try {
    // Get the todo data from the request body

    const { todoText } = req.body;
    const todoData = {
      todo: todoText
    }


    // Create a new todo item with the given data
    const todoItem = await Todo.create(todoData);
    console.log(todoItem);
    // res.send(todoItem)
    // Send the created todo item as the response
    res.status(201).json(todoItem);
  } catch (error) {
    // Handle any errors that occur during the creation process
    console.error(error);
    res.status(500).send('Server error');
  }
}

module.exports = { createTodoItem }