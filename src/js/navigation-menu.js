const header = document.getElementById('header'),
      mainContent = document.getElementById('main-content'),
      services = document.querySelector('#services'),
      contentSelectedItem = document.querySelector('.content__selected-item'),
      filter = document.querySelector('.filter'),
      blockContent = document.querySelector('.content'),
      buttonMap = Array.from(document.querySelectorAll('.openMap')),
      map = document.getElementById('map'),
      homeButton = Array.from(document.querySelectorAll('.home')),
      buyButton = Array.from(document.querySelectorAll('.buy-catalog')),
      servicesButton = Array.from(document.querySelectorAll(".services")),
      navItem = Array.from(document.querySelectorAll('.navigation__item'));


const toggleMobileMenu = document.querySelector('#toggle'),
      mobLink = Array.from(document.querySelectorAll('.mobile-menu-link'));



mobLink.forEach(link =>{
    link.addEventListener('click', function(){
        toggle.checked = false;
    })
})
servicesButton.forEach(button =>{
    button.addEventListener('click', function(){
        header.style.display = 'flex';
        slider.style.display = 'none';
        mainContent.style.display = 'none';
        map.style.display = 'none';
        services.style.display = 'flex';
        document.querySelector('.map-selected-item').style.display = 'none';
    })
})

buyButton.forEach(button =>{
    button.addEventListener('click', function(){
        
        header.style.display = 'flex';
        slider.style.display = 'none';
        mainContent.style.display = 'flex';
        map.style.display = 'none';
        services.style.display = 'none';
        contentSelectedItem.style.display = 'none';
        filter.style.display = 'flex';
        blockContent.style.display = 'flex';
        document.querySelector('.map-selected-item').style.display = 'none';
    })
})

buttonMap.forEach(button =>{
    button.addEventListener('click', function(){
        header.style.display = 'flex';
        slider.style.display = 'none';
        mainContent.style.display = 'none';
        map.style.display = 'block';
        services.style.display = 'none';
        document.querySelector('.map-selected-item').style.display = 'none';
    })
})
homeButton.forEach(button => {
    button.addEventListener('click', function(){
        header.style.display = 'flex';
        slider.style.display = 'block';
        mainContent.style.display = 'none';
        map.style.display = 'none';
        services.style.display = 'none';
        document.querySelector('.map-selected-item').style.display = 'none';
    })
    
})


Array.from(document.querySelectorAll('.login')).forEach(item => {
    item.addEventListener('click', function(){
        slider.style.display = 'none';
        mainContent.style.display = 'none';
        map.style.display = 'none';
        services.style.display = 'none';
        document.querySelector('.map-selected-item').style.display = 'none';
        document.querySelector('.registration').style.display = 'flex';
    })
})