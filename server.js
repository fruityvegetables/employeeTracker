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
askQuestions();

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

