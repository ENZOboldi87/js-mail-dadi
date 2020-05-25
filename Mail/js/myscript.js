// variabili
var richiestaEmail = prompt('Inserici la tua Email');
var emailUtenti = [ "pinco@gmail.com", "pallino@gmail.com", "gigino@gmail.com", "boldino@gmail.com", "vertino@gmail.com", "giullino@gmail.com",];
var convalida = false;
var risMessaggio = document.getElementById('Risultato');
var messaggio;


for (var i = 0; i < emailUtenti.length; i++) {

  var emailValida = emailUtenti[i];

  if (richiestaEmail == emailValida) {
    // email presente
    convalida = true;
    messaggio = ('hai diritto ad acccedere');
  }

  else if (richiestaEmail !== emailValida) {
    // email mancante
    convalida = false;
    messaggio = ('non hai diritto ad acccedere');

  }

    risMessaggio.innerHTML = messaggio;

}
