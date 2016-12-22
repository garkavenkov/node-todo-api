var env = process.env.NODE_ENV || 'development';
console.log('env ****', env);

if (env === 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'
} else if (env === 'test') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}



var _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var {
    mangoose
} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');
var {
    ObjectID
} = require('mongodb');


var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((doc) => {
            res.send(doc);
        }, (e) => {
            res.status(400).send(e);
        });
});

app.get('/todos', (req, res) => {
    Todo.find()
        .then((todos) => {
            res.send({
                todos
            });
        }, (e) => {
            res.status(400).send(e);
        });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid Id');
    }

    Todo.findById(id)
        .then((todo) => {
            if (!todo) {
                res.status(404).send('Id not found');
            } else {
                res.send({
                    todo
                });
            }
        })
        .catch((e) => {
            res.status(400).send();
        });
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid Id');
    }

    Todo.findByIdAndRemove(id)
        .then((doc) => {
            if (!doc) {
                res.status(404).send('Id not found');
            } else {
                res.send({
                    doc
                });
            }
        })
        .catch((e) => {
            res.status(400).send();
        });
});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Invalid Id');
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(
            id, {
                $set: body
            }, {
                new: true
            }
        )
        .then((todo) => {
            if (!todo) {
                return res.status(404).send();
            }

            res.send({
                todo
            })
        })
        .catch((e) => {
            res.status(400).send();
        });
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save()
        .then((user) => {
            return user.generateAuthToken();
        })
        .then((token) => {
            res.header('x-auth', token).send(user);
        })
        .catch((e) => {
            res.status(400).send(e);
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

module.exports = {
    app
}
