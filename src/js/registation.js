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
    let regLogin = document.querySelector('#regLogin');
    let regPassword = document.querySelector('#regPassword');
    let repRegPassword = document.querySelector('#repRegPassword');
    const textError = document.querySelector('.text-for-error');

    if(regPassword.value.length > 0 && regLogin.value.length > 0){
        if(regPassword.value == repRegPassword.value){
            var n = 0;
            users.forEach(item=>{
                if(item.login == regLogin.value){
                    n++;
                }
            })    
            if(n==0){
                users.push({login: regLogin.value, password: regPassword.value});
                document.querySelector('.text-for-error_h1').style.backgroundColor = 'rgba(43, 207, 43, 0.726)';
                textError.style.opacity = '1';
                textError.style.visibility = 'visible';
                document.querySelector('.text-for-error_h1').innerHTML = 'Registration completed successfully';
                setTimeout(() => {
                textError.style.opacity = '0';
                textError.style.visibility = 'hidden';
                }, 2000);

                regLogin.value = '';
                regPassword.value = '';
                repRegPassword.value = '';
                regLogin.value = '';
                regPassword.value = '';
                repRegPassword.value = '';
                bdUsers();
            }
            else{
                document.querySelector('.text-for-error_h1').style.backgroundColor = 'rgba(250, 0, 0, 0.739)';
                textError.style.opacity = '1';
                textError.style.visibility = 'visible';
                document.querySelector('.text-for-error_h1').innerHTML = 'This login already exists';
                setTimeout(() => {
                textError.style.opacity = '0';
                textError.style.visibility = 'hidden';
                }, 2000);
                regLogin.value = '';
                regPassword.value = '';
                repRegPassword.value = '';
            }

             // for(let user of users){
            //     if(user.login != regLogin.value){
            //         console.log(user.login, regLogin.value)
            //         console.log('congrat');
                    
            //     continue;
            //     }
            //     if(user.login == regLogin.value){
                    
                    
            //     }
            //     else{
                    
            //         break;
            //     }
            // }
        }
        else{
           
            console.log('Error password');
        }
    }
    else{
        console.log('This field is empty');
        
    }
    
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
    Array.from(document.querySelectorAll('.profile-menu')).forEach(item=>{
        item.style.display = 'flex';
    })
    homePage();
    Array.from(document.querySelectorAll('.user')).forEach(item=>{
        item.innerHTML = `Hello, ${login}`;
        item.style.display = 'flex';
    })
    Array.from(document.querySelectorAll('.li-add-advert')).forEach(item => {
        item.classList.toggle('li-add-advert');
        item.title = '';
    })
    Array.from(document.querySelectorAll('.add-advert')).forEach(item => {
        item.classList.toggle('add-advert');
    })
    document.querySelector('.settings__user-hello').innerHTML = `Hello, ${login}`;
    console.log(login)

}


window.addEventListener('load', function(){
    const auth = (JSON.parse(localStorage.getItem('logedUserInfo'))).authorization;
    const login = (JSON.parse(localStorage.getItem('logedUserInfo'))).login;
    if(auth === true){
        dataForAuthUser(login, auth);
    }
    else{
        Array.from(document.querySelectorAll('.profile-menu')).forEach(item=>{
            item.style.display = 'none';
        })
        console.log('authorization onload:',false );
    } 
})