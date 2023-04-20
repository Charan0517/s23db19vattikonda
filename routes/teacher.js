var express = require('express');
const teacher_controlers= require('../controllers/teacher');
var router = express.Router();
/* GET teachers */
router.get('/', teacher_controlers.teacher_view_all_Page );
module.exports = router;

/* GET detail teacher page */
router.get('/detail', teacher_controlers.teacher_view_one_Page);

/* GET create teacher page */
router.get('/create', teacher_controlers.teacher_create_Page);