function changeLogin(){
    let users = JSON.parse(localStorage.getItem('users'));
    let user = JSON.parse(localStorage.getItem('logedUserInfo'));
    let newLogin = document.querySelector('#change-login').value;

    if(newLogin.length > 0){
    //     for(let i = 0; i < users.length; i++){
    //         if(users[i].login != newLogin){
    //             if(users[i].login = user.login){
            
    //                 users[i].login = newLogin;
                    user.login = newLogin;
                    
    
                    var preloader = document.getElementById('page-preloader');
                    preloader.classList.toggle('done');
                    localStorage.setItem('logedUserInfo', JSON.stringify(user));
                    setTimeout(() => {
                        dataForAuthUser(user.login);
    
                        var preloader = document.getElementById('page-preloader')
                        preloader.classList.toggle('done');
                    }, 3000);
    //             }
    //         }
           
    //     }
    }
}
function changePassword(){
    
    let users = JSON.parse(localStorage.getItem('users'));
    let user = JSON.parse(localStorage.getItem('logedUserInfo'));
    let newPassword = document.querySelector('#change-password').value;

    if(newPassword.length > 0){
        

        // for(let i = 0; i < users.length; i++){
        //     if(users[i].login = user.login){
        //         users[i].password = newPassword;
        
                user.password = newPassword;
                var preloader = document.getElementById('page-preloader');
                preloader.classList.toggle('done');
                localStorage.setItem('logedUserInfo', JSON.stringify(user));
                setTimeout(() => {
                    dataForAuthUser(user.login, user.authorization, user.password);

                    var preloader = document.getElementById('page-preloader')
                    preloader.classList.toggle('done');
            }, 3000);
            
        //     }
        // }
        
    }

    
}