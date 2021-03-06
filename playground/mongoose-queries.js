const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5ad740a7264fe9b0703819f0';
let userID = '5ad1f4cd7989e725f8ca6453';

// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// })
//   .then((todos) => {
//     console.log('Todos', todos);
//   });

// Todo.findOne({
//   _id: id
// })
//   .then((todo) => {
//     console.log('Todo', todo);
//   });

// Todo.findById(id)
//   .then((todo) => {
//     if (!todo){
//       return console.log('Id not found')
//     }
//     console.log('Todo by id', todo);
//   })
//   .catch((e) => {
//     console.log(e);
//   })

User.findById(userID)
  .then((user) => {
    if (!user){
      return console.log('User not found');
    }
    console.log('User by id', user);
  })
  .catch((e) => {
    console.log(e);
  })