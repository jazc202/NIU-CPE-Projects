window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.getElementById('loan-amount');
  let loanYears = document.getElementById('loan-years');
  let loanRate = document.getElementById('loan-rate')

  loanAmount.value = 0
  loanYears.value = 0
  loanRate.value = 0

  let form = document.getElementById("calc-form");

  
  form.addEventListener('change', function() {
    let vals = {
      amount: loanAmount.value, 
      years: loanYears.value, 
      rate: loanRate.value
    }
  
    if (loanAmount.value > 0 && loanYears.value > 0 && loanRate.value > 0) {
      let monthly = calculateMonthlyPayment(vals)
      updateMonthly(monthly)
    }
    
  })
  
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let princ = values.amount
  let interest = values.rate /100
  let payments = values.years * 12
  
  let dividend = (princ * interest)
  let divisor = 1-(1+interest) ** -payments

  let monthlyPayment = String(dividend/divisor)
  let endPosition = monthlyPayment.indexOf('.') + 3
  let output = `$${monthlyPayment.slice(0, endPosition)}`
  return output;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyUI = document.getElementById('monthly-payment')
  monthlyUI.innerText = monthly
}
