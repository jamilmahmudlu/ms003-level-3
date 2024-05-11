import { generateId } from "../helpers/idGenerator.js";
import { getAllSubjects, insertSubject, deleteSubject } from "../requests/insertSubject.js";

const tblSubjectBody = document.querySelector('#tblSubject tbody')
const btnSubjectSave = document.getElementById('btnSubjectSave')
const txtSubjectName = document.getElementById('txtSubjectName')

export const bindSubjects = async() => {
    const subjectsData = await getAllSubjects();
    createSubjectTable(subjectsData)
}

export const initalizeSubjects = async () => {
    addSubjectEvents()
    await bindSubjects()
}

const addSubjectEvents = () => {
    btnSubjectSave.addEventListener('click',  insertSubjectItem)
}

const insertSubjectItem = async () => {
    const allSubjects = await getAllSubjects();
    const name = txtSubjectName.value
    const id = generateId(allSubjects)

    const row = {
        id,
        name
    }

    await insertSubject(row)
    bindSubjects()
}

const deleteSubjectRow = async(e) => {
    const id = e.target.dataset.rowId;
    await deleteSubject(id)
    await bindSubjects()
}

const createSubjectTable = rows => {
    tblSubjectBody.innerHTML = ''
    rows.forEach(row=>{
        const tr = createRow(row)
        tblSubjectBody.appendChild(tr)
    })
}

const createRow = data => {
    let tr = document.createElement('tr');
    let tdEdit = document.createElement('td');
    let tdRemove = document.createElement('td');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');

    let iconEdit = document.createElement('i');
    iconEdit.className = 'fa-solid operation-icon fa-edit text-warning';
    // iconEdit.addEventListener('click', prepareSubjectUpdateAction);
    iconEdit.setAttribute('data-row-id', data.id);
    iconEdit.setAttribute('data-bs-toggle', 'modal');
    iconEdit.setAttribute('data-bs-target', '#subjectAddEditModal');

    let iconRemove = document.createElement('i');
    iconRemove.className = 'fa-solid operation-icon fa-trash-alt text-warning';
    iconRemove.addEventListener('click', deleteSubjectRow);
    iconRemove.setAttribute('data-row-id', data.id);


    tdEdit.appendChild(iconEdit);
    tdRemove.appendChild(iconRemove);


    tdId.textContent = data.id;
    tdName.textContent = data.name;

    tr.appendChild(tdEdit);
    tr.appendChild(tdRemove);
    tr.appendChild(tdId);
    tr.appendChild(tdName);

    return tr;

}