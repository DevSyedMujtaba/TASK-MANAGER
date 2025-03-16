const Task = require('../models/Task');

// createTask function
// This function creates a new task in the database and returns a JSON response with a message and the task that was created.
const createTask = async (req, res) => {
    try {

        const task = new Task(req.body);
        await task.save();
        res.status(201).json({ message: 'Task created successfully ' }, task);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// getTasks function
// This function retrieves all tasks from the database and returns them as a JSON response.
const getTasks = async (req, res) => {

    try {
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// updateTask function
// This function updates a task in the database and returns a JSON response with a message and the updated task.
const updateTask = async (req, res) => {

    try {

        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body,
            {
                runValidators: true,
                new: true,
            }
        );

        if (!updatedTask) {
            return res.status(404).json({message: "Task not find"});
        }

        res.status(200).json(updatedTask);

    } catch (err) {

        res.status(500).json({message: err.message});
    }


};

// deleteTask function
// This function deletes a task from the database and returns a JSON response with a message.
const deleteTask = async(req,res) => { 
    try {

        const {id} = req.params;

        const task = await Task.findById(id);
        if(!task){
            return res.status(400).json({message: "Task not find"});
        }

        await Task.findByIdAndDelete(id);
        res.status(200).json({message:"Task Deleted"})
        
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}