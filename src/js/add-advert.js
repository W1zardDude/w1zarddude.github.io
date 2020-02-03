function getAdvertDistrict(){
    return document.querySelector('.district-advert').value;
}
function getAdvertRooms(){
    return document.querySelector('.rooms-advert').value;
}
function getAdvertType(){
    return document.querySelector('.type-of-building-advert').value;
}
function getAdvertDeveloper(){
    return document.querySelector('.developer-advert').value;
}
function getAdvertPrice(){
    return document.querySelector('.price-advert').value;
}
function addNewAdvert(){
    
    let newItem = {district: getAdvertDistrict(), rooms: getAdvertRooms(), type: getAdvertType(), img: "jkFjord.jpg", developer: getAdvertDeveloper(), price: getAdvertPrice(), position: {lat: 50.438590, lng: 30.410427}};
    var i = 0;
    for(let key in newItem){
        if(newItem[key] === "noneSelected" || newItem[key] === ''){
            i++;
        }
    }
    if(i>0){
        alert('Select and complete all fields!')
    }
    else{
        content.push(newItem);
        userItems.push(newItem);
        filterItems();
        state.data = filterItems();
        document.querySelector('.district-advert').value = 'noneSelected';
        document.querySelector('.rooms-advert').value = 'noneSelected';
        document.querySelector('.type-of-building-advert').value = 'noneSelected';
        document.querySelector('.developer-advert').value = 'noneSelected';
        document.querySelector('.price-advert').value = '';
        alert('Item was added succsesfully :)')
    }
}
