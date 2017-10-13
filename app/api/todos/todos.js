const express = require('express');
const router = express.Router();
const Todo = require('../../models/todo');

router.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if (err) console.log(err);
        res.json(todos)
    })
})

module.exports = router;