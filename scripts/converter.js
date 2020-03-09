function FtoC () {
    let f = document.getElementById('txtDegF')
    let num = f.value;
    
    let c = document.getElementById('divDegC');
    c.innerHTML = num + '&deg; F is ' + (num - 32) * 5 / 9 + '&deg; C';
    
    document.body.style.backgroundColor = getColor(num);
}

function CtoF () {
    let c = document.getElementById('txtDegC')
    let f = document.getElementById('divDegF');

    let num = (c.value * 9 / 5 + 32);
    f.innerHTML = c.value + '&deg; C is ' + num + '&deg; F';
    document.body.style.backgroundColor = getColor(num);
}

function getColor(fahr) {
    let color;
    if (fahr <= 32) {
        color = 'blue'
    } else if (fahr > 32 && fahr <= 60) {
        color = 'yellow';
    } else if (fahr > 60 && fahr < 88) {
        color = 'orange';
    } else {
        color = 'pink';
    }
    return color;
}