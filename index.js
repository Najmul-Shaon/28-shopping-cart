
// phone item start

// for phone plus(+) icon 


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const phoneQuantityCount = document.getElementById('phone-quantity-count');
    const phoneQuantityCountString = phoneQuantityCount.value;
    phoneQuantityCountNumber = parseInt(phoneQuantityCountString);
    const newPhoneQuantityCount = phoneQuantityCountNumber + 1;
    phoneQuantityCount.value = newPhoneQuantityCount;
})

// for phone minus(-) icon 

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const phoneQuantityCount = document.getElementById('phone-quantity-count');
    const phoneQuantityCountString = phoneQuantityCount.value;
    const phoneQuantityCountNumber = parseInt(phoneQuantityCountString);

    if (phoneQuantityCountNumber > 1) {
        const newPhoneQuantityCount = phoneQuantityCountNumber - 1;
        phoneQuantityCount.value = newPhoneQuantityCount;
    }
    else {
        window.alert("You cann't buy a zero quantity item.");
    }
})



// phone item end



// case item start

// for + icon 

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const phoneQuantityCount = document.getElementById('case-quantity-count');
    const phoneQuantityCountString = phoneQuantityCount.value;
    phoneQuantityCountNumber = parseInt(phoneQuantityCountString);
    const newPhoneQuantityCount = phoneQuantityCountNumber + 1;
    phoneQuantityCount.value = newPhoneQuantityCount;
})

// for phone minus(-) icon 

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const phoneQuantityCount = document.getElementById('case-quantity-count');
    const phoneQuantityCountString = phoneQuantityCount.value;
    const phoneQuantityCountNumber = parseInt(phoneQuantityCountString);

    if (phoneQuantityCountNumber > 1) {
        const newPhoneQuantityCount = phoneQuantityCountNumber - 1;
        phoneQuantityCount.value = newPhoneQuantityCount;
    }
    else {
        window.alert("You cann't buy a zero quantity item.");
    }
})
