const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Both of these return the doc 
//Todo.findOneAndRemove
//Todo.finebyIdAndRemove
Todo.findOneAndRemove({_id: '594d92def31ccce96741f54c'}).then(todo=>{
    console.log(todo);
});

// Todo.findByIdAndRemove('594d923ff31ccce96741f511').then((todo=>{
//     console.log(todo);
// }));