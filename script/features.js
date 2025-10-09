document.getElementById('addmny-btn-tgl').addEventListener('click', function(){
    document.getElementById('cashout-form').style.display = 'none';
    document.getElementById('add-mny-form').style.display = 'flex';
});

document.getElementById('cashout-btn-tgl').addEventListener('click', function(){
    document.getElementById('add-mny-form').style.display = 'none';
    document.getElementById('cashout-form').style.display = 'flex';
});
