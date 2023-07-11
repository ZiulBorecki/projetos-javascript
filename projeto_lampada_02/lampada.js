const power = document.getElementById('power');
const lamp = document.getElementById('lamp');

function isLampOn () {
    return lamp.src.indexOf('desligada') > - 1
}

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken()){
        if(isLampOn()){
            lamp.src = "img/ligada.jpg";
            power.src = "img/on.jpg";
            lamp.classList.remove('desligada');
            lamp.classList.add('ligada');
        }else{
            lamp.src = "img/desligada.jpg";
            power.src = "img/off.jpg";
            lamp.classList.remove('ligada');
            lamp.classList.add('desligada');
        }
    }
}

function lampBroken() {
    lamp.src = "img/quebrada.jpg";
    power.src = "img/off.jpg";
}

power.addEventListener('click', lampOn);
lamp.addEventListener('dblclick', lampBroken)