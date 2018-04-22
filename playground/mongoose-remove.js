const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
//   .then((result) => {
//     console.log(result);
//   })

// Todo.findByIDAndRemove

Todo.findOneAndRemove('5adc97763e6cb278ff9ad184').then((todo) => {
  console.log(todo);
});