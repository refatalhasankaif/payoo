// add event listener

document.getElementById('login-btn').addEventListener('click', function (event) {

    // prevent defult reload
    event.preventDefault();
    // console.log('login btn clicked');

    // get the phone number
    const phoneNumber = document.getElementById('mobile').value;
    // console.log(phoneNumber);

    // get the pin number
    const pinNumber = document.getElementById('pin').value;
    // console.log(pinNumber);

    if (phoneNumber === '1234' && pinNumber === '1234') {
        window.location.href = 'https://refatalhasan.github.io/payoo/pages/home.html';
        // window.location.href = '../pages/home.html'
    }
    else {
        alert('Login failed, wrong phone or pin number');
    }
})
