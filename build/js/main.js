"use strict";
"use strict";

function initMap() {
  var pos = {
    lat: 50.451369,
    lng: 30.465131
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 50.451369,
      lng: 30.465131
    },
    zoom: 17,
    styles: [{
      elementType: 'geometry',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#d59563'
      }]
    }, {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#d59563'
      }]
    }, {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{
        color: '#263c3f'
      }]
    }, {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#6b9a76'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        color: '#38414e'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#212a37'
      }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#9ca5b3'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#1f2835'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#f3d19c'
      }]
    }, {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{
        color: '#2f3948'
      }]
    }, {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#d59563'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#17263c'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#515c6d'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#17263c'
      }]
    }]
  });
  var marker = new google.maps.Marker({
    map: map,
    position: pos,
    title: 'HERE'
  });
  var info = new google.maps.InfoWindow({
    content: '<h3>This is that</h3>'
  });
  marker.addListener('click', function () {
    info.p;
  });
}
"use strict";

var header = document.getElementById('header'),
    slider = document.getElementById('slider'),
    mainContent = document.getElementById('main-content'),
    services = document.querySelector('#services'),
    contentSelectedItem = document.querySelector('.content__selected-item'),
    filter = document.querySelector('.filter'),
    blockContent = document.querySelector('.content'),
    buttonMap = Array.from(document.querySelectorAll('.openMap')),
    map = document.getElementById('map'),
    homeButton = Array.from(document.querySelectorAll('.home')),
    buyButton = Array.from(document.querySelectorAll('.buy-catalog')),
    servicesButton = Array.from(document.querySelectorAll(".services")),
    navItem = Array.from(document.querySelectorAll('.navigation__item'));
var toggleMobileMenu = document.querySelector('#toggle'),
    mobLink = Array.from(document.querySelectorAll('.mobile-menu-link'));
mobLink.forEach(function (link) {
  link.addEventListener('click', function () {
    toggle.checked = false;
  });
});
servicesButton.forEach(function (button) {
  button.addEventListener('click', function () {
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'flex';
  });
});
buyButton.forEach(function (button) {
  button.addEventListener('click', function () {
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'flex';
    map.style.display = 'none';
    services.style.display = 'none';
    contentSelectedItem.style.display = 'none';
    filter.style.display = 'flex';
    blockContent.style.display = 'flex';
  });
});
buttonMap.forEach(function (button) {
  button.addEventListener('click', function () {
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'block';
    services.style.display = 'none';
  });
});
homeButton.forEach(function (button) {
  button.addEventListener('click', function () {
    header.style.display = 'flex';
    slider.style.display = 'block';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
  });
});
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var districtSelect = document.querySelector('.district'),
    roomsSelect = document.querySelector('.rooms'),
    typeSelect = document.querySelector('.type-of-building'),
    developerSelect = document.querySelector('.developer'),
    contentWrapper = document.querySelector('.content__wrapper'),
    blockContent = document.querySelector('.content'),
    filterBlock = document.querySelector('.filter'),
    contentSelected = document.querySelector('.content__selected-item'); // addEventLitener for select items to get #values and $filteItems() ant $CreateContentItems() on each 'change'

districtSelect.addEventListener('change', function () {
  myFilter.district = districtSelect.value;
  filterItems();
  creatingContentItems();
});
roomsSelect.addEventListener('change', function () {
  myFilter.rooms = roomsSelect.value;
  filterItems();
  creatingContentItems();
});
typeSelect.addEventListener('change', function () {
  myFilter.type = typeSelect.value;
  filterItems();
  creatingContentItems();
});
developerSelect.addEventListener('change', function () {
  myFilter.developer = developerSelect.value;
  filterItems();
  creatingContentItems();
}); // Object filter

var myFilter = {
  district: "noneSelected",
  rooms: "noneSelected",
  type: "noneSelected",
  developer: "noneSelected"
};
var contentLocalStorage = [{
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1'
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1'
}]; // LocalStorage 'content'

localStorage.setItem('content', JSON.stringify(contentLocalStorage));
var content = JSON.parse(localStorage.getItem('content'));
var pagination = document.querySelector('.pagination'); // filtration by rooms, district, developer, type

function filterItems() {
  return content.filter(function (item) {
    return Object.entries(myFilter).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          field = _ref2[0],
          value = _ref2[1];

      return value !== 'noneSelected';
    }).every(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          field = _ref4[0],
          value = _ref4[1];

      return item[field] === value;
    });
  });
} // Pagination


function creatingContentItems() {
  var items = [];
  var notesOnPage = 10;
  pagination.innerHTML = "";
  var counterItems = Math.ceil(filterItems().length / notesOnPage);

  for (var i = 1; i <= counterItems; i++) {
    var li = document.createElement('li');
    li.innerHTML = i;
    li.id = i;
    li.classList.add('pagination-item');
    pagination.appendChild(li);
    items.push(li);
  }

  contentWrapper.innerHTML = '';
  firstElements();

  for (var item in items) {
    items[item].addEventListener('click', function () {
      var pageNum = +this.innerHTML;
      contentWrapper.innerHTML = '';
      var start = (pageNum - 1) * notesOnPage;
      var end = start + notesOnPage;
      var notes = filterItems().slice(start, end);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var note = _step.value;
          var contentItem = document.createElement('div'),
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
          contentItem.addEventListener('click', function () {
            blockContent.style.display = 'none';
            contentSelected.style.display = 'flex';
            filterBlock.style.display = 'none';
            var info__text = document.querySelector('.info__text'),
                info__district = document.querySelector('.info__district'),
                info__description = document.querySelector('.info__description'),
                info__price = document.querySelector('.info__price'),
                buy = document.querySelector('.buy'),
                imgSelected = document.querySelector('.img-selected-item');
            imgSelected.src = "../img/" + note.img;
            info__district.innerHTML = note.description;
            info__description.innerHTML = note.hoverdDescription;
            info__price.innerHTML = note.price;
            console.log(1);
          });
          contentWrapper.appendChild(contentItem);
        };

        for (var _iterator = notes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  }
}

creatingContentItems(); // first 10 element onload web page

function firstElements() {
  var notes = filterItems().slice(0, 10);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop2 = function _loop2() {
      var note = _step2.value;
      var contentItem = document.createElement('div'),
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
      contentItem.addEventListener('click', function () {
        blockContent.style.display = 'none';
        contentSelected.style.display = 'flex';
        filterBlock.style.display = 'none';
        var info__text = document.querySelector('.info__text'),
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
    };

    for (var _iterator2 = notes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
"use strict";

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
  }, 1000);
}; // const menuItems = Array.from(document.querySelectorAll('.navigation__item'));
// menuItems.forEach(item =>{
//     item.addEventListener('click', function(){
//         var preloader = document.getElementById('page-preloader')
//                 preloader.classList.remove('done');
//         setTimeout(() => {
//             preloader.classList.toggle('done');
//         }, 2000);
//     } )
// })
"use strict";

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