"use strict";
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 50.451369,
      lng: 30.465131
    },
    zoom: 14
  });
  document.querySelector('#dictrictMap').addEventListener('change', function () {
    mapFilter.district = document.querySelector('#dictrictMap').value;
    filteredContentMap();
    createMarkers();
  });
  var mapFilter = {
    district: 'noneSelected'
  };

  function filteredContentMap() {
    return content.filter(function (item) {
      return Object.entries(mapFilter).filter(function (_ref) {
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
  }

  function createMarkers() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var value = _step.value;
        new google.maps.Marker({
          map: map,
          position: value.position,
          title: value.district
        }).addListener('click', function () {
          document.querySelector('.map__img').src = 'img/' + value.img;
          document.querySelector('.map__district').innerHTML = value.description;
          document.querySelector('.map__description').innerHTML = value.hoverdDescription;
          document.querySelector('.map__price').innerHTML = value.price;
          document.querySelector('.map-selected-item').style.display = 'flex';
        });
      };

      for (var _iterator = filteredContentMap()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
  }

  createMarkers();
  var info = new google.maps.InfoWindow({
    content: '<h3>This is that</h3>'
  });
  map.addListener('click', function () {
    document.querySelector('.map-selected-item').style.display = 'none';
  });
}
"use strict";

var header = document.getElementById('header'),
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
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
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
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
  });
});
buttonMap.forEach(function (button) {
  button.addEventListener('click', function () {
    header.style.display = 'flex';
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'block';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
  });
});
homeButton.forEach(function (button) {
  button.addEventListener('click', function () {
    header.style.display = 'flex';
    slider.style.display = 'block';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'none';
  });
});
Array.from(document.querySelectorAll('.login')).forEach(function (item) {
  item.addEventListener('click', function () {
    slider.style.display = 'none';
    mainContent.style.display = 'none';
    map.style.display = 'none';
    services.style.display = 'none';
    document.querySelector('.map-selected-item').style.display = 'none';
    document.querySelector('.registration').style.display = 'flex';
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

function dataChange() {
  contentWrapper.innerHTML = '';
  filterItems();
  state.data = filterItems();
  buildContent();
}

districtSelect.addEventListener('change', function () {
  myFilter.district = districtSelect.value;
  dataChange();
  markers();
});
roomsSelect.addEventListener('change', function () {
  myFilter.rooms = roomsSelect.value;
  contentWrapper.innerHTML = '';
  dataChange();
});
typeSelect.addEventListener('change', function () {
  myFilter.type = typeSelect.value;
  contentWrapper.innerHTML = '';
  dataChange();
});
developerSelect.addEventListener('change', function () {
  myFilter.developer = developerSelect.value;
  contentWrapper.innerHTML = '';
  dataChange();
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
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.449101,
    lng: 30.490206
  }
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2',
  position: {
    lat: 50.444286,
    lng: 30.497251
  }
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.445267,
    lng: 30.489825
  }
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.449283,
    lng: 30.480347
  }
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.450565,
    lng: 30.467127
  }
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.451821,
    lng: 30.467457
  }
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.448713,
    lng: 30.467682
  }
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.453729,
    lng: 30.470321
  }
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkFjord.jpg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.447367,
    lng: 30.465272
  }
}, {
  district: 'podolsky',
  rooms: '2',
  type: 'new',
  developer: 'bud',
  img: "jkOtrada.jpg",
  price: '30.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 2',
  position: {
    lat: 50.447759,
    lng: 30.452735
  }
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'old',
  developer: 'saga',
  img: "jkDelrey.png",
  price: '74.999$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.444136,
    lng: 30.453257
  }
}, {
  district: 'solomensky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkRad.jpeg",
  price: '50.000$',
  description: "Solomensky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.441045,
    lng: 30.427164
  }
}, {
  district: 'podolsky',
  rooms: '3',
  type: 'new',
  developer: 'bud',
  img: "jkSalut.jpg",
  price: '20.000$',
  description: "Podolsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.439163,
    lng: 30.420604
  }
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkZarichnii.jpeg",
  price: '50.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.441312,
    lng: 30.417959
  }
}, {
  district: 'shevchenkovsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "jkCreatorCity.png",
  price: '30.000$',
  description: "Shevchenkovsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.438972,
    lng: 30.413018
  }
}, {
  district: 'svytoshinsky',
  rooms: '1',
  type: 'new',
  developer: 'bud',
  img: "img_6.jpg",
  price: '80.000$',
  description: "Svytoshinsky district",
  hoverdDescription: 'Rooms: 1',
  position: {
    lat: 50.438511,
    lng: 30.410427
  }
} // {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkFjord.jpg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'podolsky', rooms: '2', type: 'new', developer: 'bud', img: "jkOtrada.jpg", price: '30.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 2'},
// {district: 'shevchenkovsky', rooms: '1', type: 'old', developer: 'saga', img: "jkDelrey.png", price: '74.999$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},
// {district: 'solomensky', rooms: '1', type: 'new', developer: 'bud', img: "jkRad.jpeg", price: '50.000$', description: "Solomensky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'podolsky', rooms: '3', type: 'new', developer: 'bud', img: "jkSalut.jpg", price: '20.000$', description: "Podolsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "jkZarichnii.jpeg", price: '50.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'shevchenkovsky', rooms: '1', type: 'new', developer: 'bud', img: "jkCreatorCity.png", price: '30.000$', description: "Shevchenkovsky district", hoverdDescription: 'Rooms: 1'},   
// {district: 'svytoshinsky', rooms: '1', type: 'new', developer: 'bud', img: "img_6.jpg", price: '80.000$', description: "Svytoshinsky district", hoverdDescription: 'Rooms: 1'},   
]; // LocalStorage 'content'

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
} // settings for pagination


var state = {
  data: filterItems(),
  page: 1,
  items: 10,
  maxButtons: 5
}; // Logic for pagination 

function createPagination(data, page, items) {
  var start = (page - 1) * items;
  var end = start + items;
  var itemsData = data.slice(start, end);
  var pages = Math.ceil(data.length / items);
  return {
    'data': itemsData,
    'pages': pages
  };
} // Creating buttons for pagination


function pageButtons(pages) {
  pagination.innerHTML = '';
  var left = state.page - Math.floor(state.maxButtons / 2);
  var right = state.page + Math.floor(state.maxButtons / 2);

  if (left < 1) {
    left = 1;
    right = state.maxButtons;
  }

  if (right > pages) {
    left = pages - (state.maxButtons - 1);
    right = pages;

    if (left < 1) {
      left = 1;
    }
  }

  for (var page = left; page <= right; page++) {
    pagination.innerHTML += "<li value=\"".concat(page, "\" id=\"").concat(page, "\" class=\"pagination-item\">").concat(page, "</li>");
  }

  if (state.page != 1) {
    pagination.innerHTML = "<li value=\"1\" id=\"".concat(page, "\" class=\"pagination-item\">&#171; First page</li>") + pagination.innerHTML;
  }

  if (state.page != pages) {
    pagination.innerHTML += "<li value=\"".concat(pages, "\" id=\"").concat(page, "\" class=\"pagination-item\">Last page &#187;</li>");
  }

  Array.from(document.querySelectorAll('.pagination-item')).forEach(function (item) {
    item.addEventListener('click', function () {
      contentWrapper.innerHTML = '';
      state.page = +item.value;
      buildContent();
    });
  });
}

function buildContent() {
  var dataBuild = createPagination(state.data, state.page, state.items);
  var myList = dataBuild.data;

  var _loop = function _loop(i) {
    var contentItem = document.createElement('div'),
        itemImg = document.createElement('img'),
        contentItemText = document.createElement('div'),
        priceText = document.createElement('span'),
        district = document.createElement('h3'),
        hoverDescription = document.createElement('div');
    var imgSrcT = myList[i].img,
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
      imgSelected.src = "../../img/" + imgSrcT;
      info__district.innerHTML = descriptionT;
      info__description.innerHTML = hoverDescriptionT;
      info__price.innerHTML = priceT;
    });
    contentWrapper.appendChild(contentItem);
  };

  for (var i in myList) {
    _loop(i);
  }

  pageButtons(dataBuild.pages);
}

buildContent();
"use strict";

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
  }, 1000);
};
"use strict";
"use strict";

function createElementSlider() {
  var slider = document.createElement('div');
  slider.classList.add('slider');
  slider.id = 'slider';
  var aNext = document.createElement('a');
  aNext.classList.add('control_next');
  aNext.innerHTML = ">";
  aNext.addEventListener('click', next);
  var aPrev = document.createElement('a');
  aPrev.classList.add('control_prev');
  aPrev.innerHTML = "<";
  aPrev.addEventListener('click', prev);
  var ul = document.createElement('ul');
  var liFirst = document.createElement('li');
  var liSecond = document.createElement('li');
  var liThird = document.createElement('li');
  liFirst.classList.add('slide');
  liSecond.classList.add('slide');
  liThird.classList.add('slide');
  var imgFirst = document.createElement('img');
  var imgSecond = document.createElement('img');
  var imgThird = document.createElement('img');
  imgFirst.src = '../../img/kvartira3.jpg';
  imgSecond.src = '../../img/kvartira.jpg';
  imgThird.src = '../../img/kvartira2.jpg';
  var h1First = document.createElement('h1');
  var h1Second = document.createElement('h1');
  var h1Third = document.createElement('h1');
  h1First.innerHTML = 'COBALT - best prices';
  h1Second.innerHTML = 'BEST Service';
  h1Third.innerHTML = 'BEST OFFERS';
  liFirst.appendChild(imgFirst);
  liSecond.appendChild(imgSecond);
  liThird.appendChild(imgThird);
  liFirst.appendChild(h1First);
  liSecond.appendChild(h1Second);
  liThird.appendChild(h1Third);
  ul.appendChild(liFirst);
  ul.appendChild(liSecond);
  ul.appendChild(liThird);
  slider.appendChild(aNext);
  slider.appendChild(aPrev);
  slider.appendChild(ul);
  document.querySelector('body').appendChild(slider);
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
}

window.addEventListener('load', function () {
  switch (new URL(location).pathname) {
    case '/slider':
      break;
  }

  createElementSlider();
});