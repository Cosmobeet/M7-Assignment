// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form');
let table = document.querySelector('table');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = document.getElementById('empCount');

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let ext = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let rowId = row.insertCell();
    let rowName = row.insertCell();
    let rowExt = row.insertCell();
    let rowEmail = row.insertCell();
    let rowDepartment = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let IdText = document.createTextNode(id);
    let NameText = document.createTextNode(name);
    let ExtText = document.createTextNode(ext);
    let EmailText = document.createTextNode(email);
    let DepartmentText = document.createTextNode(department);

    rowId.appendChild(IdText);
    rowName.appendChild(NameText);
    rowExt.appendChild(ExtText);
    rowEmail.appendChild(EmailText);
    rowDepartment.appendChild(DepartmentText);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right';
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    row.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    // document.getElementById('empCount').value ++;
    count.value ++;

})

// DELETE EMPLOYEE

table.addEventListener('click', (e) => {
    if (confirm(`Are you sure you want to delete this row?`)) {
        table.deleteRow(e.target.parentNode.rowIndex);
        // document.getElementById('empCount').value --;
        count.value --;
      }
})