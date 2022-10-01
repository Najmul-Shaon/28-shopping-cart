// function for get item total amount 

function getAmountById(elementId) {
    const amountElement = document.getElementById(elementId);
    const amountString = amountElement.innerText;
    const amountNumber = parseFloat(amountString);
    return amountNumber;
}


//  function subtotal amount

function subtotalAmount() {
    const currentCaseTk = getAmountById('case-tk');
    const currentPhoneTk = getAmountById('phone-tk');

    const currentSubTotal = currentCaseTk + currentPhoneTk;

    const subTotalElement = document.getElementById('sub-total-amount');
    subTotalElement.innerText = currentSubTotal;
}