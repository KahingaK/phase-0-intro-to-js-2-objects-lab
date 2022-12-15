// Write your solution in this file!
const employee = { name: "Kimani", streetAddress: "Runda" };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee['streetAddress'] = '11 Broadway'

    return newEmployee
    

}


function destructivelyUpdateEmployeeWithKeyAndValue(Employee, key, value) {
    
    employee['streetAddress'] = "12 Broadway"

    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyDeleteFromEmployeeByKey(employee, Key) {
    delete employee.name
    return employee
}