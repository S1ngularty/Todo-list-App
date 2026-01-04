const Task = require("../models/taskModel.js")

const create = async(request)=>{
    const {userId} = request.user
    request.body.user = userId
    const task = await Task.create(request.body,{validation:true})
    if(!task) throw new Error("failed to create the task")
    return task
    } 


    module.exports = {create}