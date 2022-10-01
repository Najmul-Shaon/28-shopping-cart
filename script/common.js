// function for get item total amount 

function getAmountById(elementId) {
    const amountElement = document.getElementById(elementId);
    const amountString = amountElement.innerText;
    const amountNumber = parseFloat(amountString);
    return amountNumber;
}


// Function set value by ID 

function setValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

//  function subtotal amount

function subtotalAmount() {
    const currentCaseTk = getAmountById('case-tk');
    const currentPhoneTk = getAmountById('phone-tk');

    const currentSubTotal = currentCaseTk + currentPhoneTk;
    setValueById('sub-total-amount', currentSubTotal);


    // tax calculate area

    const taxAmountString = (currentSubTotal * 0.05).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setValueById('tax-amount', taxAmount);

    // calculate total 

    const totalAmount = currentSubTotal + taxAmount;
    setValueById('grand-total-amount', totalAmount);

}

