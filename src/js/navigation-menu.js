const header = document.getElementById('header'),
      mainContent = document.getElementById('main-content'),
      services = document.querySelector('#services'),
      contentSelectedItem = document.querySelector('.content__selected-item'),
      filter = document.querySelector('.filter'),
      blockContent = document.querySelector('.content'),
      map = document.getElementById('map');
    //   slider = document.querySelector('.slider');
      
const toggleMobileMenu = document.querySelector('#toggle'),
      mobLink = Array.from(document.querySelectorAll('.mobile-menu-link'));

mobLink.forEach(link =>{
    link.addEventListener('click', function(){
        toggle.checked = false;
    })
})

function servicePage(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'flex';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';

}

function buyPage(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'flex';
    map.style.display = 'none';
    services.style.display = 'none';
    contentSelectedItem.style.display = 'none';
    filter.style.display = 'flex';
    blockContent.style.display = 'flex';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';

}

function mapPage(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'block';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';

}

function homePage(){
    header.style.display = 'flex';
    slider.style.display = 'block';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';

}

function loginPage(){
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'flex';
}