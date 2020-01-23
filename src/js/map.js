

function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.451369, lng: 30.465131},
        zoom: 14,
    });
    document.querySelector('#dictrictMap').addEventListener('change', ()=>{
        
      mapFilter.district = document.querySelector('#dictrictMap').value;
      filteredContentMap();
      createMarkers();
    })
    let mapFilter = {
      district: 'noneSelected',
    }
    
    function filteredContentMap(){
      return content.filter( item => Object.entries(mapFilter)
      .filter( ([ field, value ]) => value !== 'noneSelected' )
      .every( ([ field, value ]) => item[ field ] === value ));
    }
    
    function createMarkers(){
      for(let value of filteredContentMap()){
        
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
    }
    createMarkers();
  
    
      
    

    


    

    var info = new google.maps.InfoWindow({
        content: '<h3>This is that</h3>',
    });
    map.addListener('click', function(){
      document.querySelector('.map-selected-item').style.display = 'none';
    })
}
