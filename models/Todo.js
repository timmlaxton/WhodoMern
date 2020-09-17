const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  "user":  [
  {
    "type": mongoose.Schema.Types.ObjectId,
    "ref": 'users'
  },
  {
  "name": {
    "type": String,
    "required": true
  }
  },
  {
  "message": {
    "type": String,
    "required": true
  
  },
  "attention": {
    "type": Boolean,
    "required": true
    
  },
  "date": {
    "type": Date,
    "default": Date.now
  }
  }
]
});

module.exports = mongoose.model('todo', TodoSchema)