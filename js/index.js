"use strict";
// Slider
    var li = document.querySelectorAll('.slide');
    var id = 0;

    function next() {
    if (id >= 2) {
        li[id].style.zIndex = '1';
        li[0].style.zIndex = '100';
        li[id].style.opacity = "0";
        li[0].style.opacity = "1";
        id = 0;
    } else {
        li[id].style.zIndex = "1";
        li[id + 1].style.zIndex = "100";
        li[id].style.opacity = "0";
        li[id + 1].style.opacity = "1";
        id++;
    }
    }

    function prev() {
    if (id <= 0) {
        li[id].style.zIndex = '1';
        li[2].style.zIndex = '100';
        li[id].style.opacity = "0";
        li[2].style.opacity = "1";
        id = 2;
    } else {
        li[id].style.zIndex = "1";
        li[id - 1].style.zIndex = "100";
        li[id].style.opacity = "0";
        li[id - 1].style.opacity = "1";
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
var district,
    rooms,
    type,
    developer;

function getDistrict() {
    district = districtSelect.value;
    console.log(district)
    filter();   
}
function getRooms() {
    rooms = roomsSelect.value;
    console.log(rooms)
}
function getType() {
    type = typeSelect.value;
    console.log(type)
}
function getDeveloper() {
    developer = developerSelect.value;
    console.log(developer)
}

let content = [
    {
        district: 'svytoshinsky',
        rooms: '1',
        type: 'new',
        developer: 'saga',
        arr: ['svytoshinsky', '1', 'new', 'saga'],
    },
]



function createContentItem(){

}
function filter(){
    if(content[0].arr[0] === district){
        
    }
}











//
// filterArr = [];
// var svytoshinoDistrict = document.querySelector('#svytoshino'),
//     content__block = document.querySelector('.content'); // Array for Content

// var content__array = [];

// for (var key in content.svytoshino) {
//   //Creating content__item>content__item__img + content__item_description  
//   var content__item__img = document.createElement('img'),
//       content__item__description = document.createElement('div');
//   content__item__img.className = 'content__item__img';
//   content__item__description.className = 'content__item__description';
//   var content__array__item = []; //giving src and description

//   content__item__img.src = content.svytoshino[key].container.img;
//   content__item__description.innerHTML = content.svytoshino[key].container.description; //Append content__item__img + content__item__description in content__item

//   content__array__item.push(content__item__img, content__item__description);
//   content__array.push(content__array__item);
// } //
// // for(let i = 0; i<= 10; i++){   
// //     let content__item = document.createElement('div');
// //     content__array[i].map(value => {
// //         content__item.className = 'content__item';
// //         content__item.appendChild(value);
// //     })
// //     content__block.appendChild(content__item);
// // }


// var wrapper = document.querySelector('.filter');
// wrapper.addEventListener('click', function (e) {
//   var clickEl = e.target;

//   if (clickEl.tagName === 'INPUT') {
//     var parent = clickEl.parentNode.getAttribute('data-district');
//     var _li = clickEl.parentNode;

//     var liInput = _li.querySelector('input');

//     if (liInput.checked) {
//       var _loop = function _loop(i) {
//         var content__item = document.createElement('div');
//         content__array[i].map(function (value) {
//           content__item.className = 'content__item';
//           content__item.appendChild(value);
//         });
//         content__block.appendChild(content__item);
//       };

//       for (var i = 0; i <= 10; i++){
//         _loop(i);
//       }
//     } else {
//       // content__block.parentNode
//       content__block.parentNode.removeChild('.content'); // console.log(content__block.parentNode.querySelector('.content'));
//       // content__block.parentNode.deleteChild(querySelectorAll('.content'));
//     }

//     if (clickEl.parentNode.getAttribute('data-district') === 'obolon') {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//   }
// }); //
// // if ("onpropertychange" in svytoshinoDistrict) {
// //     // старый IE
// //     svytoshinoDistrict.onpropertychange = function() {
// //       // проверим имя изменённого свойства
// //       if (event.propertyName == "checked") {
// //         alert( svytoshinoDistrict.checked );
// //       }
// //     };
// //   } else {
// //     // остальные браузеры
// //     svytoshinoDistrict.onchange = function() {
// //         for(let key in content.svytoshino){
// //             if(svytoshinoDistrict.checked === true){
// //                 content_item_img.src = content.svytoshino[key].container.img;
// //             }
// //             else{
// //                 content_item_img.src = "";
// //             }
// //         }
// //     };
// //   }