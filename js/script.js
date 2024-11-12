let addForm = document.getElementById('addForm')
let empTable = document.getElementById('employees')
let empCount = document.getElementById('empCount')

let count = 0

addForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value

    let row = empTable.insertRow()

    row.insertCell(0).appendChild(document.createTextNode(id))
    row.insertCell(1).appendChild(document.createTextNode(name))
    row.insertCell(2).appendChild(document.createTextNode(extension))
    row.insertCell(3).appendChild(document.createTextNode(email))
    row.insertCell(4).appendChild(document.createTextNode(department))

    let deleteCell = row.insertCell(5)
    let deleteButton = document.createElement('button')
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteCell.appendChild(deleteButton);

    count++;
    empCount.textContent = count;

    addForm.reset();
    document.getElementById('id').focus();
    
})

empTable.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            let row = e.target.parentNode.parentNode
            empTable.deleteRow(row.rowIndex)
        }

        count--;
        empCount.textContent = count;
    }
})





// let addForm = document.getElementById('addForm')
// let employeeTable = document.getElementById('employees')
// let employeeCount = document.getElementById('empCount')

// let count = 0


// function addEmployee(e) {
//     e.preventDefault()

//     const employee = {
//         id: document.getElementById('id').value,
//         name: document.getElementById('name').value,
//         extension: document.getElementById('extension').value,
//         email: document.getElementById('email').value,
//         department: document.getElementById('department').value
//     }

//     const row = employeeTable.insertRow()
//     row.insertCell(0).appendChild(document.createTextNode(employee.id))
//     row.insertCell(1).appendChild(document.createTextNode(employee.name))
//     row.insertCell(2).appendChild(document.createTextNode(employee.extension))
//     row.insertCell(3).appendChild(document.createTextNode(employee.email))
//     row.insertCell(4).appendChild(document.createTextNode(employee.department))


//     let deleteCell = row.insertCell(5)
//     let deleteButton = document.createElement('button')
//     deleteButton.className = 'btn btn-danger btn-sm'
//     deleteButton.textContent = 'Delete'
//     deleteCell.appendChild(deleteButton)

//     updateEmployeeCount(1)

//     addForm.reset()
//     document.getElementById('id').focus()

// }

// function deleteEmployee(e) {
//     if (e.target.classList.contains('btn-danger')) {
//         if (confirm('Are you sure you want to delete this employee?')) {
//             const row = e.target.parentNode.parentNode
//             employeeTable.deleteRow(row.rowIndex)

//             updateEmployeeCount(-1)
//         }
//     }
// }

// function updateEmployeeCount(change) {
//     count += change
//     employeeCount.textContent = `(${count})`
// }

// addForm.addEventListener('submit', addEmployee);
// employeeTable.addEventListener('click', deleteEmployee)

