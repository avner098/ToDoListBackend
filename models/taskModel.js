const mongoose =require('mongoose')

const Schema=mongoose.Schema

const taskSchema=new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true 
    },
    finish_date:{
        type: String,
        required: true
    },
    urgency:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
},{timestamps: true})

module.exports=mongoose.model('task',taskSchema)
