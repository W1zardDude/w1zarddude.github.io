

const districtSelect = document.querySelector('.district'),
roomsSelect = document.querySelector('.rooms'),
typeSelect = document.querySelector('.type-of-building'),
developerSelect = document.querySelector('.developer'),
contentWrapper = document.querySelector('.content__wrapper'),
blockContent = document.querySelector('.content'),
filterBlock = document.querySelector('.filter'),
contentSelected = document.querySelector('.content__selected-item');


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





// Pagination
function creatingContentItems(){

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
          itemImg.src = "../../img/" + note.img;
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

                    imgSelected.src = "../img/" + note.img;
                    info__district.innerHTML = note.description;
                    info__description.innerHTML = note.hoverdDescription;
                    info__price.innerHTML = note.price;
                    console.log(1)
        });
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

                    imgSelected.src = "../img/" + note.img;
                    info__district.innerHTML = note.description;
                    info__description.innerHTML = note.hoverdDescription;
                    info__price.innerHTML = note.price;
                    
            });
            contentWrapper.appendChild(contentItem);
      }
}





