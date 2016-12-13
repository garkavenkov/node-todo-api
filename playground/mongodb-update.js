// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destruction object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect ot MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id: new ObjectID("584ffe61f6170c3944014bda")
    //     }, {
    //         $set: {
    //             completed: 'true'
    //         }
    //     }, {
    //         returnOriginal: false
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID("584fee2eca513533ae2eb198")
        }, {
            $set: {
                name: 'Maksim'
            },
            $inc: {
                age: 32
            }
        }, {
            returnOrigin: false
        })
        .then((result) => {
            console.log(result);
        });


    // db.close();
});
