



// USERS data base
let users = [
    {login: 'Tugai', password: 'Kostya'},
]
// USER INFO
let logedUserInfo = {
    login: 'User',
    authorization: false,
}
// localStorage.setItem('logedUserInfo', JSON.stringify(logedUserInfo));

// REGISTRATION 
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

// data base of USERS
function bdUsers(){
    localStorage.setItem('users', JSON.stringify(users));
}
bdUsers();

// GET data base 'USERS'
function getBDusers(){
    return JSON.parse(localStorage.getItem('users'));
}

// LOGIN
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


// AUTHORIZATION USER
function authorizationUser(){
    localStorage.setItem("logedUserInfo", JSON.stringify(logedUserInfo));
    const auth = (JSON.parse(localStorage.getItem('logedUserInfo'))).authorization;
    const login = (JSON.parse(localStorage.getItem('logedUserInfo'))).login;
    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
        setTimeout(() => {
            dataForAuthUser(login, auth);

            var preloader = document.getElementById('page-preloader')
            preloader.classList.toggle('done');
        }, 3000);
}

// DATA FOR USER WHICH was loged in
function dataForAuthUser(login, auth){
    Array.from(document.querySelectorAll('.login')).forEach(item=>{
        item.style.display = 'none';
    });
    homePage();
    Array.from(document.querySelectorAll('.user')).forEach(item=>{
        item.innerHTML = `Hello, ${login}`;
        item.style.display = 'flex';
    })
    
    console.log(login)

}


window.addEventListener('load', function(){
    const auth = (JSON.parse(localStorage.getItem('logedUserInfo'))).authorization;
    const login = (JSON.parse(localStorage.getItem('logedUserInfo'))).login;
    if(auth === true){
        dataForAuthUser(login, auth);
    }
    else console.log('authorization onload:',false );
})