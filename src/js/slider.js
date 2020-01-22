function createElementSlider(){
    const slider = document.createElement('div');
slider.classList.add('slider');
slider.id = 'slider';

const aNext = document.createElement('a');
aNext.classList.add('control_next');
aNext.innerHTML = ">";
aNext.addEventListener('click', next);
const aPrev = document.createElement('a');
aPrev.classList.add('control_prev');
aPrev.innerHTML = "<";
aPrev.addEventListener('click', prev);

const ul = document.createElement('ul');

const liFirst = document.createElement('li');
const liSecond = document.createElement('li');
const liThird = document.createElement('li');

liFirst.classList.add('slide');
liSecond.classList.add('slide');
liThird.classList.add('slide');

const imgFirst = document.createElement('img');
const imgSecond = document.createElement('img');
const imgThird = document.createElement('img');

imgFirst.src = '../../img/kvartira.jpg';
imgSecond.src = '../../img/kvartira3.jpg';
imgThird.src = '../../img/kvartira2.jpg';

const h1First = document.createElement('h1');
const h1Second = document.createElement('h1');
const h1Third = document.createElement('h1');

h1First.innerHTML = 'COBALT';
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

window.addEventListener('load',() =>{
   
    
    switch(new URL(location).pathname){
        case '/slider':
            
        break;
        
    }
    createElementSlider();

    
})

