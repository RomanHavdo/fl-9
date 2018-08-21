const login = prompt('Login');
let password;

if (login === '' || login === null) {
    alert('Canceled.')
}else {
    if (login.length < 4) {
        alert("I don't know any users having name length less than 4 symbols")
    }else if (login === 'User') {
        password = prompt('Password:');
        if (password === '' || password === null) {
            alert('Canceled.')
        }else if (password !== 'SuperUser') {
            alert('Wrong password');
        }else if (new Date().getHours() < 20) {
            alert('Good day!');
        }else {
            alert('Good evening!');
        }
    }else {
        alert('I don’t know you');
    }
}