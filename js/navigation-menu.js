const header = document.getElementById('header'),
      slider = document.getElementById('slider'),
      mainContent = document.getElementById('main-content'),
      buttonMap = document.getElementById('openMap'),
      map = document.getElementById('map'),
      homeButton = document.getElementById('home');


buttonMap.addEventListener('click', function(){
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'block';
})
homeButton.addEventListener('click', function(){
    header.style.display = 'flex';
    slider.style.display = 'block';
    mainContent.style.display = 'flex';
    map.style.display = 'none';
})