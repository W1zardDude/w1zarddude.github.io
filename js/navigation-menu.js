const header = document.getElementById('header'),
      slider = document.getElementById('slider'),
      mainContent = document.getElementById('main-content'),
      buttonMap = Array.from(document.querySelectorAll('.openMap')),
      map = document.getElementById('map'),
      homeButton = Array.from(document.querySelectorAll('.home'));


const toggleMobileMenu = document.querySelector('#toggle'),
      mobLink = Array.from(document.querySelectorAll('.mobile-menu-link'));

mobLink.forEach(link =>{
    link.addEventListener('click', function(){
        toggle.checked = false;
    })
})


buttonMap.forEach(button =>{
    button.addEventListener('click', function(){
        header.style.display = 'flex';
        slider.style.display = 'none';
        mainContent.style.display = 'none';
        map.style.display = 'block';
    })
})
homeButton.forEach(button => {
    button.addEventListener('click', function(){
        header.style.display = 'flex';
        slider.style.display = 'block';
        mainContent.style.display = 'none';
        map.style.display = 'none';
    })
    
})


