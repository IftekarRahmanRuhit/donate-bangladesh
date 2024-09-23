
document.getElementById('history').addEventListener('click',function(){
    document.getElementById('history').classList.add('bg-[#B4F461]');
    document.getElementById('donation').classList.remove('bg-[#B4F461]');
    document.getElementById('donation').classList.add('bg-slate-100');
    
    document.getElementById('donation-sections').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
 
})

document.getElementById('donation').addEventListener('click',function(){
    document.getElementById('donation').classList.add('bg-[#B4F461]');
    document.getElementById('history').classList.remove('bg-[#B4F461]');
    document.getElementById('history').classList.add('bg-slate-100');
    
    document.getElementById('donation-sections').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-sections').classList.remove('hidden');
 
})

