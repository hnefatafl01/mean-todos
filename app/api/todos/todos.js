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
    Todo.create({
        name: req.body.name,
        isDone: false
    }, (err, todo_instance) => {
        if (err) console.log(err);
        res.send(todo_instance);
    })
});

router.delete('/todos/:id', (req, res) => {
    Todo.findOneAndRemove({
        _id : req.params.id
    }, (err, result) => {
        if(err) res.send(err);
        res.send(result);
    })
});

module.exports = router;