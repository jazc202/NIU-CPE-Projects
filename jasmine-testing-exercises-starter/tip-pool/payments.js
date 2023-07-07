let billAmtInput = document.getElementById('billAmt');
let tipAmtInput = document.getElementById('tipAmt');
let paymentForm = document.getElementById('paymentForm');

let paymentTbody = document.querySelector('#paymentTable tbody');
let summaryTds = document.querySelectorAll('#summaryTable tbody tr td');

let allPayments = {};
let paymentId = 0;
paymentForm.addEventListener('submit', submitPaymentInfo);
/**
 * Add a curPayment object to allPayments, update html and reset input values
 *
 * @param {*} evt
 */
function submitPaymentInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event
  console.log('submitted payment info')

  let curPayment = curPaymentObject(billAmtInput.value, tipAmtInput.value)

  if (curPayment) { 
    updateAllPayments(curPayment);

    appendPaymentTable(curPayment); //adds a new row to the payment table
    updateServerTable(); //adds a new row to the server table
    updateSummary(); //adds a new row to the summary table
    resetInputs(billAmtInput);
    resetInputs(tipAmtInput)
  }
}


/**
 * creates the curPaymentObject
 *
 * @param {String} billAmt
 * @param {String} tipAmt
 * @return {*} 
 */
function curPaymentObject(billAmt, tipAmt) {
  if (billAmt === '' || tipAmt === '') return; //if either bill or tip input is empty, return undefined

  if (Number(billAmt) > 0 && Number(tipAmt) >= 0) {
    let curPayment = {
      billAmt: Number(billAmt),
      tipAmt: Number(tipAmt),
      tipPercent: calculateTipPercent(billAmt, tipAmt),
    }
    console.log(`curPaymentObject ${curPayment[billAmt]}`)
    return curPayment
  }
  else {
    return;
  }
}

/**
 * Adds the curPayment object to the allPayments object
 *
 * @param {Object} curPayment
 */
function updateAllPayments(curPayment) {
  console.log('updateAllPayments()')
  paymentId += 1
  allPayments[`payment${paymentId}`] = curPayment
  return Object.keys(curPayment).length
}

/**
 * Resets the value for the given input
 *
 */
function resetInputs(input) {
  console.log('resetInputs')
  input.value = ''
  return input.value;
}

/**
 * Create table row element and pass to appendTd with input value
 *
 * @param {Object} curPayment
 */
function appendPaymentTable(curPayment) {
  console.log('appendPaymentTable()')
  let newTr = document.createElement('tr');
  newTr.id = 'payment' + paymentId;

  appendTd(newTr, '$' + curPayment.billAmt);
  appendTd(newTr, '$' + curPayment.tipAmt);
  appendTd(newTr, curPayment.tipPercent + '%');
  appendDeleteBtn(newTr);

  paymentTbody.append(newTr);
  console.log(newTr);
  return newTr.children.length
}

/**
 * Create table row element and pass to appendTd with calculated sum of all payment
 *
 */
function updateSummary() {
  console.log('updateSummary()')
  let tipPercentAvg = calculateTipPercentAvg();
  updateSummaryTable(tipPercentAvg)
}

function calculateTipPercentAvg() {
  console.log('calculateTipPercentAvg')
  let paymentTotal = sumPaymentTotal('tipPercent');
  let numberOfPayments = Object.keys(allPayments).length;

  if (paymentTotal === 0 && numberOfPayments === 0) {
    let tipPercentAvg = 0; //if no payments have been made, tipPercentAvg is 0
    return tipPercentAvg

  } else {
    let tipPercentAvg = paymentTotal / Object.keys(allPayments).length; //
    return tipPercentAvg

  }
}

function updateSummaryTable(tipPercentAvg) {
  console.log('updateSummaryTable')
  summaryTds[0].innerHTML = '$' + sumPaymentTotal('billAmt');
  summaryTds[1].innerHTML = '$' + sumPaymentTotal('tipAmt');
  summaryTds[2].innerHTML =  Math.round(tipPercentAvg) + '%';
}