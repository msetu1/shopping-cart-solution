function updatePhoneNumber(isIncrease) {
    const phoneNumberFiled = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newIncrease;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberFiled.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhonePrice = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubtotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhonePrice = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

    calculateSubtotal();
})