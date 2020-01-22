





const districtSelect = document.querySelector('.district'),
roomsSelect = document.querySelector('.rooms'),
typeSelect = document.querySelector('.type-of-building'),
developerSelect = document.querySelector('.developer'),
contentWrapper = document.querySelector('.content__wrapper'),
blockContent = document.querySelector('.content'),
filterBlock = document.querySelector('.filter'),
contentSelected = document.querySelector('.content__selected-item');


// addEventLitener for select items to get #values and $filteItems() ant $CreateContentItems() on each 'change'

function dataChange(){
    contentWrapper.innerHTML = '';
    filterItems();
    state.data = filterItems();
    buildContent();
}

districtSelect.addEventListener('change', ()=>{

myFilter.district = districtSelect.value;
dataChange()

})
roomsSelect.addEventListener('change', ()=>{

myFilter.rooms = roomsSelect.value;
contentWrapper.innerHTML = '';
dataChange()

})
typeSelect.addEventListener('change', ()=>{

myFilter.type = typeSelect.value;
contentWrapper.innerHTML = '';
dataChange()

})
developerSelect.addEventListener('change', ()=>{

myFilter.developer = developerSelect.value;
contentWrapper.innerHTML = '';
dataChange()

})

// Object filter
let myFilter = {
district: "noneSelected",
rooms: "noneSelected",
type: "noneSelected",
developer: "noneSelected",
};



let contentLocalStorage = [
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   

]


// LocalStorage 'content'

localStorage.setItem('content', JSON.stringify(contentLocalStorage));
let content = JSON.parse(localStorage.getItem('content'));



const pagination = document.querySelector('.pagination');
// filtration by rooms, district, developer, type
function filterItems(){
return content.filter( item => Object.entries(myFilter)
.filter( ([ field, value ]) => value !== 'noneSelected' )
.every( ([ field, value ]) => item[ field ] === value ));
}






// settings for pagination
let state = {
    data: filterItems(),

    page: 1,
    items: 10,

    maxButtons: 5,
}
// Logic for pagination 
function createPagination(data, page, items){
  let start = (page - 1)* items;

  let end = start + items;
  
  let itemsData = data.slice(start, end);
  
  let pages = Math.ceil(data.length / items);
  
  return{
  	'data': itemsData,
    'pages': pages
  }
}
// Creating buttons for pagination
function pageButtons(pages){
    pagination.innerHTML = '';

    let left = (state.page - Math.floor(state.maxButtons / 2));
    let right = (state.page + Math.floor(state.maxButtons / 2));

    if(left < 1){
        left = 1;
        right = state.maxButtons;
    }

    if(right > pages){
        left = pages - (state.maxButtons - 1);

        right = pages
        if(left < 1){
            left = 1;
        }
    }


    for(var page = left; page <= right; page++){
            pagination.innerHTML += `<li value="${page}" id="${page}" class="pagination-item">${page}</li>`;
    }
    if(state.page != 1){
        pagination.innerHTML = `<li value="1" id="${page}" class="pagination-item">&#171; First page</li>` + pagination.innerHTML;
    }
    if(state.page != pages){
        pagination.innerHTML += `<li value="${pages}" id="${page}" class="pagination-item">Last page &#187;</li>`;
    }
    Array.from(document.querySelectorAll('.pagination-item')).forEach(item => {
        item.addEventListener('click', function(){
            contentWrapper.innerHTML = '';
    
            state.page = +(item.value);
    
            buildContent()
    })
    });
}

function buildContent(){

    let dataBuild = createPagination(state.data, state.page, state.items)

    let myList = dataBuild.data;
    
    for (let i in myList){
    let contentItem = document.createElement('div'),
              itemImg = document.createElement('img'),
              contentItemText = document.createElement('div'),
              priceText = document.createElement('span'),
              district = document.createElement('h3'),
              hoverDescription = document.createElement('div');
          let imgSrcT = myList[i].img,
              priceT = myList[i].price,
              descriptionT = myList[i].description,
              hoverDescriptionT = myList[i].hoverdDescription;
              
          contentItem.classList.add('content__item');
          itemImg.src = "../../img/" + imgSrcT;
          contentItemText.classList.add('content__item__text');
          contentItem.appendChild(itemImg);
          priceText.classList.add('price');
          priceText.innerHTML = priceT;
          district.innerHTML = descriptionT;
          hoverDescription.classList.add('hover-description');
          hoverDescription.innerHTML = hoverDescriptionT;
          contentItemText.appendChild(priceText);
          contentItemText.appendChild(district);
          contentItemText.appendChild(hoverDescription);
          contentItem.appendChild(contentItemText);
        //   console.log(contentItem)
        console.log(priceT)
          contentItem.addEventListener('click', function(){
                blockContent.style.display = 'none';
                contentSelected.style.display = 'flex';
                filterBlock.style.display = 'none';
                let info__text = document.querySelector('.info__text'),
                    info__district = document.querySelector('.info__district'),
                    info__description = document.querySelector('.info__description'),
                    info__price = document.querySelector('.info__price'),
                    buy = document.querySelector('.buy'),
                    imgSelected = document.querySelector('.img-selected-item');

                    imgSelected.src = "../../img/" + imgSrcT;
                    info__district.innerHTML = descriptionT;
                    info__description.innerHTML = hoverDescriptionT;
                    info__price.innerHTML = priceT;
                    
        });
          contentWrapper.appendChild(contentItem);
    }
    pageButtons(dataBuild.pages)
}
buildContent();




