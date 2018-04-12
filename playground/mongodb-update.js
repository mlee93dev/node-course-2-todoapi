// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5acf5f525906f48200ab80bb')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // })
  // .then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5accb51415379633995a49f6')
  }, {
    $set: {
      name: 'Mark Lee'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  })
  .then((result) => {
    console.log(result);
  });

  // client.close();
});