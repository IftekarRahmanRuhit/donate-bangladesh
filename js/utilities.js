
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

function donationForFeni(){
    const input = getInputFieldById('donation-feni');
    const account = getInputTextById('balance-02');
    const output = input + account;
    return output;
}
function donationForQuotaMovement(){
    const input = getInputFieldById('donation-aid');
    const account = getInputTextById('balance-03');
    const output = input + account;
    console.log(input,account,output);
    return output;
}



function remainingBalance(id){
    const input = getInputFieldById(id);
    const account = getInputTextById('account-balance');
    const balance = account-input;
    return balance;
}

function addHistoryNoakhali(){
    const div = document.createElement('div');
    div.classList.add('bg-white','p-3','border','rounded-xl')
    div.innerHTML = `
    <p class=" font-semibold">${ getInputFieldById('donation-noakhali')} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
    <p class ="text-gray-500 mt-1">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    document.getElementById('history-list').prepend(div);
}

function addHistoryFeni(){
    const div = document.createElement('div');
    div.classList.add('bg-white','p-3','border','rounded-xl')
    div.innerHTML = `
    <p class=" font-semibold">${ getInputFieldById('donation-feni')} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
    <p class ="text-gray-500 mt-1">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    document.getElementById('history-list').prepend(div);
}

function addHistoryQuotaMovement(){
    const div = document.createElement('div');
    div.classList.add('bg-white','p-3','border','rounded-xl')
    div.innerHTML = `
    <p class=" font-semibold">${ getInputFieldById('donation-aid')} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class ="text-gray-500 mt-1">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} GMT +0600 (Bangladesh Standard Time)</p>
    `
    document.getElementById('history-list').prepend(div);
}

