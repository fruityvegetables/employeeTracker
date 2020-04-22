const connection = require("./connection");

class Db { 
    constructor (connection) {
        this.connection = connection;
    }
    findEmployees(){
        return this.connection.query(
            "SELECT * FROM employee"
          );
    }
}

module.exports = new Db(connection);