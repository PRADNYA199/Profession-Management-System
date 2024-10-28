// DOM Elements
const form = document.getElementById('employeeForm');
const nameInput = document.getElementById('name');
const professionInput = document.getElementById('profession');
const ageInput = document.getElementById('age');
const messageDiv = document.getElementById('message');
const employeeList = document.getElementById('employeeList');
const addEmployeeBtn = document.getElementById('addEmployeeBtn');

// Employee Array
let employees = [];

// Event Handlers
addEmployeeBtn.addEventListener('click', addEmployee);

// Add Employee
function addEmployee() {
    const name = nameInput.value.trim();
    const profession = professionInput.value.trim();
    const age = ageInput.value.trim();

    // Validate form
    if (name === '' || profession === '' || age === '') {
        showMessage('Please fill all the fields.', 'error');
        return;
    }

    // Create Employee Object
    const employee = {
        id: employees.length + 1,
        name,
        profession,
        age
    };

    // Append to employees array
    employees.push(employee);
    clearForm();
    showMessage('Employee added successfully!', 'success');
    displayEmployees();
}

// Display Employees
function displayEmployees() {
    if (employees.length === 0) {
        employeeList.innerHTML = '<p>No employees added yet.</p>';
        return;
    }

    employeeList.innerHTML = ''; // Clear previous content
    employees.forEach((employee) => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';

        employeeDiv.innerHTML = `
            <div>
                <p><strong>Name:</strong> ${employee.name}</p>
                <p><strong>Profession:</strong> ${employee.profession}</p>
                <p><strong>Age:</strong> ${employee.age}</p>
            </div>
            <button class="deleteBtn" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;

        employeeList.appendChild(employeeDiv);
    });
}

// Delete Employee
function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

// Clear Form Inputs
function clearForm() {
    nameInput.value = '';
    professionInput.value = '';
    ageInput.value = '';
}

// Show Message
function showMessage(message, type) {
    messageDiv.innerText = message;
    messageDiv.className = type === 'error' ? 'error' : 'success';
    setTimeout(() => {
        messageDiv.innerText = '';
        messageDiv.className = '';
    }, 3000);
}
