var Teacher = require('../models/teacher');
// List of all teachers
exports.teacher_list = async function(req, res) {
    try{
    theTeachers = await Teacher.find();
    res.send(theTeachers);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific teacher.
exports.teacher_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher detail: ' + req.params.id);
};
// Handle Teacher create on POST.
exports.teacher_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Teacher();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.teacher_name = req.body.teacher_name;
    document.salary = req.body.salary;
    document.subject = req.body.subject;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle Teacher delete form on DELETE.
exports.teacher_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher delete DELETE ' + req.params.id);
};
// Handle Teacher update form on PUT.
exports.teacher_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.teacher_view_all_Page = async function(req, res) {
    try{
    theTeachers = await Teacher.find();
    res.render('teacher', { title: 'Teacher Search Results', results: theTeachers});
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    
