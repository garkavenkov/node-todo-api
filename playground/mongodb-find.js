// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destruction object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect ot MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     // .find({completed: false})
    //     .find({
    //         _id: new ObjectID("584fde67bb6dc12e4319f853")
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    // db.collection('Users')
    //     // .find({completed: false})
    //     .find({
    //         name: 'Maksim'
    //     })
    //     .toArray()
    //     .then((docs) => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db.close();
});
