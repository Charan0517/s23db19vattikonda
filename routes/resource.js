var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var teacher_controller = require('../controllers/teacher');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// TEACHER ROUTES ///
// POST request for creating a Teacher.
router.post('/teacher', teacher_controller.teacher_create_post);
// DELETE request to delete Teacher.
router.delete('/teacher/:id', teacher_controller.teacher_delete);
// PUT request to update Reacher.
router.put('/teacher/:id', teacher_controller.teacher_update_put);
// GET request for one Teacher.
router.get('/teacher/:id', teacher_controller.teacher_detail);
// GET request for list of all Teacher items.
router.get('/teacher', teacher_controller.teacher_list);
module.exports = router;

