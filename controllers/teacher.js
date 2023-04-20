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
exports.teacher_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Teacher.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    }
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
exports.teacher_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Teacher.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle Teacher update form on PUT.
exports.teacher_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Teacher.findById( req.params.id)
    // Do updates of properties
    if(req.body.teacher_name)
    toUpdate.teacher_name = req.body.teacher_name;
    if(req.body.salary) toUpdate.salary = req.body.salary;
    if(req.body.subject) toUpdate.subject = req.body.subject;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    }

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
    
// Handle a show one view with id specified by query
exports.teacher_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Teacher.findById( req.query.id)
    res.render('teacherdetail',
    { title: 'Teacher Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };


// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.teacher_create_Page = function(req, res) {
console.log("create view")
try{
res.render('teachercreate', { title: 'Teacher Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


// Handle building the view for updating a teacher.
// query provides the id
exports.teacher_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Teacher.findById(req.query.id)
    res.render('teacherupdate', { title: 'Teacher Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }


// Handle a delete one view with id from query
exports.teacher_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Teacher.findById(req.query.id)
    res.render('teacherdelete', { title: 'Teacher Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }