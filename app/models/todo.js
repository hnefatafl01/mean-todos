const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({ name: String, isDone: Boolean });
module.exports = mongoose.model('Todo', todoSchema );