const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator/check');

const User = require('../models/User');
const Todo = require('../models/Todo');

// @route   GET  api/todos
// @desc    Get all  todo
// @access  Public

router.get('/', auth, async (req, res) => {
 try {
   const todos = await Todo.find({ user: req.user.id }).sort({ date: -1 })
   res.json(todos)
 } catch (err) {
   console.error(err.message);
   res.status(500).send('Server Error')
 }
});



// @route   POST  api/auth
// @desc    Add new todo
// @access  Private

router.post('/', [
  auth, 
  [
  check('name', 'Name is required')
  .not()
  .isEmpty()
] 
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() })
   }

   const {name, message, attention}  = req.body;

   try {
     const newTodo = new Todo({
       name,
       message,
       attention,
       user:  req.user.id
     });

     const todo = await newTodo.save();
     res.json(todo);
   } catch (err) {
     console.error(err.message);
     res.status(500).send('Server Error')
   }
});

// @route   PUT  api/todos/:id
// @desc    Update todos
// @access  Private

router.put('/:id', auth, async (req, res) => {
  const {name, message, attention}  = req.body;

  //Build a contact object
  const todoFields = {};
  if(name) todoFields.name = name;
  if(message) todoFields.message = message;
  if(attention) todoFields.attention = attention;
  

  try {let todo = await Todo.findById(req.params.id);

    if(!todo) return res.status(404).json({msg: 'Todo not found'})

    // make sure user owns contact
    if(todo.user.toString() !== req.user.id){
      return res.status(401).json({ msg: 'Not authorized'})
    }

    todo = await Todo.findByIdAndUpdate(req.params.id,
      { $set: todoFields},
      {new: true});

      res.json(todo);
  } catch (err) {
    console.error(err.message);
     res.status(500).send('Server Error')
  }
});

// @route   PUT  api/todos/:id
// @desc    Delete todos
// @access  Private

router.delete('/:id', auth, async (req, res) => {
  try {
    let todo = await Todo.findById(req.params.id);

    if(!todo) return res.status(404).json({msg: 'Todo not found'})

    // make sure user owns todo
    if(todo.user.toString() !== req.user.id){
      return res.status(401).json({ msg: 'Not authorized'})
    }

    await Todo.findByIdAndRemove(req.params.id)

      res.json({  msg: 'Todo removed'});
  } catch (err) {
    console.error(err.message);
     res.status(500).send('Server Error')
  }
});




module.exports = router;

