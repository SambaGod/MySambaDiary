const express = require('express')

// creating an express instance
const app = express()  
const cookieSession = require('cookie-session')  
const bodyParser = require('body-parser')  
const passport = require('passport')
const mysql = require("mysql")
var bcrypt = require('bcrypt-nodejs')
var dbconfig = {
  'host': 'localhost',
  'user': 'root',
  'password': '',
  'database': 'test'
}
var connection = mysql.createConnection(dbconfig);

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy

app.use(bodyParser.json())

app.use(cookieSession({  
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());

app.use(passport.session());

passport.use(  
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },

    (email, password, done) => {
      connection.query("SELECT * FROM mylogin WHERE email = ?",[email], function(err, rows) {
        if (err)
          return done(err);
        if (!rows.length) {
          return done(null, false, {message: 'No user found.'});           
        }

        // if the user is found but the password is wrong
        if (!bcrypt.compareSync(password, rows[0].password)) {
          return done(null, false, {message: 'Wrong password'});
        }
                    
        // all is well, return successful user
        return done(null, rows[0]);
      })
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  connection.query("SELECT id, email, name, isAdmin FROM mylogin WHERE id = ? ",[id], function(err, rows){
    done(err, rows[0]);
  });
})

app.post("/api/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(400).send([user, "Cannot log in", info]);
    }

    req.login(user, err => {
      res.send("Logged in");
    });
  })(req, res, next);
});

app.post("/api/register", (req, res, next) =>{
  console.log("trying to register")
  connection.query("SELECT * FROM mylogin WHERE email = ?", req.body.email, function(err, rows) {
    if (err) {
      res.send(err)
    }
    if (rows.length) {
      res.send("Email is already taken")
    } else {
      var newUser = {
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, null, null),
        email: req.body.email,
        isAdmin: req.body.isAdmin
      }
      var date = new Date();
      var registrationDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      connection.query("INSERT INTO mylogin (name, password, email, registrationdate, isAdmin) VALUES (?,?,?,?,?)", [newUser.name, newUser.password, newUser.email, registrationDate, newUser.isAdmin], function(err, rows) {
        res.send("You have been successfully registered!")
      })
    }
  })
})

app.get("/", function(req, res) {
  res.send("Welcome to the server!");
})

const authMiddleware = (req, res, next) => {  
  if (!req.isAuthenticated()) {
    res.status(401).send('You are not authenticated')
  } else {
    return next()
  }
}

app.get("/api/user", authMiddleware, (req, res) => {
  connection.query("SELECT id, email, name, isAdmin, school FROM mylogin WHERE id = ? ",[req.session.passport.user], function(err, rows){
    res.send({ user: rows[0] })
  });
})

app.get("/api/school/", authMiddleware, (req, res) => {
  console.log(req.query.id)
  connection.query("SELECT * FROM school WHERE id = ?", req.query.id, function(err, rows){
    res.send({ school: rows[0] })
  });
})

app.get("/api/newUsers", authMiddleware, (req, res) => {
  connection.query("SELECT COUNT(*) as newUsers FROM mylogin WHERE registrationdate > NOW() - INTERVAL 7 DAY ", function(err, rows){
    res.send({ newUsers: rows[0] })
  });
})

app.get("/api/latestLogins", authMiddleware, (req, res) => {
  connection.query("SELECT COUNT(*) as newUsers FROM mylogin WHERE registrationdate > NOW() - INTERVAL 7 DAY ", function(err, rows){
    res.send({ newUsers: rows[0] })
  });
})


app.post("/api/addschool", (req, res, next) =>{
  console.log("trying to add school")
  connection.query("INSERT INTO school (name, city, country) VALUES (?,?,?)", [req.body.name, req.body.city, req.body.country], function(err, school) {
    connection.query("SELECT * FROM mylogin WHERE email = ?", req.body.email, function(err, schoolUser) {
      if (err) {
        res.send(err)
      }
      if (schoolUser.length) {
        res.send("Email is already taken, updating the school value")
        connection.query("UPDATE mylogin SET school = ? WHERE id = ?", [school.insertId, schoolUser[0].id], function(err, rows) {
          console.log("user updated")
        })
      } else {
        var newUser = {
          name: req.body.name,
          password: bcrypt.hashSync("aaa", null, null),
          email: req.body.email,
          isAdmin: 0,
          school: school.insertId
        }
        connection.query("INSERT INTO mylogin (name, password, email, isAdmin, school) VALUES (?,?,?,?,?)", [newUser.name, newUser.password, newUser.email, newUser.isAdmin, newUser.school], function(err, rows) {
          res.send("You have been successfully registered!")
        })
      }
    })
  })
})

app.post("/api/changeAdmin", (req, res, next) =>{
  console.log("trying to change admin")
  connection.query("UPDATE mylogin SET isAdmin = ? WHERE id = ?", [req.body.value, req.body.id], function(err, rows) {
    if (err) {
      res.send(err)
    }
      res.send("Succesful update!")
  })
})

app.post("/api/deleteUser", (req, res, next) =>{
  console.log("trying to delete user")
  connection.query("DELETE FROM mylogin WHERE id = ?", req.body.id, function(err, rows) {
    if (err) {
      res.send(err)
    }
      res.send("Succeesful delete!")
  })
})

app.get("/api/users", authMiddleware, (req, res) => {
  connection.query("SELECT id, email, name, isAdmin FROM mylogin", function(err, rows){
    res.send({ users: rows })
  });
})

app.post("/api/updateUser", authMiddleware, (req, res) => {
  if (req.body.password.length > 0) {
    var password = bcrypt.hashSync(req.body.password, null, null)
    connection.query("UPDATE mylogin SET name = ?, email = ?, password = ? WHERE id = ?", [req.body.name, req.body.email, password, req.body.id], function(err, rows){
      if (err)
        res.send(err)

      res.send("Successful update!")
    });
  }
  
})

app.get("/api/schools", authMiddleware, (req, res) => {
  connection.query("SELECT * FROM school", function(err, rows){
    res.send({ schools: rows })
  });
})

app.get("/api/logout", function(req, res) {  
  req.logout();

  console.log("logged out")

  return res.send();
});

app.listen(3000, () => {  
  console.log("Example app listening on port 3000")
})