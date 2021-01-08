// funzioni
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
// funzioni




// Il computer deve generare 16 numeri casuali tra 1 e 100.
var bombsList =[];
for (var i = 0; i < 16; i++) {
  var bombs = randomNumber(1,100);
  bombsList.push(bombs);
}
console.log(bombsList);

// I numeri non possono essere duplicati (tadaaa!)





// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
  var missiliUtente =[];
  var bombaPresa = false;
  var numeroDoppio = false;
  for (x = 0; x < 10; x++) {   // TODO: Sostituire il 10 con 84
    var missile = parseInt(prompt('Giochiamo! inserisci un numero'));

// L’utente non può inserire più volte lo stesso numero.
  for (var i = 0; i < missiliUtente.length; i++) {
    if (missile === missiliUtente[i]) {
    numeroDoppio = true;
      }
    }
    if (numeroDoppio === true) {
      alert('non barare!')
      break;   // TODO: risolvere questi break
    }else {
      missiliUtente.push(missile);
      console.log(missiliUtente);
    }


// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  for (var i = 0; i < bombsList.length; i++) {
    if (missile === bombsList[i]) {
      bombaPresa = true;
      }
    }
    if (bombaPresa === true) {
      // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
      alert('Kaboom! Hai perso! peccato ,hai totalizzato '+ missiliUtente.length + ' punti!')
      break; // TODO: risolvere questi break
    }else {
      alert('Che Fortuna! Prosegui')
    }

}
if (missiliUtente.length === 10) {
  alert('Fischia! hai vinto!! Sei sopravvissuto!!!!!! Hai totalizzato il massimo dei punti!')
}





// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire millemila numeri ogni volta potrebbe essere un po’ scocciante
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve
