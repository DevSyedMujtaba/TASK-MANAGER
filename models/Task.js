const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create a schema
const Task = new Schema({
    name:{
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    }
});


// Create a model
module.exports = mongoose.model('Task', Task)