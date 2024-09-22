
document.getElementById('donate-btn-1').addEventListener('click',function(){

    if(getInputFieldById('donation-noakhali') < 0 || isNaN(getInputFieldById('donation-noakhali')) ){
        document.getElementById('amount-error-1').classList.remove('hidden')
    }
    else{
        document.getElementById('balance-01').textContent = donationForNoakhali().toFixed(2);
        document.getElementById('account-balance').textContent = remainingBalance('donation-noakhali').toFixed(2);
        // alert('Thanks for your donation');
        document.getElementById('amount-error-1').classList.add('hidden');
        document.getElementById('my_modal_1').showModal();
         addHistoryNoakhali();

    }

})

document.getElementById('donate-btn-2').addEventListener('click',function(){

    if(getInputFieldById('donation-feni') < 0 || isNaN(getInputFieldById('donation-feni')) ){
        document.getElementById('amount-error-2').classList.remove('hidden');
    }
    else{
        document.getElementById('balance-02').textContent = donationForFeni().toFixed(2);
        document.getElementById('account-balance').textContent = remainingBalance('donation-feni').toFixed(2);
        // alert('Thanks for your donation');
        document.getElementById('amount-error-2').classList.add('hidden');
        document.getElementById('my_modal_1').showModal();

        addHistoryFeni();

    }

})

document.getElementById('donate-btn-3').addEventListener('click',function(){

    if(getInputFieldById('donation-aid') < 0 || isNaN(getInputFieldById('donation-aid')) ){
        document.getElementById('amount-error-3').classList.remove('hidden');
    }
    else{
        document.getElementById('balance-03').textContent = donationForQuotaMovement().toFixed(2);
        document.getElementById('account-balance').textContent = remainingBalance('donation-aid').toFixed(2);
        // alert('Thanks for your donation');
        document.getElementById('amount-error-3').classList.add('hidden');
        document.getElementById('my_modal_1').showModal();

        addHistoryQuotaMovement();

    }

})