function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    inputField.value = '';
    return value;
}

function getUpdateTotal(fieldID, amount) {
    const previousTotal = getInnerText(fieldID)
    const updateTotal = previousTotal + amount;
    document.getElementById(fieldID).innerText = updateTotal;
}


function getUpdateBalance(amount, isAdding) {

    const previousBalance = getInnerText('total-balance')
    let updateBalance;
    if (isAdding == true) {
        updateBalance = previousBalance + amount;
    }
    if (isAdding == false) {
        updateBalance = previousBalance - amount;
    }
    document.getElementById('total-balance').innerText = updateBalance;
}

/// Function For Get innertext of All value
function getInnerText(inputID) {
    const getProperty = document.getElementById(inputID);
    const propertyText = getProperty.innerText;
    const value = parseFloat(propertyText);
    return value;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    const amount = getInputValue('deposit-input')
    if (amount > 0) {
        getUpdateTotal('total-deposit', amount)
        getUpdateBalance(amount, true)
    }

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const balanceTotal = document.getElementById('total-balance').innerText
    const amount = getInputValue('withdraw-input');
    if (amount > 0 && balanceTotal > amount) {
        getUpdateTotal('total-draw', amount);
        getUpdateBalance(amount, false);
    }
})