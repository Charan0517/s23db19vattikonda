var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
})
)

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

    console.log("Second object saved")}

    ).catch(err=>{

    console.error(err)});
  instance3.save().then(doc=>{

    console.log("Third object saved")}

    ).catch(err=>{

    console.error(err)});
  instance4.save().then(doc=>{

    console.log("Fourth object saved")}

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

app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teacher', teacherRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/teacher', Teacher);
app.use('/resource', resourceRouter);


  // passport config
  // Use the existing connection
  // The Account model
  var Account =require('./models/account');
  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());
  


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
