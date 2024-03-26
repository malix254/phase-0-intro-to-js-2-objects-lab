// Write your solution in this file!
// Function to update an employee with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with the original key-value pairs and the new key-value pair
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to destructively update an employee with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original employee with the new key-value pair
    employee[key] = value;
    // Return the entire updated employee
    return employee;
  }
  
  // Function to delete a key from a clone of the employee (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Create a clone of the employee object
    const clone = { ...employee };
    // Delete the key from the clone
    delete clone[key];
    // Return the new employee (clone)
    return clone;
  }
  
  // Function to destructively delete a key from the employee
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the key from the original employee
    delete employee[key];
    // Return the modified original employee
    return employee;
  }
  
  // Sample usage:
  const employee = {
    name: "John",
    age: 30,
    department: "Engineering"
  };
  
  // Update employee with a new key-value pair (non-destructive)
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "position", "Manager");
  console.log(updatedEmployee);
  
  // Destructively update employee with a new key-value pair
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "salary", 50000);
  console.log(employee);
  
  // Delete a key from a clone of the employee (non-destructive)
  const newEmployee = deleteFromEmployeeByKey(employee, "age");
  console.log(newEmployee);
  
  // Destructively delete a key from the employee
  destructivelyDeleteFromEmployeeByKey(employee, "department");
  console.log(employee);
  