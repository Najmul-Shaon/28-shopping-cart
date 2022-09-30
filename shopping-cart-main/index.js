
// for phone plus icon 


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // console.log('worked');
    const phoneQuantityCount = document.getElementById('phone-quantity-count');
    // console.log(phoneQuantityCount.value);
    const phoneQuantityCountString = phoneQuantityCount.value;
    phoneQuantityCountNumber = parseInt(phoneQuantityCountString);

    // console.log(phoneQuantityCountNumber);
    // console.log(typeof phoneQuantityCountNumber);

    const newPhoneQuantityCount = phoneQuantityCountNumber + 1;
    phoneQuantityCount.value = newPhoneQuantityCount;
})