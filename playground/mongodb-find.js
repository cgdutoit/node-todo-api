const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect ('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne ({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log ('unable to insert', err);
    //     }
    //     console.log (JSON.stringify(result.ops, undefined, 2));
    // });
/*
    db.collection('Todos').find({
        _id: new ObjectID ('5b2eea23bf359605b1f797a8')
       }).toArray().then ( (docs) => {

        console.log('todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log ('unable to fetch');
    });

*/


    db.collection('Todos').find().count().then ( (count) => {

        console.log('todos');
        console.log (`count: ${count}`);
       // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log ('unable to fetch');
    });
    
    client.close();

});