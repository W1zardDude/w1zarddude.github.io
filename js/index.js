const content = {
    obolon:{
        id1:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkFjord.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        }
    },
    svytoshino: {
        id1:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkFjord.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id2:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkDelrey.png",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id3:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkOtrada.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id4:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkFjord.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id5:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkDelrey.png",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id6:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkOtrada.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id7:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkFjord.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id8:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkDelrey.png",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id9:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkOtrada.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id10:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkFjord.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id11:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkDelrey.png",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id12:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkOtrada.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id13:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkFjord.jpg",
                description: "lol"
            }
        },
        id14:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkDelrey.png",
                description: "2 будинки будується, 6 збудовано"
            }
        },
        id15:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkOtrada.jpg",
                description: "lol"
            }
        },
    },
    podol:{
        id1:{
            rooms: 1,
            price: 50000,
            type: "new",
            developer: "kah",
            container:{
                img: "../img/jkFjord.jpg",
                description: "2 будинки будується, 6 збудовано"
            }
        }
    }
}

const svytoshinoDistrict = document.querySelector('#svytoshino'),
      content__block = document.querySelector('.content');















// Array for Content
let content__array = [];

for(let key in content.svytoshino){
    //Creating content__item>content__item__img + content__item_description  
         
        let content__item__img = document.createElement('img'),
            content__item__description = document.createElement('div');
        content__item__img.className = 'content__item__img';
        content__item__description.className = 'content__item__description';
    let content__array__item = [];
    //giving src and description

    content__item__img.src = content.svytoshino[key].container.img;
    content__item__description.innerHTML = content.svytoshino[key].container.description;
    //Append content__item__img + content__item__description in content__item
        // content__item.appendChild(content__item__img);
        // content__item.appendChild(content__item__description);
    
        content__array__item.push(content__item__img, 
                                  content__item__description);
        content__array.push(content__array__item);
        
}



//
for(let i = 0; i<= 10; i++){   
    let content__item = document.createElement('div');     
        content__array[i].map((value)=>{
            content__item.className = 'content__item';
            content__item.appendChild(value);

        })
        content__block.appendChild(content__item);
        
}
//

    
if ("onpropertychange" in svytoshinoDistrict) {
    // старый IE
    svytoshinoDistrict.onpropertychange = function() {
      // проверим имя изменённого свойства
      if (event.propertyName == "checked") {
        alert( svytoshinoDistrict.checked );
      }
    };
  } else {
    // остальные браузеры
    svytoshinoDistrict.onchange = function() {

        for(let key in content.svytoshino){
            if(svytoshinoDistrict.checked === true){
                content_item_img.src = content.svytoshino[key].container.img;
            }
            else{
                content_item_img.src = "";
            }
        }

        
        
        
      
    };
  }
  

