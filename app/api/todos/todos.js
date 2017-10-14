const express = require('express');
const router = express.Router();
const Todo = require('../../models/todo');

router.get('/todos', (req, res) => {
    Todo.find((err, todos) => {
        if (err) console.log(err);
        res.json(todos);
    })
})

router.post('/todos', (req, res) => {
    console.log(req.body)
    Todo.create({
        name: req.body.name,
        isDone: false
    }, (err, todo_instance) => {
        if (err) console.log(err);
        res.send(todo_instance);
    })
});

module.exports = router;