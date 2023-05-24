const TaskModel=require('../models/taskModel')
const mongoose =require('mongoose')





//get all tasks
const getAllTasks=async(req,res)=>{

    const user_id = req.user._id
    const tasks=await TaskModel.find({user_id}).sort({createdAt:-1})
    res.status(200).json(tasks)
}

//get task

const getTask= async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such task'})
    }
    const task= await TaskModel.findById(id)
    if(!task){
        return res.status(400).json({error: "no avaible task"})
    }

    res.status(200).json(task)
}

//create task
const createTask=async(req,res)=>{
    const {title,content,status,finish_date}=req.body
    try{
        const user_id=req.user._id
        const task=await TaskModel.create({title,content,status,finish_date,user_id})
        res.status(200).json(task)
    }catch(err){
        res.status(400).json({error:"Please fill all the fields"})
    }
}

//update task
const udpateTask=async(req,res)=>{
    console.log("update task")

    
    const {id}=req.params 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such task'})
    }
    
    const task= await TaskModel.findOneAndUpdate({_id:id},{...req.body},{ new: true })
    
    if(!task){
        return res.status(400).json({error: "no avaible task"})
    }
    res.status(200).json(task)

}

//delete task
const deleteTask=async(req,res)=>{
    console.log("deleteTask")
    const {id}=req.params   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such task'})
    }
    const task = await TaskModel.findOneAndDelete({_id:id})
    if(!task){
        return res.status(400).json({error: "no avaible task"})
    }

    res.status(200).json(task)
   
}




module.exports={
    createTask,
    getAllTasks,
    getTask,
    deleteTask,
    udpateTask
}