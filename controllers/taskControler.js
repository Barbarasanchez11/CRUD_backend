const Task = require('../models/Task')

const apiTask = {

    async createTask(req,res) {
        try {
            const task = req.body
            const newTask = await Task.create(task)
            res.status(201).json(newTask),{messagge: 'new task added'}
            
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

module.exports = apiTask