





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
markers();

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
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000', position: {lat: 50.449101, lng: 30.490206}},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000',  position: {lat: 50.444286, lng: 30.497251}},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999',  position: {lat: 50.445267, lng: 30.489825}},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000',  position: {lat: 50.449283, lng: 30.480347}},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000',  position: {lat: 50.450565, lng: 30.467127}},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000',  position: {lat: 50.451821, lng: 30.467457}},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000',  position: {lat: 50.448713, lng: 30.467682}},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000',  position: {lat: 50.453729, lng: 30.470321}},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000',  position: {lat: 50.447367, lng: 30.465272}},
{district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.00$',  position: {lat: 50.447759, lng: 30.452735}},
{district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999', position: {lat: 50.444136, lng: 30.453257}},
{district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000',  position: {lat: 50.441045, lng: 30.427164}},   
{district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000',  position: {lat: 50.439163, lng: 30.420604}},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000',  position: {lat: 50.441312, lng: 30.417959}},   
{district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000', position: {lat: 50.438972, lng: 30.413018}},   
{district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000',  position: {lat: 50.438511, lng: 30.410427}},      
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
var state = {
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

        right = pages;
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
    contentWrapper.innerHTML = '';
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
              descriptionT = myList[i].district,
              hoverDescriptionT = myList[i].rooms;
              
          contentItem.classList.add('content__item');
          itemImg.src = "../../img/" + imgSrcT;
          contentItemText.classList.add('content__item__text');
          contentItem.appendChild(itemImg);
          priceText.classList.add('price');
          priceText.innerHTML = `${priceT}$`;
          district.innerHTML = `${descriptionT} district`;
          hoverDescription.classList.add('hover-description');
          hoverDescription.innerHTML = `Rooms: ${hoverDescriptionT}`;
          contentItemText.appendChild(priceText);
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
