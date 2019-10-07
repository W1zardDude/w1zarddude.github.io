let $start = document.querySelector('#start'),
    $game = document.querySelector('#game'),
    score = 0,
    $time = document.querySelector('#time'),
    isGameStarted = false,
    $timeHeader = document.querySelector('#time-header'),
    $resultHeader = document.querySelector('#result-header'),
    $result = document.querySelector('#result'),
    $gametime = document.querySelector('#game-time');



$start.addEventListener("click", startgame);
$game.addEventListener("click", handleBoxClick);
$gametime.addEventListener("input", setGameTime);

function show($el){
    $el.classList.remove('hide');
}
function hide($el){
    $el.classList.add('hide');
}

function startgame(){
    score = 0;
    setGameTime();
    $gametime.setAttribute('disabled', 'true');
    show($timeHeader);
    hide($resultHeader);

    isGameStarted = true;
    $game.style.backgroundColor = '#f1f1f1';
    hide($start);
    let interval = setInterval(function(){
        let time = parseFloat($time.textContent);
        if( time <= 0){
            clearInterval(interval);
            endgame();
        }
        else{
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);

    renderBox();

    
}

function setGameTime(){
    let time = +$gametime.value;
    $time.textContent = time.toFixed(1);
    console.log('1');
}

function endgame(){
    isGameStarted = false;
    show($start);
    $game.style.backgroundColor = "#f1f1f1";
    $game.innerHTML = '';
    hide($timeHeader);
    show($resultHeader);
    $gametime.removeAttribute('disabled');
    setGameScore();

}

function handleBoxClick(event){
    if(!isGameStarted){
        return;
    }
    if(event.target.dataset.box){
        score++;
        renderBox();

    }
}

function setGameScore(){
    $result.textContent = score.toString();

}

function renderBox(){
    
    $game.innerHTML = '';
    let box = document.createElement('div'),
        boxSize = getRandom(30,100),
        gameSize = $game.getBoundingClientRect(),
        maxTop = gameSize.height - boxSize,
        maxLeft = gameSize.width - boxSize;

    box.style.height = box.style.width = boxSize + 'px';
    box.style.position = 'absolute';
    box.style.backgroundColor = "rgba(211, 118, 118, 0.712)";
    box.style.top = getRandom(0, maxTop) + 'px';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.setAttribute("data-box", 'true');


    $game.insertAdjacentElement('afterbegin', box);


}
function getRandom(min, max){
    return Math.ceil(Math.random() * ((max-min) + min));
}
// function getRandomColor(){
//     return Math.ceil(Math.random() * 1000000);
// }
