const connection = require("./connection");

class Db { 
    constructor (connection) {
        this.connection = connection;
    }
    findEmployees(){
        return this.connection.query(
            "SELECT first_name, last_name, role_id, manager_id FROM employee"
          );
    }
}

module.exports = new Db(connection);