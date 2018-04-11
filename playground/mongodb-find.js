// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().count()
  //   .then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   })
  //   .catch((error) => {
  //     console.log('Unable to fetch todos', error);
  //   })

  db.collection('Users').find({name: 'Hyenny'}).count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
    })
    .catch((error) => {
      console.log('Unable to fetch todos', error);
    })

  // db.collection('Todos').find({
  //   _id: new ObjectID('5acb62ff7027d91f31cccf73')
  // }).toArray()
  //   .then((docs) =>{
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch((error) => {
  //     console.log('Unable to fetch todos', error);
  //   }
  //   )

  // client.close();
});