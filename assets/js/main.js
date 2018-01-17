let inputName = document.querySelector('#input-name')
let inputAddress = document.querySelector('#input-address')
let inputNumber = document.querySelector('#input-number')

let btnAdd = document.querySelector('#btn-add');
let btnRemove = document.querySelector('#btn-remove');
let tableContacts = document.querySelector('#contacts-list')

let contacts = []

let name
let address
let number

function addContact() {
  let nameA = inputName.value
  let addressA = inputAddress.value
  let numberA = inputNumber.value

  contacts.push({
    'name': nameA,
    'address': addressA,
    'number': numberA
  })
  name = nameA
  address = addressA
  number = numberA
  console.log(contacts);
}

function addRow() {
  addContact()
  let row = tableContacts.insertRow(2)
  let cellName = row.insertCell(0)
  let cellAddress = row.insertCell(1)
  let cellNumber = row.insertCell(2)

  cellName.innerHTML = name
  cellAddress.innerHTML = address
  cellNumber.innerHTML = number

}

function deleteOneContact() {
  // LOGIC HERE
}

btnAdd.addEventListener('click', addRow)