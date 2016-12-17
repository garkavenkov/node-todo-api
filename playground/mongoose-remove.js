const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

//Todo.remove
// Todo.remove({})
//     .then((result) => {
//         console.log(result);
//     })

 // Todo.findOneAndRemove({_id: '58559743d82eb96f1c8c8836'})
 //    .then((doc) => {
 //        console.log(doc);
 //    });

// Todo.findByIdAndRemove('58559743d82eb96f1c8c8836')
//     .then((doc) => {
//         console.log(doc);
//     })
