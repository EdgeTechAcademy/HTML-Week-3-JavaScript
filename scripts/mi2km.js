function miles2Km(miles) {
    let kilometers = miles * 1.6;
    return kilometers;
}

function convertMi2Km() {
    elMiles = document.getElementById('miles');
    let km = miles2Km(elMiles.value);
    let elKilos = document.getElementById('km')
    elKilos.value = km;
}

