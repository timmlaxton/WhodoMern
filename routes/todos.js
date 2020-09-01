const express = require('express');
const router = express.Router();

// @route   GET api/todos
// @desc    Get all todos
// @access  Private  
router.get('/', (req, res) => {
  res.send('Get all Todos')
});


// @route   POST api/todos
// @desc    Add new todos
// @access  Private  
router.post('/', (req, res) => {
  res.send('Add Todos')
});

// @route   PUT api/todos
// @desc    Update  todos
// @access  Private  
router.put('/:id', (req, res) => {
  res.send('Update Todos')
});

// @route   DELETE api/todos
// @desc    Delete  todos
// @access  Private  
router.delete('/:id', (req, res) => {
  res.send('Delete Todos')
});

module.exports = router