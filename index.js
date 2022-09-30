
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
    // console.log('minus worked')
    const phoneQuantityCount = document.getElementById('phone-quantity-count');
    const phoneQuantityCountString = phoneQuantityCount.value;
    phoneQuantityCountNumber = parseInt(phoneQuantityCountString);

    if (phoneQuantityCountNumber > 1) {
        const newPhoneQuantityCount = phoneQuantityCountNumber - 1;
        phoneQuantityCount.value = newPhoneQuantityCount;
        console.log('worked');
    }
    else
        window.alert("You cann't buy a zero quantity item.");

})