"use strict";
// Slider
    var liSlider = document.querySelectorAll('.slide');
    var id = 0;

    function next() {
    if (id >= 2) {
        liSlider[id].style.zIndex = '1';
        liSlider[0].style.zIndex = '100';
        liSlider[id].style.opacity = "0";
        liSlider[0].style.opacity = "1";
        id = 0;
    } else {
        liSlider[id].style.zIndex = "1";
        liSlider[id + 1].style.zIndex = "100";
        liSlider[id].style.opacity = "0";
        liSlider[id + 1].style.opacity = "1";
        id++;
    }
    }

    function prev() {
    if (id <= 0) {
        liSlider[id].style.zIndex = '1';
        liSlider[2].style.zIndex = '100';
        liSlider[id].style.opacity = "0";
        liSlider[2].style.opacity = "1";
        id = 2;
    } else {
        liSlider[id].style.zIndex = "1";
        liSlider[id - 1].style.zIndex = "100";
        liSlider[id].style.opacity = "0";
        liSlider[id - 1].style.opacity = "1";
        id--;
    }
    }
// </> Slider



const districtSelect = document.querySelector('.district'),
      roomsSelect = document.querySelector('.rooms'),
      typeSelect = document.querySelector('.type-of-building'),
      developerSelect = document.querySelector('.developer'),
      contentWrapper = document.querySelector('.content__wrapper');


// GET DISTRICT ROOMS TYPE DEVELOPER
districtSelect.addEventListener('change', function getDistrict(){
    return districtSelect.value;
});
let myFilter = {
    district:1,
};
let content = [
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"},
    {img:"../img/img_6.jpg", price: '49.999$', district: "c.Kyiv, Svytoshinsky district", description: "Rooms: 1. Building type: New"}
]
// ].filter( item => Object
//     .entries(myFilter)
//     .filter( ([ field, value ]) => value() !== 0 )
//     .every( ([ field, value ]) => item[ field ] === value() )
// );

console.log(content)
const pagination = document.querySelector('.pagination');
let notesOnPage = 10;
let counterItems = Math.ceil(content.length/notesOnPage);
let items = [];
console.log(counterItems)
for(let i  = 1; i<= counterItems; i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li);
    items.push(li);
}
console.log(items)

for(let item in items){
    items[item].addEventListener('click', function(){
        let pageNum = +this.innerHTML;

        let start = (pageNum - 1)*notesOnPage;
        let end = start + notesOnPage;

        let notes = content.slice(start, end);
        console.log(notes)
        contentWrapper.innerHTML = '';

        for(let note of notes){
            console.log(notes[note])
            let contentItem = document.createElement('div'),
                itemImg = document.createElement('img'),
                contentItemText = document.createElement('div'),
                price = document.createElement('span'),
                district = document.createElement('h3'),
                hoverDescription = document.createElement('div');
            
            contentItem.classList.add('content__item');
            itemImg.setAttribute('src', note.img);
            contentItemText.classList.add('content__item__text');
            contentItem.appendChild(itemImg);
            price.classList.add('price');
            price.innerHTML = note.price;
            district.innerHTML = note.district;
            hoverDescription.classList.add('hover-description');
            hoverDescription.innerHTML = note.description;
            contentItemText.appendChild(price);
            contentItemText.appendChild(district);
            contentItemText.appendChild(hoverDescription);
            contentItem.appendChild(contentItemText);

            contentWrapper.appendChild(contentItem);
        }
    })

}
