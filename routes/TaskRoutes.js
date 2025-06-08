const express = require('express')
const router = express.Router()
const apiTask = require('../controllers/taskController');

router.post('/tasks', apiTask.createTask)
router.get('/tasks', apiTask.getTasks)
router.get('/tasks/:id', apiTask.getTasksById)
router.put('/tasks/:id', apiTask.updateTask)
router.delete('/tasks/:id', apiTask.deleteTask)

module.exports = router