var richiestaEmail = prompt('Inserici la tua Email');
var emailUtenti = [ "pinco@gmail.com", "pallino@gmail.com", "gigino@gmail.com", "boldino@gmail.com", "vertino@gmail.com", "giullino@gmail.com",];
var convalida = false;


for (var i = 0; i < emailUtenti.length; i++) {

  var emailValida = emailUtenti[i];

  if (richiestaEmail == emailValida) {
    convalida = true;
    console.log('hai diritto ad acccedere');

  }

  else if (richiestaEmail !== emailValida) {
    convalida = false;
    console.log('non hai diritto ad acccedere');

  }
}


// var computerNumeriDadi = Math.floor(Math.random() * 6) + 1;
// console.log(computerNumeriDadi);
//
// var utenteNumeriDadi = parseInt(prompt('Inserisci un numero da 1 a 6'));
//
// for (var i = 0; i < computerNumeriDadi.lenght; i++) {
//   console.log(computerNumeriDadi);
// }
