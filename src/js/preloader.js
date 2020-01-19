document.body.onload = function(){
    setTimeout(() => {
        var preloader = document.getElementById('page-preloader')
        preloader.classList.toggle('done');
    }, 1000);
}


// const menuItems = Array.from(document.querySelectorAll('.navigation__item'));

// menuItems.forEach(item =>{
//     item.addEventListener('click', function(){
//         var preloader = document.getElementById('page-preloader')
//                 preloader.classList.remove('done');
//         setTimeout(() => {
//             preloader.classList.toggle('done');
//         }, 2000);
//     } )
// })
