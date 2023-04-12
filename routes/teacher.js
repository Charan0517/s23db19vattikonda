var express = require('express');
const teacher_controlers= require('../controllers/teacher');
var router = express.Router();
/* GET teachers */
router.get('/', teacher_controlers.teacher_view_all_Page );
module.exports = router;