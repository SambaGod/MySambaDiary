const express = require("express");
const fs = require("fs");
const mysql = require("mysql");
const bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.set("port", process.env.PORT || 3001);
app.use(express.static("img"));
app.use(express.static("css"));
app.use(express.static("clientjs"));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/passport')(passport); // pass passport for configuration

// required for passport
app.use(session({
  secret: 'vidyapathaisalwaysrunning',
  resave: true,
  saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

var season = 1;


// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/delete', function(req, res){
  if(req.user) {
    db.deleteUser(req.user.id, function(callback) {
      console.log("user deleted");
      req.logout();
    });
  }
  res.sendFile(__dirname + '/index.html');
});

var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var requiresAdmin = function() {
  return [
    ensureLoggedIn('/login'),
    function(req, res, next) {
      if (req.user && req.user.isadmin == true) 
        next();
      else
        res.send(401, 'Unauthorized');
    }
  ]
};

//app.all('/admin/*', requiresAdmin());

app.get('/admin', requiresAdmin(), function(req, res) {
  res.render('admin', {
    
  })
})

app.get('/admin/members', requiresAdmin(), function(req, res) {
  db.selectMembers(function(callback) {
    console.log(callback);
    res.render('members', {
      members: callback
    })
  })
})

app.get('/profile', function(req, res) {
  console.log(req.user);
  if(req.user) {
    res.render('profile', {
      user: req.user // get the user out of session and pass to template
    });
  } else {
    res.sendFile(__dirname + '/index.html');
  }
  
});

app.get('/register', function(req, res) {
  res.render('signup', {});
});

//--Loginshit

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });

  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
    }),
        function(req, res) {
            console.log(req.body.email);

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        res.redirect('/');
    });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//--ENd

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  console.log(next());
  if (req.isAuthenticated()) 
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}