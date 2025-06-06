const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim:true,
        required:true
    },
    description: {
        type: String,
        trim:true,
        required:true
    },
    completed: {
        type: Boolean,
        default:false
    }
},{timestamps: true})

TaskSchema.index({title: 1})

const Task = mongoose.model('Task',TaskSchema )

module.exports = Task