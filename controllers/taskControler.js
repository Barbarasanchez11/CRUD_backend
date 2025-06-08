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
    },

    async getTasks(req,res){
        try {
            const tasks = await Task.find()
            return res.json(tasks)
            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async getTasksById(req,res){
        const {id} = req.params
        try {
            const tasks = await Task.findById(id)
            res.send(tasks)

        } catch (error) {
            res.status(500).send(error)
        }
    },
    async updateTask(req,res){
        const {id} =req.params
        const body = req.body

        try {
            const tasks = await Task.findByIdAndUpdate(id, {...body})
            res.status(200).json(tasks)
            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async deleteTask(req,res){
        const {id} = req.params
        try {
            const tasks = await Task.findByIdAndDelete(id)
            res.send({message: 'deleted task', tasks})
        } catch (error) {
            res.status(500).send(error)
            
        }
    }
}

module.exports = apiTask