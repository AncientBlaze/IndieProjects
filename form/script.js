let username;
let email;
let password;
let phone;
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    username = document.querySelector('.username').value;
    email = document.querySelector('.email').value;
    password = document.querySelector('.psw').value;
    phone = document.querySelector('.phone').value;

    alert('Username: ' + username + '\nEmail: ' + email + '\nPassword: ' + password + '\nPhone: ' + phone);
    console.log('Username: ' + username + '\nEmail: ' + email + '\nPassword: ' + password + '\nPhone: ' + phone);
});

function togglePassword() {
    let input = document.querySelector(".password-input input");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

console.log(username, email, password, phone);
