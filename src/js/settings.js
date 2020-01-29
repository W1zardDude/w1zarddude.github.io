function changeLogin(){
    let user = JSON.parse(localStorage.getItem('logedUserInfo'));
    let newLogin = document.querySelector('#change-login').value;
    user.login = newLogin;
    newLogin.value = '';

    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
    localStorage.setItem('logedUserInfo', JSON.stringify(user));
    setTimeout(() => {
        dataForAuthUser(newLogin);

        var preloader = document.getElementById('page-preloader')
        preloader.classList.toggle('done');
    }, 3000);
}
function changePassword(){

}