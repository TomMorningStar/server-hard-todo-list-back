const Todo = require("../models/Todo.model");

module.exports.todoController = {
  getTodo: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (e) {
      console.log(e);
    }
  },

  addTodo: async (req, res) => {
    try {
      const { text, favorite } = req.body;
      const todo = await Todo.create({
        text,
        favorite,
      });
      res.json(todo);
    } catch (e) {
      console.log(e);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      const todo = await Todo.findByIdAndRemove(req.params.id);
      res.json(todo);
    } catch (e) {
      console.log(e);
    }
  },
  editTodo: async (req, res) => {
    try {
      const { text, favorite } = req.body;
      const todo = await Todo.findByIdAndUpdate(req.params.id, {
        text,
        favorite,
      });
      res.json(todo);
    } catch (e) {
      console.log(e);
    }
  },
  getTodoById: async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id)
      res.json(todo)
    }catch (e) {
      console.log(e);
    }
  }
};
