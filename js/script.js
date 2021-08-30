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
    if (age == 'underage') {
      discount = price * discountU18;
    } else if (age == 'over') {
      discount = price * discountOver65;
    }
    price = (price - discount).toFixed(2);
    
    //stampo i dati del biglietto
    document.getElementById('ticket-details').classList.add('visible')
    document.getElementById('guest-name').innerHTML = userName;
    document.getElementById('discount').innerHTML = age;
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
