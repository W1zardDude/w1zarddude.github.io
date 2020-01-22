function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.451369, lng: 30.465131},
        zoom: 14,
    });
    
    
    

    for(let value of content){
      new google.maps.Marker({
        map: map,
        position: value.position, 
        title: value.district,
        
      }).addListener('click', function(){
              
          
              document.querySelector('.map__img').src = 'img/' + value.img;
              document.querySelector('.map__district').innerHTML = value.description;
              document.querySelector('.map__description').innerHTML = value.hoverdDescription;
              document.querySelector('.map__price').innerHTML = value.price;


              document.querySelector('.map-selected-item').style.display = 'flex';

      })
    }


    

    var info = new google.maps.InfoWindow({
        content: '<h3>This is that</h3>',
    });
    map.addListener('click', function(){
      document.querySelector('.map-selected-item').style.display = 'none';
    })
}
