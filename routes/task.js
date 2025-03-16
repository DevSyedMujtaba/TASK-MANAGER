 const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/task');

// Create a task
router.post('/', createTask );

// Get all tasks
router.get('/', getTasks );

// Update a task
router.put('/:id', updateTask );

// Delete a task
router.delete('/:id', deleteTask );


module.exports = router;