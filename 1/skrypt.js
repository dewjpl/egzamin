function zamowienie() {
    let ksztalt = document.getElementById('ksztalt').value;
    let r = document.getElementById('r').value;
    let g = document.getElementById('g').value;
    let b = document.getElementById('b').value;
    let zamowienie;
    if(ksztalt == '1') {
        zamowienie = 'Twoje zamówienie to cukierek cytryna';
    }
    else if(ksztalt == '2') {
        zamowienie = 'Twoje zamówienie to cukierek liść';
    }
    else if(ksztalt == '3') {
        zamowienie = 'Twoje zamówienie to cukierek banan';
    }
    else {
        zamowienie = 'Twoje zamówienie to cukierek inny';
    }
    document.getElementById('wynik').innerHTML = zamowienie;
    document.getElementById('kolor').style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}