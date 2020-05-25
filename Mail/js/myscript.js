// variabili
var richiestaEmail = prompt('Inserici la tua Email');
var emailUtenti = [ "pinco@gmail.com", "pallino@gmail.com", "gigino@gmail.com", "boldino@gmail.com", "vertino@gmail.com", "giullino@gmail.com",];
var convalida = false;



for (var i = 0; i < emailUtenti.length; i++) {

// email convalidata
  if (richiestaEmail === emailUtenti[i]) {
    convalida = true;
    document.getElementById('Risultato').innerHTML = ('sei autorizzato')

  }

}
// se email non convalidata
if (convalida == false) {
  document.getElementById('Risultato').innerHTML = (' non sei autorizzato')

}
