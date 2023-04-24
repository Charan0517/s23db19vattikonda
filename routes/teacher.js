var express = require('express');
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
const teacher_controlers= require('../controllers/teacher');
var router = express.Router();
/* GET teachers */
router.get('/', teacher_controlers.teacher_view_all_Page );
module.exports = router;

/* GET detail teacher page */
router.get('/detail', teacher_controlers.teacher_view_one_Page);

/* GET create teacher page */
router.get('/create', secured, teacher_controlers.teacher_create_Page);

/* GET create update page */
router.get('/update',secured, teacher_controlers.teacher_update_Page);

/* GET delete teacher page */
router.get('/delete', secured, teacher_controlers.teacher_delete_Page);
