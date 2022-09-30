// cart increase/decrease function 

function updatePhoneCart(isIncrease) {
    const phoneQuantityCount = document.getElementById('phone-quantity-count');
    const phoneQuantityCountString = phoneQuantityCount.value;
    const phoneQuantityCountNumber = parseInt(phoneQuantityCountString);
    let newPhoneQuantityCount;

    if (isIncrease === true) {
        newPhoneQuantityCount = phoneQuantityCountNumber + 1;
        phoneQuantityCount.value = newPhoneQuantityCount;
    }

    else {
        if (phoneQuantityCountNumber > 1) {
            newPhoneQuantityCount = phoneQuantityCountNumber - 1;
            phoneQuantityCount.value = newPhoneQuantityCount;
        }
        else {
            window.alert("You cann't buy a zero quantity item.");
        }
    }
    return newPhoneQuantityCount;

}

// price increase/decrease function 

function updatePhonePrice(newPhoneQuantityCount) {
    const totalPhonePrice = newPhoneQuantityCount * 1299;
    const phoneTkElement = document.getElementById('phone-tk');
    phoneTkElement.innerText = totalPhonePrice;

}

// phone item start


// for phone plus(+) icon 

document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneQuantityCount = updatePhoneCart(true);
    updatePhonePrice(newPhoneQuantityCount);

    //              function use na kore code evabeo kora jay, tate code repeation bare. Ebong dekhteo sundor lage na

    //     const phoneQuantityCount = document.getElementById('phone-quantity-count');
    //     const phoneQuantityCountString = phoneQuantityCount.value;
    //     phoneQuantityCountNumber = parseInt(phoneQuantityCountString);
    //     const newPhoneQuantityCount = phoneQuantityCountNumber + 1;
    //     phoneQuantityCount.value = newPhoneQuantityCount;
})

// for phone minus(-) icon 

document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const newPhoneQuantityCount = updatePhoneCart(false);
    updatePhonePrice(newPhoneQuantityCount);

    //              eta hocce regular process. too much lenghty. 

    // const phoneQuantityCount = document.getElementById('phone-quantity-count');
    // const phoneQuantityCountString = phoneQuantityCount.value;
    // const phoneQuantityCountNumber = parseInt(phoneQuantityCountString);

    // // if (phoneQuantityCountNumber > 1) {
    // const newPhoneQuantityCount = phoneQuantityCountNumber - 1;
    // phoneQuantityCount.value = newPhoneQuantityCount;
    // }
    // else {
    // window.alert("You cann't buy a zero quantity item.");
    // }
})

// phone item end