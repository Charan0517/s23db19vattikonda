const mongoose = require("mongoose")
const teacherSchema = mongoose.Schema({
teacher_name: String,
salary: String,
subject: String
})

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

  
module.exports = mongoose.model("Teacher", teacherSchema)

