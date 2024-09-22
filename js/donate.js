
document.getElementById('donate-btn-1').addEventListener('click',function(){
    document.getElementById('balance-01').textContent = donationForNoakhali().toFixed(2);
    document.getElementById('account-balance').textContent = remainingBalanceNoakhali().toFixed(2);
    
})