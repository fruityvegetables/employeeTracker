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
    findRoles(){
        return this.connection.query(
            "SELECT id, title, salary, department_id FROM role"
          );
    }
    findDepartments(){
        return this.connection.query(
            "SELECT id, name FROM department"
          );
    }
}

module.exports = new Db(connection);