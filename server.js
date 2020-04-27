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
                "View Departments"
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
        default:
            return
    }
}
createEmployee();
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
async function createEmployee() {
        const roleChoices = await db.findRoles();
        
        console.log(roleChoices);
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
                message: "~~~List of roles~~~",
                choices: [
                    roleChoices
                ]
            }
        ])
    let employee = {};
    employee.first_name = employeeChoice.employeeFirst
    employee.last_name = employeeChoice.employeeLast
    employee.role_id = viewRoles(role.id)
    employee.manager_id = 1
    console.log(employeeChoice.employeeFirst);
    // const employeeCreated = await db.createEmployee(employee)
    // console.log(employeeCreated);
}



