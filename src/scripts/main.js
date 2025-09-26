'use strict';

function sortBySalary() {
  const employeeList = document.querySelectorAll('li');
  const employeesArray = Array.from(employeeList);

  employeesArray.sort((a, b) => {
    const salaryA = parseFloat(
      a.getAttribute('data-salary').replace('$', '').replace(',', ''),
    );
    const salaryB = parseFloat(
      b.getAttribute('data-salary').replace('$', '').replace(',', ''),
    );

    return salaryB - salaryA;
  });

  const ul = document.querySelector('ul');

  employeesArray.forEach((employee) => ul.appendChild(employee));
}

function getEmployeesArray() {
  const employeeList = document.querySelectorAll('li');
  const employees = [];

  employeeList.forEach((item) => {
    const employee = {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseFloat(
        item.getAttribute('data-salary').replace('$', '').replace(',', ''),
      ),
      age: Number(item.getAttribute('data-age')),
    };

    employees.push(employee);
  });

  return employees;
}

document.addEventListener('DOMContentLoaded', () => {
  sortBySalary();
  getEmployeesArray();
});
