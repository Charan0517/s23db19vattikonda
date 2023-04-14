var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teacherRouter = require('./routes/teacher');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var Teacher = require("./models/teacher");


// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Teacher.deleteMany();
  let instance1 = new Teacher({teacher_name:"Ram", salary:'20,000', subject:"Java"});
  let instance2 = new Teacher({teacher_name:"Hari", salary:'20,500', subject:"Applications"});
  let instance3 = new Teacher({teacher_name:"Jhon", salary:'16,000', subject:"DBMS"});
  let instance4 = new Teacher({teacher_name:"Smith", salary:'15,000', subject:"SQL"});
  instance1.save().then(doc=>{

    console.log("First object saved")}

    ).catch(err=>{

    console.error(err)});
  instance2.save().then(doc=>{

    console.log("First object saved")}

    ).catch(err=>{

    console.error(err)});
  instance3.save().then(doc=>{

    console.log("First object saved")}

    ).catch(err=>{

    console.error(err)});
  instance4.save().then(doc=>{

    console.log("First object saved")}

    ).catch(err=>{

    console.error(err)});
  // function(err,doc) {
  //   if(err) return console.error(err);
  //   console.log("First object saved")
  //   });
}
  let reseed = true;
  if (reseed) { recreateDB();}


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teacher', teacherRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/teacher', Teacher);
app.use('/resource', resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
