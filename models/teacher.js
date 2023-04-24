const mongoose = require("mongoose")

// function validator (v) {
//     return v.length > 5;
//   };


const teacherSchema = mongoose.Schema({
    teacher_name: {
        type: String,
        minlength: [3, 'Teacher name Should have minimum length of 4'],
        maxlength: [20, 'Teacher name Should have maximum length of 20']
    },
    salary: String,
    subject: {
        type: String,
        minlength: [3, 'Subject name Should have minimum length of 4'],
        maxlength: [20, 'Subject name Should have maximum length of 20']
    }
})

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
    console.log("Connection to DB succeeded")
});


module.exports = mongoose.model("Teacher", teacherSchema)

