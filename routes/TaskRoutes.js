const express = require('express')
const router = express.Router()
const apiTask = require('../controllers/taskControler');

router.post('/tasks', apiTask.createTask)
router.get('/tasks', apiTask.getTasks)

module.exports = router