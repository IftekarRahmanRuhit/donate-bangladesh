
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





function remainingBalance(id){
    const input = getInputFieldById(id);
    const account = getInputTextById('account-balance');
    const balance = account-input;
    return balance;
}

function addHistory(id){
    const div = document.createElement('div');
    div.classList.add('bg-white','p-3','border','rounded-xl')
    div.innerHTML = `
    <p class=" font-semibold">${ getInputFieldById(id)} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p class ="text-gray-500">Date:${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
    `
    document.getElementById('history').prepend(div);
}

