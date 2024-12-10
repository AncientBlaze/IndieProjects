document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.psw').value;
    const phone = document.querySelector('.phone').value;

    alert('Username: ' + username + '\nEmail: ' + email + '\nPassword: ' + password + '\nPhone: ' + phone);
});