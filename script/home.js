
document.getElementById('add-mny-btn').addEventListener('click', function (event) {
    event.preventDefault();

    console.log('btn clicked');

    const addMoney = document.getElementById('amount').value;
    const pinNumber = document.getElementById('pin').value;

    if (pinNumber === '1234') {
        if (addMoney <= 0) {
            alert('Enter a valid amount')

        } else {
            const availableBalance = document.getElementById('balance').innerText
            const updatedBalance = parseFloat(availableBalance) + parseFloat(addMoney);

            document.getElementById('balance').innerText = updatedBalance;
            alert('Add money successful!');
        }


    } else if (pinNumber === '') {
        alert('Enter your pin');

    }
    else {
        alert("Wrong pin number");
    }
})


document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();

    console.log('btn clicked');

    const cashoutMoney = document.getElementById('cashout-amount').value;
    const availableBale = document.getElementById('balance').innerText;

    const cashoutAmount = parseFloat(cashoutMoney);
    const availableAmount = parseFloat(availableBale);


    const pinNumberforCashout = document.getElementById('pin-number').value;

    if (pinNumberforCashout === '1234' && pinNumberforCashout != '') {
        const demoBalance = availableAmount - cashoutAmount;

        if (demoBalance <= 0) {
            alert('Not enough balance');
        } else if (cashoutAmount <= 0) {
            alert('Enter a valid amount');

        } else {
            const realbalance = availableAmount - cashoutAmount;
            document.getElementById('balance').innerText = realbalance;

            alert('Cashout successful!');
        }
    } else if (pinNumberforCashout === '') {
        alert('Enter your pin');

    }

    else {
        alert('Wrong Pin Number!');
    }

})