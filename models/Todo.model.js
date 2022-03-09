const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    text: String,
    favorite: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;