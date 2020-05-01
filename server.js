const inquirer = require("inquirer");
const db = require("./db");

async function askQuestions() {
    const choice = await inquirer.prompt([
        {
            type: "list",
            name: "choices",
            message: "Hello! What would you like to do?",
            choices: [
                "View Employees",
                "View Roles",
                "View Departments",
                "Add Roles",
                "Add Employees",
                "Add Departments"
            ]
        }
    ])
    console.log(choice.choices);
    switch (choice.choices) {
        case "View Roles":
            return viewRoles();
        case "View Employees":
            return viewEmployees();
        case "View Departments":
            return viewDepartments();
        case "Add Roles":
            return createRole();
        case "Add Employees":
            return createEmployee();
        case "Add Department":
            return createDepartment();
        default:
            return
    }
}

createRole();
// VIEW async functions
async function viewEmployees() {
    const employees = await db.findEmployees()
    console.log(employees);
}

async function viewRoles() {
    const roles = await db.findRoles()
    console.log(roles);
}

async function viewDepartments() {
    const departments = await db.findDepartments()
    console.log(departments);
}
//CREATE async functions
async function createRole(){
    const departments = await db.findDepartments();
    const departmentChoices = departments.map(item => item.name);
    const roleChoice = await inquirer.prompt([
        {
            type: "input",
            name: "roleTitle",
            message: "Type the name of the role here: ",
        },
        {
            type: "input",
            name: "roleSalary",
            message: "Type the salary of the role here: ",
        },
        {
            type: "list",
            name: "choices",
            message: "Type the department ID:",
            choices: departmentChoices
        }
    ])
    const found = departments.find(element => element.name === roleChoice.choices);
    //console.log(found);
    let role = {};
    role.title = roleChoice.roleTitle
    role.salary = roleChoice.roleSalary
    role.department_id = found.id;
    const roleCreated = await db.createRole(role)
    console.log(roleCreated);
}
async function createEmployee() {
        const roles = await db.findRoles();
        const roleChoices = roles.map(item => item.title);
        
        //console.log(roleChoices);
        const employeeChoice = await inquirer.prompt([
            {
                type: "input",
                name: "employeeFirst",
                message: "What is the employee's first name?",
            },
            {
                type: "input",
                name: "employeeLast",
                message: "What is the employee's last name?",
            },
            {
                type: "list",
                name: "choices",
                message: "What is the employee's role?",
                choices: roleChoices
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager ID, if applicable?",
            }
        ])
    const found = roles.find(element => element.title === employeeChoice.choices);
    //console.log(found);
    let employee = {};
    employee.first_name = employeeChoice.employeeFirst
    employee.last_name = employeeChoice.employeeLast
    employee.role_id = found.id;
    employee.manager_id = employeeChoice.managerId;
    console.log(employeeChoice.employeeFirst);
    const employeeCreated = await db.createEmployee(employee)
    console.log(employeeCreated);
    
}



