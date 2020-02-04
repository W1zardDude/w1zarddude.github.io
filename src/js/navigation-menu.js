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
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';

    


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
    document.querySelector('.registration').style.display = 'none';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';



}

function Contacts(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'block';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';


}

function mapPage(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'block';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';


}

function homePage(){
    header.style.display = 'flex';
    slider.style.display = 'block';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';


}

function loginPage(){
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'flex';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';


}
function onlinePreoder(){
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'flex';
}
// USER actions

function exit(){
    const user = JSON.parse(localStorage.getItem('logedUserInfo'));
    user.authorization = 'false';
    user.login = 'none';
    localStorage.setItem('logedUserInfo', JSON.stringify(user));
    document.location.reload(true);
}

function addAdvert(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'flex';
    document.querySelector(".settings").style.display = 'none';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';


    

}
function settings(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
    document.querySelector('.add-advert-block').style.display = 'none';
    document.querySelector(".settings").style.display = 'flex';
    document.querySelector('.contacts-block').style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.online-pre-order').style.display = 'none';


}

