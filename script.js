// console.log(document.getElementById (`message`).innerHTML);
// const user_age = prompt("Qual'è la tua età?")
// console.log(user_age);
// const user_kilometers = prompt("Qual'è il numero di chilometri che vuoi percorrere?")
// console.log(user_kilometers);
// const ticket_price = user_kilometers * 0.21;
// console.log(ticket_price);
// if (user_age < "18") {
//     console.log (ticket_price - ticket_price * 20 / 100);
// }
// else if (user_age > "65") {
//     console.log (ticket_price - ticket_price * 40 / 100);
// }
// else {
//     console.log (ticket_price);
// }
// message.innerHTML = `Il prezzo del tuo biglietto sarà: ${ticket_price}`



const button_spawn = document.getElementById (`spawn`);
button_spawn.addEventListener (`click`, function () {
    const name_input = document.getElementById (`pax_name`);
    const name = name_input.value;
    console.log(name);


const input_kilometers = document.getElementById (`kilometers`);
const user_kilometers = parseInt (input_kilometers.value);
console.log(user_kilometers);

const age_range = document.getElementById (`age_range`);
const input_age_range = age_range.value;
console.log(input_age_range);

var ticket_price = user_kilometers * 0.21;
var discount = `Standard Price`
const carriage = Math.floor(Math.random() * 9) + 1;
const cp = Math.floor(Math.random() * (100000 - 90000 + 1) ) + 90000;

if (input_age_range == `under_age`) {
    console.log(ticket_price - ticket_price * 20 / 100);
    ticket_price = ticket_price - ticket_price * 20 / 100;
    discount = `Sconto Minorenne`;
} else if (input_age_range == `over_65`) {
    console.log(ticket_price - ticket_price * 40 / 100);
    ticket_price = ticket_price - ticket_price * 40 / 100;
    discount = `Sconto Silver`;
} else {
    console.log(ticket_price);
}
    document.getElementById('passenger_name').innerHTML = name;
    document.getElementById('discount').innerHTML = discount;
    document.getElementById('ticket_price').innerHTML = ticket_price.toFixed(2);
    document.getElementById('carriage').innerHTML = carriage;
    document.getElementById('cp_code').innerHTML = cp;
}
);

  const btn_cancel = document.getElementById('cancel');
  btn_cancel.addEventListener('click',
  function () {

    document.getElementById('passenger_name').innerHTML = '';
    document.getElementById('discount').innerHTML = '';
    document.getElementById('ticket_price').innerHTML = '';
    document.getElementById('carriage').innerHTML = '';
    document.getElementById('cp_code').innerHTML = '';
  
    document.getElementById('passenger_name').innerHTML = '';
    document.getElementById('kilometers').innerHTML = '';
    document.getElementById('age_range').innerHTML = '';
   }
  );