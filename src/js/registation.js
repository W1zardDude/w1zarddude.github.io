const loginButton = Array.from(document.querySelectorAll('.login'));

function dataForAuthUser(){
    localStorage.setItem('logedUserInfo', JSON.stringify(logedUserInfo));
    let auth = (JSON.parse(localStorage.getItem('logedUserInfo'))).authorization;
    console.log(auth)
}
let users = [
    {login: 'Tugai', password: 'Kostya'},
]

function registerNewUser(){
    let regLogin = document.querySelector('#regLogin').value;
    let regPassword = document.querySelector('#regPassword').value;
    let repRegPassword = document.querySelector('#repRegPassword').value;

    if(regPassword.length > 0 && regLogin.length > 0){
        if(regPassword != repRegPassword){
            console.log('Error password');
        }
        else{
            console.log('congrat');
            users.push({login: regLogin, password: regPassword});
            bdUsers();
        }
    }
    else{
        console.log('This field is empty');
        
    }
    console.log(users)
}
function bdUsers(){
    localStorage.setItem('users', JSON.stringify(users));
}
bdUsers();

function getBDusers(){
    return JSON.parse(localStorage.getItem('users'));
}

function logInSystem(){
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;

    if(login.length > 0 && password.length > 0){
        for(let user of getBDusers()){
            if(user.login == login && user.password == password){
                console.log('Authorization...');
                logedUserInfo.login = login;
                logedUserInfo.authorization = true;
                authorizationUser();
                
                break;
            }
            else{
                console.log('Error authorization');
            }
        }
    }
    else{
        console.log('Fields are empty');
    }
}
let logedUserInfo = {
    login: 'User',
    authorization: false,
}
function authorizationUser(){
    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
    dataForAuthUser();
        setTimeout(() => {
            var preloader = document.getElementById('page-preloader')
            preloader.classList.toggle('done');
        }, 3000);
}