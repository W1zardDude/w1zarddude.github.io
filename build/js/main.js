"use strict";

function getAdvertDistrict() {
  return document.querySelector('.district-advert').value;
}

function getAdvertRooms() {
  return document.querySelector('.rooms-advert').value;
}

function getAdvertType() {
  return document.querySelector('.type-of-building-advert').value;
}

function getAdvertDeveloper() {
  return document.querySelector('.developer-advert').value;
}

function getAdvertPrice() {
  return document.querySelector('.price-advert').value;
}

function addNewAdvert() {
  var newItem = {
    district: getAdvertDistrict(),
    rooms: getAdvertRooms(),
    type: getAdvertType(),
    img: "jkFjord.jpg",
    developer: getAdvertDeveloper(),
    price: getAdvertPrice(),
    position: {
      lat: 50.438590,
      lng: 30.410427
    }
  };
  var i = 0;

  for (var key in newItem) {
    if (newItem[key] === "noneSelected" || newItem[key] === '') {
      i++;
    }
  }

  if (i > 0) {
    alert('Select and complete all fields!');
  } else {
    content.push(newItem);
    userItems.push(newItem);
    filterItems();
    state.data = filterItems();
    document.querySelector('.district-advert').value = 'noneSelected';
    document.querySelector('.rooms-advert').value = 'noneSelected';
    document.querySelector('.type-of-building-advert').value = 'noneSelected';
    document.querySelector('.developer-advert').value = 'noneSelected';
    document.querySelector('.price-advert').value = '';
    alert('Item was added succsesfully :)');
  }
}
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
  }); // document.querySelector('#dictrictMap').addEventListener('change', ()=>{
  //   mapFilter.district = document.querySelector('#dictrictMap').value;
  //   filteredContentMap();
  //   createMarkers();
  // })

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

  var i;

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
          document.querySelector('.map__district').innerHTML = "".concat(value.district, " district");
          document.querySelector('.map__description').innerHTML = "Rooms: ".concat(value.rooms);
          document.querySelector('.map__price').innerHTML = "".concat(value.price, "$");
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
    map = document.getElementById('map'); //   slider = document.querySelector('.slider');

var toggleMobileMenu = document.querySelector('#toggle'),
    mobLink = Array.from(document.querySelectorAll('.mobile-menu-link'));
mobLink.forEach(function (link) {
  link.addEventListener('click', function () {
    toggle.checked = false;
  });
});

function servicePage() {
  header.style.display = 'flex';
  slider.style.display = 'none';
  mainContent.style.display = 'none';
  map.style.display = 'none';
  services.style.display = 'flex';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}

function buyPage() {
  header.style.display = 'flex';
  slider.style.display = 'none';
  mainContent.style.display = 'flex';
  map.style.display = 'none';
  services.style.display = 'none';
  contentSelectedItem.style.display = 'none';
  filter.style.display = 'flex';
  blockContent.style.display = 'flex';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}

function Contacts() {
  header.style.display = 'flex';
  slider.style.display = 'none';
  mainContent.style.display = 'none';
  map.style.display = 'none';
  services.style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'block';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}

function mapPage() {
  header.style.display = 'flex';
  slider.style.display = 'none';
  mainContent.style.display = 'none';
  map.style.display = 'block';
  services.style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}

function homePage() {
  header.style.display = 'flex';
  slider.style.display = 'block';
  mainContent.style.display = 'none';
  map.style.display = 'none';
  services.style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}

function loginPage() {
  slider.style.display = 'none';
  mainContent.style.display = 'none';
  map.style.display = 'none';
  services.style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'flex';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}

function onlinePreoder() {
  slider.style.display = 'none';
  mainContent.style.display = 'none';
  map.style.display = 'none';
  services.style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'flex';
} // USER actions


function exit() {
  var user = JSON.parse(localStorage.getItem('logedUserInfo'));
  user.authorization = 'false';
  user.login = 'none';
  localStorage.setItem('logedUserInfo', JSON.stringify(user));
  document.location.reload(true);
}

function addAdvert() {
  header.style.display = 'flex';
  slider.style.display = 'none';
  mainContent.style.display = 'none';
  map.style.display = 'none';
  services.style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'flex';
  document.querySelector(".settings").style.display = 'none';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}

function settings() {
  header.style.display = 'flex';
  slider.style.display = 'none';
  mainContent.style.display = 'none';
  map.style.display = 'none';
  services.style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.registration').style.display = 'none';
  document.querySelector('.add-advert-block').style.display = 'none';
  document.querySelector(".settings").style.display = 'flex';
  document.querySelector('.contacts-block').style.display = 'none';
  document.querySelector('.map-selected-item').style.display = 'none';
  document.querySelector('.online-pre-order').style.display = 'none';
}
"use strict";

function sendInfo() {
  var firstName = document.querySelector('.person-name');
  var secondName = document.querySelector('.person-second-name');
  var number = document.querySelector('.number');
  alert('We will call you back for further action.');
  firstName.value = '';
  secondName.value = '';
  number.value = '';
}
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
  price: '50.000',
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
  price: '30.000',
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
  price: '74.999',
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
  price: '50.000',
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
  price: '20.000',
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
  price: '50.000',
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
  price: '30.000',
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
  price: '80.000',
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
  price: '50.000',
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
  price: '30.00$',
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
  price: '74.999',
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
  price: '50.000',
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
  price: '20.000',
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
  price: '50.000',
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
  price: '30.000',
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
  price: '80.000',
  position: {
    lat: 50.438511,
    lng: 30.410427
  }
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
  contentWrapper.innerHTML = '';
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
        descriptionT = myList[i].district,
        hoverDescriptionT = myList[i].rooms;
    contentItem.classList.add('content__item');
    itemImg.src = "../../img/" + imgSrcT;
    contentItemText.classList.add('content__item__text');
    contentItem.appendChild(itemImg);
    priceText.classList.add('price');
    priceText.innerHTML = "".concat(priceT, "$");
    district.innerHTML = "".concat(descriptionT, " district");
    hoverDescription.classList.add('hover-description');
    hoverDescription.innerHTML = "Rooms: ".concat(hoverDescriptionT);
    contentItemText.appendChild(priceText);
    contentItemText.appendChild(district);
    contentItemText.appendChild(hoverDescription);
    contentItem.appendChild(contentItemText);
    contentItem.addEventListener('click', function () {
      blockContent.style.display = 'none';
      contentSelected.style.display = 'flex';
      filterBlock.style.display = 'none';
      var info__district = Array.from(document.querySelectorAll('.info__district')),
          info__description = Array.from(document.querySelectorAll('.info__description')),
          info__price = Array.from(document.querySelectorAll('.info__price')),
          imgSelected = Array.from(document.querySelectorAll('.img-selected-item'));
      imgSelected.forEach(function (item) {
        return item.src = "../../img/" + imgSrcT;
      });
      info__district.forEach(function (item) {
        return item.innerHTML = "".concat(descriptionT, " district");
      });
      info__description.forEach(function (item) {
        return item.innerHTML = "Rooms: ".concat(hoverDescriptionT);
      });
      info__price.forEach(function (item) {
        return item.innerHTML = "".concat(priceT, "$");
      });
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

// USERS data base
var users = [{
  login: 'Tugai',
  password: 'Kostya'
}]; // USER INFO

var logedUserInfo = {
  login: 'User',
  authorization: false,
  password: 'Password'
}; // localStorage.setItem('logedUserInfo', JSON.stringify(logedUserInfo));
// REGISTRATION 

function registerNewUser() {
  var regLogin = document.querySelector('#regLogin');
  var regPassword = document.querySelector('#regPassword');
  var repRegPassword = document.querySelector('#repRegPassword');
  var textError = document.querySelector('.text-for-error');

  if (regPassword.value.length > 0 && regLogin.value.length > 0) {
    if (regPassword.value == repRegPassword.value) {
      var n = 0;
      users.forEach(function (item) {
        if (item.login == regLogin.value) {
          n++;
        }
      });

      if (n == 0) {
        users.push({
          login: regLogin.value,
          password: regPassword.value
        });
        document.querySelector('.text-for-error_h1').style.backgroundColor = 'rgba(43, 207, 43, 0.726)';
        textError.style.opacity = '1';
        textError.style.visibility = 'visible';
        document.querySelector('.text-for-error_h1').innerHTML = 'Registration completed successfully';
        setTimeout(function () {
          textError.style.opacity = '0';
          textError.style.visibility = 'hidden';
        }, 2000);
        regLogin.value = '';
        regPassword.value = '';
        repRegPassword.value = '';
        regLogin.value = '';
        regPassword.value = '';
        repRegPassword.value = '';
        bdUsers();
      } else {
        document.querySelector('.text-for-error_h1').style.backgroundColor = 'rgba(250, 0, 0, 0.739)';
        textError.style.opacity = '1';
        textError.style.visibility = 'visible';
        document.querySelector('.text-for-error_h1').innerHTML = 'This login already exists';
        setTimeout(function () {
          textError.style.opacity = '0';
          textError.style.visibility = 'hidden';
        }, 2000);
        regLogin.value = '';
        regPassword.value = '';
        repRegPassword.value = '';
      } // for(let user of users){
      //     if(user.login != regLogin.value){
      //         console.log(user.login, regLogin.value)
      //         console.log('congrat');
      //     continue;
      //     }
      //     if(user.login == regLogin.value){
      //     }
      //     else{
      //         break;
      //     }
      // }

    } else {
      console.log('Error password');
    }
  } else {
    console.log('This field is empty');
  }
} // data base of USERS


function bdUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

bdUsers(); // GET data base 'USERS'

function getBDusers() {
  return JSON.parse(localStorage.getItem('users'));
} // LOGIN


function logInSystem() {
  var login = document.querySelector('#login').value;
  var password = document.querySelector('#password').value;

  if (login.length > 0 && password.length > 0) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = getBDusers()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var user = _step.value;

        if (user.login == login && user.password == password) {
          console.log('Authorization...');
          logedUserInfo.login = login;
          logedUserInfo.authorization = true;
          logedUserInfo.password = password;
          authorizationUser();
          break;
        } else {
          console.log('Error authorization');
        }
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
  } else {
    console.log('Fields are empty');
  }
} // AUTHORIZATION USER


function authorizationUser() {
  localStorage.setItem("logedUserInfo", JSON.stringify(logedUserInfo));
  var auth = JSON.parse(localStorage.getItem('logedUserInfo')).authorization;
  var login = JSON.parse(localStorage.getItem('logedUserInfo')).login;
  var preloader = document.getElementById('page-preloader');
  preloader.classList.toggle('done');
  setTimeout(function () {
    dataForAuthUser(login, auth);
    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
  }, 3000);
} // DATA FOR USER WHICH was loged in


function dataForAuthUser(login, auth) {
  Array.from(document.querySelectorAll('.login')).forEach(function (item) {
    item.style.display = 'none';
  });
  Array.from(document.querySelectorAll('.profile-menu-mobile')).forEach(function (item) {
    item.style.display = 'block';
  });
  homePage();
  Array.from(document.querySelectorAll('.user')).forEach(function (item) {
    item.innerHTML = "Hello, ".concat(login);
    item.style.display = 'block';
  });
  Array.from(document.querySelectorAll('.li-add-advert')).forEach(function (item) {
    item.classList.toggle('li-add-advert');
    item.title = '';
  });
  Array.from(document.querySelectorAll('.add-advert')).forEach(function (item) {
    item.classList.toggle('add-advert');
    item.addEventListener('click', addAdvert);
  });
  document.querySelector('.settings__user-hello').innerHTML = "Hello, ".concat(login);
  console.log(login);
}

window.addEventListener('load', function () {
  var auth = JSON.parse(localStorage.getItem('logedUserInfo')).authorization;
  var login = JSON.parse(localStorage.getItem('logedUserInfo')).login;

  if (auth === true) {
    dataForAuthUser(login, auth);
  } else {
    Array.from(document.querySelectorAll('.profile-menu-mobile')).forEach(function (item) {
      item.style.display = 'none';
    });
    console.log('authorization onload:', false);
  }
});
"use strict";

function changeLogin() {
  var users = JSON.parse(localStorage.getItem('users'));
  var user = JSON.parse(localStorage.getItem('logedUserInfo'));
  var newLogin = document.querySelector('#change-login').value;

  if (newLogin.length > 0) {
    //     for(let i = 0; i < users.length; i++){
    //         if(users[i].login != newLogin){
    //             if(users[i].login = user.login){
    //                 users[i].login = newLogin;
    user.login = newLogin;
    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
    localStorage.setItem('logedUserInfo', JSON.stringify(user));
    setTimeout(function () {
      dataForAuthUser(user.login);
      var preloader = document.getElementById('page-preloader');
      preloader.classList.toggle('done');
    }, 3000); //             }
    //         }
    //     }
  }
}

function changePassword() {
  var users = JSON.parse(localStorage.getItem('users'));
  var user = JSON.parse(localStorage.getItem('logedUserInfo'));
  var newPassword = document.querySelector('#change-password').value;

  if (newPassword.length > 0) {
    // for(let i = 0; i < users.length; i++){
    //     if(users[i].login = user.login){
    //         users[i].password = newPassword;
    user.password = newPassword;
    var preloader = document.getElementById('page-preloader');
    preloader.classList.toggle('done');
    localStorage.setItem('logedUserInfo', JSON.stringify(user));
    setTimeout(function () {
      dataForAuthUser(user.login, user.authorization, user.password);
      var preloader = document.getElementById('page-preloader');
      preloader.classList.toggle('done');
    }, 3000); //     }
    // }
  }
}
"use strict";

var slider = document.createElement('div');

function createSlider() {
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

createSlider();
"use strict";

var userItems = [];