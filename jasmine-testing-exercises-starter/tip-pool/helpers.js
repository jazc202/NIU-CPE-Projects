
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  
  let total = 0; //total is 0 by default

  for (let key in allPayments) {  //for each key in the allPayments object
    let payment = allPayments[key]; //set payment equal to the object in the key

    total += Number(payment[type]); //add the value of the payment type to total
  }
  console.log(`sumPaymentTotal ${type} = ${total}`)
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  console.log('calculateTipPercent')
  return Math.round(100 / (billAmt / tipAmt));
}

//creates a td element, sets the inner text to the given value, and appends it to the given tr.  is called by appendpaymenttable in payments.js

function appendTd(tr, value) { 
  console.log('appendTd')
  let newTd = document.createElement('td');
  newTd.innerText = value;
  tr.append(newTd);
  return tr.id
}

function appendDeleteBtn(tr, id) {
  let deleteTd = document.createElement('td');
  deleteTd.innerText = 'X';
  deleteTd.id = `delete${tr.id}`;
  tr.append(deleteTd)
  return tr.id
}

let table = document.getElementsByTagName('tbody');

for (let r of table) {
  r.addEventListener('click', function(event) {
    let clickedOn = event.target
    let rowClicked = clickedOn.parentElement

    deleteServerRow(rowClicked.id);
  });
  
}

function deleteServerRow(tr) {
  let rowToDelete = document.getElementById(tr)
  rowToDelete.remove()
  // return rowToDelete
}

