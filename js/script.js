//datas
//  il prezzo del biglietto è definito in base ai km(0.21 € al km)
//  va applicato uno sconto del 20 % per i minorenni
//  va applicato uno sconto del 40 % per gli over 65.
var fare = 0.21;
var discountU18 = 0.20;
var discountOver65 = 0.40;

var btnGenerate = document.getElementById('generate');
var btnCancel = document.getElementById('cancel');

//al click di genera
btnGenerate.addEventListener('click',
  function () {
    //acquisisco i valori inseriti dall'utente
    var userName = document.getElementById('user-name').value;
    var distance = parseInt(document.getElementById('distance').value);
    var age = document.getElementById('age').value;

    //calcolo il prezzo totale del biglietto
    var price = distance * fare;

    var discount = 0;
    var offer = ''
    if (age == 'underage') {
      discount = price * discountU18;
      offer = 'Sconto Giovani'
    } else if (age == 'over') {
      discount = price * discountOver65;
      offer = 'Sconto Silver'
    } else {
      offer = 'Biglietto Standard'
    }
    price = (price - discount).toFixed(2);

    //genero i dati della carrozza e codice cp
    var car = Math.ceil(Math.random() * 9)
    var cp = Math.floor(Math.random() * (99999 - 90000) + 90000);
    
    //stampo i dati del biglietto
    document.getElementById('ticket-details').classList.add('visible')
    document.getElementById('passenger-name').innerHTML = userName;
    document.getElementById('discount').innerHTML = offer;
    document.getElementById('car').innerHTML = car
    document.getElementById('cp').innerHTML = cp
    document.getElementById('price').innerHTML = price
  }
);

//al click di annulla
btnCancel.addEventListener('click',
  function () {
    //resetto i campi input
    document.getElementById('user-name').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('age').value = '';
    //nascondo il biglietto
    document.getElementById('ticket-details').classList.remove('visible')
  }
)
