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