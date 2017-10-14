require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const db = require('./config/db');
const todos = require('./app/api/todos/todos');
const logger = require('morgan');
const todosController = require('./app/controllers/todosController');

const dbConnect = mongoose.connect(db.url, { useMongoClient: true });
dbConnect.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, 'public'))); 
// app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

app.use('/api/', todos);
// app.use('/api/todos/seed', todosController.seedTodos)

app.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, 'public')
      })
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

module.exports = app;