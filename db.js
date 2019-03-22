var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...');
})

module.exports = {
  insertMember: function (request, callback) {
    var checkUsers = 'SELECT * FROM user WHERE email = ?';
    connection.query(checkUsers, request.email, function(err, rows, fields) {
      if (err) throw err;
      if (rows.length) {
        return callback(null);
      } else {
        var userquery = {name: request.name, city: request.paikka, email: request.email};
        var queryString = 'INSERT INTO jasen SET ?';
        connection.query(queryString, userquery, function(err, rows, fields) {
          if (err) throw err;
          var newUser = {
            name: request.name,
            email: request.email,
            city: request.paikka,
            jasenid: rows.insertId
          }
          var date;
          date = new Date();
          date = date.getUTCFullYear() + '-' +
                ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
                ('00' + date.getUTCDate()).slice(-2) + ' ' + 
                ('00' + date.getUTCHours()).slice(-2) + ':' + 
                ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
                ('00' + date.getUTCSeconds()).slice(-2);
          var memberQuery = {jid: rows.insertId, kid: 1, joindate: date};
          connection.query('INSERT INTO onjasen SET ?', memberQuery, function(err, rows, fields) {
            if (err) throw err;
            return callback(newUser);
          })
          
        });
      }
    })
    
  },

  getMemberships: function(kid, callback) {
    var seasonQuery = "SELECT onjasen.joindate, onjasen.paid, kausi.name, kausi.fee FROM onjasen, kausi WHERE kausi.id = onjasen.kid AND kausi.active = true AND jid = ?";
    connection.query(seasonQuery, kid, function(err, rows, fields) {
      if (err) throw err;
      console.log(rows);
      return callback(rows);
    })
  },
  deleteUser: function(uid, callback) {
    var deleteQuery = "DELETE FROM user WHERE id = ?";
    connection.query(deleteQuery, uid, function(err, rows, fields) {
      if (err) throw err;
    })
  },
  selectMembers: function(callback) {
    var checkUsers = 'SELECT * FROM jasen';
    connection.query(checkUsers, function(err, rows, fields) {
      if (err) throw err;
      return callback(rows);
    });
  }
};