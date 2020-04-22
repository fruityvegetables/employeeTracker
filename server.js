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
                "Anotha one"
            ]
        }
    ])
console.log(choice);
}
viewEmployees();

async function viewEmployees() {
    const employees = await db.findEmployees()
      console.log(employees);
}