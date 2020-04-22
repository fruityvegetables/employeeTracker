require("dotenv").config();
const mysql = require("mysql");
const util = require("util");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.DB_PASSWORD,
    database: "tracker_DB"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
  });

  connection.query = util.promisify(connection.query);

  module.exports = connection;