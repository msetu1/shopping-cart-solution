function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubtotal() {
    // calculate total 
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubtotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubtotal);

    // calculate text 
    const taxAmountString = (currentSubtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    const finalAmount = currentSubtotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}