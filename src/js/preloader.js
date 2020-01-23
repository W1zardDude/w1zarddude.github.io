document.body.onload = function(){
    setTimeout(() => {
        var preloader = document.getElementById('page-preloader')
        preloader.classList.toggle('done');
    }, 1000);
}


