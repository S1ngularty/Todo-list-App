const User = require("../models/userModel")

const create =async (request)=>{
    const newUser = await User.create(request.body)
    if(!newUser) throw new Error("failed to create the user")
    return newUser
}

module.exports = {create}