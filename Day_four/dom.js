
  // Interest Calculator
  
  let loanAmount = document.getElementById('loan-amount');
  let interest = document.getElementById('interest');
  let years = document.getElementById('years');
  let output = document.getElementById('output');
  
  function calculateLoan() {
    if (!isValid()) {
      alert('Fill in all the values');
      return;
    }
    // console.log(loanAmount.value);
    // console.log(interest.value);
    // console.log(years.value);
  
    let loan = loanAmount.value;
    let interestRate = interest.value;
    let timeToRepay = years.value;
  
    const total = loan * Math.pow(1 + interestRate / 100, timeToRepay);
  
    output.innerHTML = `You will pay back $ ${total.toFixed(
      2
    )} over ${timeToRepay} years.`;
    resetForm();
  }
  
  function isValid() {
    return loanAmount.value != '' && interest.value != '' && years.value != '';
  }
  
  function resetForm() {
    loanAmount.value = '';
    interest.value = '';
    years.value = '';
  }