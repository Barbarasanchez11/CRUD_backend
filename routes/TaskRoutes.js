const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

router.get('/tasks',(req, res) => {
    res.send('tasks list');
})

module.exports = router