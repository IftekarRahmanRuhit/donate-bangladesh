
function getInputFieldById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
function getInputTextById(id){
    const inputValue = parseFloat(document.getElementById(id).textContent);
    return inputValue;
}

function donationForNoakhali(){
    const input = getInputFieldById('donation-noakhali');
    const account = getInputTextById('balance-01');
    const output = input + account;
    return output
}

function remainingBalanceNoakhali(){
    const input = getInputFieldById('donation-noakhali');
    const account = getInputTextById('account-balance');
    const balance = account-input;
    return balance;
}