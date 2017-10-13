const Todo = require('../models/todo');
module.exports = {
    seedTodos: (req, res) => {
        const seedTodos = [
            { 
                name: 'walk dog', 
                isDone: true 
            },
            { 
                name: 'seed db', 
                isDone: false 
            },
            { 
                name: 'write frontend', 
                isDone: false 
            }
        ];
        for(let todo of seedTodos) {
            let newTodo = new Todo(todo);
            newTodo.save(todo);
        }
        res.send('db seeded')
    }
}
    