



const districtSelect = document.querySelector('.district'),
      roomsSelect = document.querySelector('.rooms'),
      typeSelect = document.querySelector('.type-of-building'),
      developerSelect = document.querySelector('.developer'),
      contentWrapper = document.querySelector('.content__wrapper'),
      blockContent = document.querySelector('.content');


// GET DISTRICT ROOMS TYPE DEVELOPER

var filtered;

districtSelect.addEventListener('change', ()=>{
    
    myFilter.district = districtSelect.value;
    filterItems();
    creatingContentItems()
    console.log(filtered)
})
roomsSelect.addEventListener('change', ()=>{
    
    myFilter.rooms = roomsSelect.value;
    filterItems();
    creatingContentItems()
    console.log(filtered)
})
typeSelect.addEventListener('change', ()=>{
    
    myFilter.type = typeSelect.value;
    filterItems();
    creatingContentItems()
    console.log(filtered)
})
developerSelect.addEventListener('change', ()=>{
    
    myFilter.developer = developerSelect.value;
    filterItems();
    creatingContentItems()
    console.log(filtered)
})

let myFilter = {
    district: 0,
    rooms: 0,
    type: 0,
    developer: 0,
};




let content = [
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},    
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},    
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},    
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},    
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},    
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},    
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},    
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "img_6.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
    {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "img_6.jpg", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
    {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
]

filtered = content;
function filterItems(){
    filtered = content.filter( item => Object.entries(myFilter)
    .filter( ([ field, value ]) => value !== 0 )
    .every( ([ field, value ]) => item[ field ] === value ));
}


const pagination = document.querySelector('.pagination');
let notesOnPage = 10;
let counterItems = Math.ceil(filtered.length/notesOnPage);
let items = [];

function creatingContentItems(){
    items = [];
    
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML="";
    let counterItems = Math.ceil(filtered.length/notesOnPage);
    for(let i  = 1; i<= counterItems; i++){
        let li = document.createElement('li');
        li.innerHTML = i;
        pagination.appendChild(li);
        items.push(li);
    }
    
    
    for(let item in items){
        items[item].addEventListener('click', function(){
            let pageNum = +this.innerHTML;
    
            let start = (pageNum - 1)*notesOnPage;
            let end = start + notesOnPage;
    
            let notes = filtered.slice(start, end);
            contentWrapper.innerHTML = '';
            
            for(let note of notes){
    
                let contentItem = document.createElement('div'),
                    itemImg = document.createElement('img'),
                    contentItemText = document.createElement('div'),
                    price = document.createElement('span'),
                    district = document.createElement('h3'),
                    hoverDescription = document.createElement('div');
                
                contentItem.classList.add('content__item');
                itemImg.src = "../img/" + note.img;
                contentItemText.classList.add('content__item__text');
                contentItem.appendChild(itemImg);
                price.classList.add('price');
                price.innerHTML = note.price;
                district.innerHTML = note.description;
                hoverDescription.classList.add('hover-description');
                hoverDescription.innerHTML = note.hoverdDescription;
                contentItemText.appendChild(price);
                contentItemText.appendChild(district);
                contentItemText.appendChild(hoverDescription);
                contentItem.appendChild(contentItemText);
    
                contentWrapper.appendChild(contentItem);
            }
        })
    }
}
creatingContentItems();
