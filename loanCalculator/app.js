
document.querySelector('#loan-form').addEventListener('submit', calculateResults)

function calculateResults(e) {
    
    const amount = document.querySelector('#amount'),
          interest = document.querySelector('#interest'),
          years = document.querySelector('#years'),
          monthlyPayment = document.querySelector('#monthly-payment'),
          totalPayment = document.querySelector('#total-payment'),
          totalInterest = document.querySelector('#total-interest'),
          principal = parseFloat(amount.value),
          calculatedInterest = parseFloat(interest.value) / 100 / 12,
          calculatedPayments = parseFloat(years.value) * 12,
          x = Math.pow(1 + calculatedInterest, calculatedPayments),
          monthly = (principal*x*calculatedInterest)/(x-1);


          if(isFinite(monthly)) {
            monthlyPayment.value = monthly.toFixed(2);
            totalPayment.value = (monthly * calculatedPayments).toFixed(2);
            totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        
           
            document.getElementById('results').style.display = 'block';
        
            document.getElementById('loading').style.display = 'none';
        
          } else {
            showError('Please check your numbers');
          }


    e.preventDefault();
}
function showError(errText) {

    const errDiv = document.createElement('div');
    errDiv.className = 'alert alert-danger';
    errDiv.appendChild(document.createTextNode(errText));
    const heading = document.querySelector('.heading'),
    card = document.querySelector('.card');

    card.insertBefore(errDiv, heading)

    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);

}