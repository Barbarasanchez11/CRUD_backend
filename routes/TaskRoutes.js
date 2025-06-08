const express = require('express')
const router = express.Router()
const apiTask = require('../controllers/taskControler');

router.get('/tasks',(req, res) => {
    res.send('tasks list');
})

router.post('/tasks', apiTask.createTask)

module.exports = router