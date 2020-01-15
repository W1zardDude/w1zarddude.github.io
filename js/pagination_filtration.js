



const districtSelect = document.querySelector('.district'),
      roomsSelect = document.querySelector('.rooms'),
      typeSelect = document.querySelector('.type-of-building'),
      developerSelect = document.querySelector('.developer'),
      contentWrapper = document.querySelector('.content__wrapper'),
      blockContent = document.querySelector('.content');


// addEventLitener for select items to get #values and $filteItems() ant $CreateContentItems() on each 'change'


districtSelect.addEventListener('change', ()=>{
    
    myFilter.district = districtSelect.value;
    filterItems();
    creatingContentItems()
    
})
roomsSelect.addEventListener('change', ()=>{
    
    myFilter.rooms = roomsSelect.value;
    filterItems();
    creatingContentItems()
    
})
typeSelect.addEventListener('change', ()=>{
    
    myFilter.type = typeSelect.value;
    filterItems();
    creatingContentItems()
    
})
developerSelect.addEventListener('change', ()=>{
    
    myFilter.developer = developerSelect.value;
    filterItems();
    creatingContentItems()
    
})

// Object filter
let myFilter = {
    district: "noneSelected",
    rooms: "noneSelected",
    type: "noneSelected",
    developer: "noneSelected",
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

// filtration by rooms, district, developer, type
function filterItems(){
    return content.filter( item => Object.entries(myFilter)
    .filter( ([ field, value ]) => value !== 'noneSelected' )
    .every( ([ field, value ]) => item[ field ] === value ));
}



function showThisItem(){
   console.log(1)
}

// Pagination
function creatingContentItems(){
    const pagination = document.querySelector('.pagination');
    let items = [];
    let notesOnPage = 10;
    pagination.innerHTML="";
    let counterItems = Math.ceil(filterItems().length/notesOnPage);
    for(let i  = 1; i<= counterItems; i++){
        let li = document.createElement('li');
        li.innerHTML = i;
        li.id = i;
        li.classList.add('pagination-item');
        pagination.appendChild(li);
        items.push(li);
    }
    // History
    let paginationItems = Array.from(document.querySelectorAll('.pagination-item'));
    
    function selectItem(id){
        paginationItems.forEach(item =>{
            item.classList.toggle('selected', item.id === id);
        })
    }

    paginationItems.forEach(item => {
        let id = item.id;
        item.addEventListener('click', e =>{
            history.pushState({id}, `Selected: ${id}`, `pagination-page=${id}`);
            selectItem(id)
        })
    })

    window.addEventListener('popstate', e  => {
        selectItem(e.state.id)
    })




    contentWrapper.innerHTML = '';
    firstElements();
    for(let item in items){
        items[item].addEventListener('click', function(){
            let pageNum = +this.innerHTML;
            contentWrapper.innerHTML = '';
            let start = (pageNum - 1)*notesOnPage;
            let end = start + notesOnPage;
    
            let notes = filterItems().slice(start, end);
            
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
                contentItem.addEventListener('click', showThisItem);
                contentWrapper.appendChild(contentItem);
            }
        })
    }
}
creatingContentItems();

// first 10 element onload web page
function firstElements(){

    let notes = filterItems().slice(0, 10);
            
            
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
                contentItem.addEventListener('click', showThisItem);
                contentWrapper.appendChild(contentItem);
            }
}


history.replaceState({id: null}, 'Default state', `./`)