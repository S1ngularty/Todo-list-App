const mongoose = require("mongoose")

const connectToDB = async()=>{
  await  mongoose.connect(process.env.DB_URI).then(con=>{
        console.log(`mongoDB connected with host ${con.connection.host}`)
    }).catch(error=>{
        console.log(`encountered error while connecting to the DB : ${error}`)
    })
}

module.exports = connectToDB