// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destruction object

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect ot MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .deleteMany({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });


    // db.collection('Todos')
    //     .deleteOne({text: 'Eat lunch'})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // db.collection('Todos')
    //     .findOneAndDelete({})
    //     .then((result) => {
    //         console.log(result);
    //     })

    // Chalange
    db.collection('Users')
        .deleteMany({name: 'Maksim'})
        .then((result) => {
            console.log(result);
        });

    db.collection('Users')
        .findOneAndDelete({_id: new ObjectID("584fee0ba2719d3387abd50c")})
        .then((result) => {
            console.log(result);
        })

    // db.close();
});
