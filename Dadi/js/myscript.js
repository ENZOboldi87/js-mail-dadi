// variabili
var numeriUtenti = parseInt(prompt('inserisci un numero da 1 a 6'));
var computerNumDadi = Math.floor(Math.random() * 6) + 1;
var vittoria = false;

// risultati
  if (numeriUtenti > computerNumDadi) {
    // in caso di vittoria
    vittoria = true;
    console.log('il computer ha tirato ' + computerNumDadi );
    console.log('tu hai tirato ' + numeriUtenti );
    console.log('hai vinto');

  }
  else if (numeriUtenti < computerNumDadi) {
    // in caso di sconfitta
    vittoria = false;
    console.log('il computer ha tirato ' + computerNumDadi );
    console.log('tu hai tirato ' + numeriUtenti );
    console.log('hai perso');
  }
  else {
    // in caso di pareggio
    console.log('il computer ha tirato ' + computerNumDadi );
    console.log('tu hai tirato '  + numeriUtenti );
    console.log('pareggio');
  }
