const express = require('express')


const {createTask,getAllTasks,getTask,udpateTask,deleteTask}=require('../controllers/taskController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

router.use(requireAuth)

//Get all tasks
router.get('/',getAllTasks) 


//Post new task
router.post('/',createTask) 

//delete task
router.delete('/:id',deleteTask) 

//update task
router.patch('/:id',udpateTask) 

//Get single task
router.get('/:id',getTask) 



module.exports =router