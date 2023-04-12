var Teacher = require('../models/teacher');
// List of all teachers
exports.teacher_list = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher list');
};
// for a specific teacher.
exports.teacher_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher detail: ' + req.params.id);
};
// Handle Teacheer create on POST.
exports.teacher_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher create POST');
};
// Handle Teacher delete form on DELETE.
exports.teacher_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher delete DELETE ' + req.params.id);
};
// Handle Teacher update form on PUT.
exports.teacher_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Teacher update PUT' + req.params.id);
};
