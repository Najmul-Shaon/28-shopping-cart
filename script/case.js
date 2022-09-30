// cart increase/decrease function 

function updateCaseCart(isIncrease) {
    const caseQuantityCount = document.getElementById('case-quantity-count');
    const caseQuantityCountString = caseQuantityCount.value;
    const caseQuantityCountNumber = parseInt(caseQuantityCountString);
    let newcaseQuantityCount;

    if (isIncrease === true) {
        newcaseQuantityCount = caseQuantityCountNumber + 1;
        caseQuantityCount.value = newcaseQuantityCount;
    }

    else {
        if (caseQuantityCountNumber > 1) {
            newcaseQuantityCount = caseQuantityCountNumber - 1;
            caseQuantityCount.value = newcaseQuantityCount;
        }
        else {
            window.alert("You cann't buy a zero quantity item.");
        }
    }
    return newcaseQuantityCount;

}

// price increase/decrease function 

function updateCasePrice(newcaseQuantityCount) {
    if (newcaseQuantityCount > 0) {
        const totalCasePrice = newcaseQuantityCount * 59;
        const caseTkElement = document.getElementById('case-tk');
        caseTkElement.innerText = totalCasePrice;
    }
}

// case item start


// for case plus(+) icon 

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newcaseQuantityCount = updateCaseCart(true);
    updateCasePrice(newcaseQuantityCount);
})

// for phone minus(-) icon 

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newcaseQuantityCount = updateCaseCart(false);
    updateCasePrice(newcaseQuantityCount);
})