const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// var id = "5852984649f19a2f0f607beb1";
var userId ="58502d8e97967547874f3781"

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }



// Todo.find({
//         _id: id
//     })
//     .then((todos) => {
//         console.log('Todos ', todos);
//     });
//
// Todo.findOne({
//         _id: id
//     })
//     .then((todo) => {
//         console.log('Todo ', todo);
//     });

// Todo.findById(id)
//     .then((todo) => {
//         if (!todo) {
//             return console.log('Id not found');
//         }
//         console.log('Todo by Id ', todo);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

User.findById(userId)
    .then((user) => {
        if (!user) {
            console.log('User not found');
        }
        console.log('Email is ', user.email);
    })
    .catch((e) => console.log(e));
