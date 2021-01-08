// funzioni
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
// funzioni

var maxProof = 10;
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati (tadaaa!)
var bombsList =[];
var flag = false;
var a = 0;
while (a < 16) {
  var bombs = randomNumber(1,100);
  if (bombs === bombsList[i]) {
    falg = true;
  }else{
    bombsList.push(bombs);
    a++;
  }
}
console.log(bombsList);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var missiliUtente =[];
var bombaPresa = false;
var numeroDoppio = false;
for (x = 0; x < maxProof; x++) {
  if (bombaPresa !== false) {
    alert('Kaboom! Hai perso! peccato ,hai totalizzato '+ missiliUtente.length + ' punti!')
    maxProof = 0;
  }else if (numeroDoppio !== false) {
    alert('Hai barato! Hai perso! peccato ,hai totalizzato '+ missiliUtente.length + ' punti!')
    maxProof = 0;
  }else{
    var missile = parseInt(prompt('Giochiamo! inserisci un numero'));
    if (isNaN(missile)) {
      alert('inserisci un numero per favore')
      x = 0;
    }else {
      alert('Prosegui')

      // L’utente non può inserire più volte lo stesso numero.
      for (var i = 0; i < missiliUtente.length; i++) {
        if (missile === missiliUtente[i]) {
          numeroDoppio = true;
        }
      }
      if (numeroDoppio !== true) {
        missiliUtente.push(missile);
        console.log(missiliUtente);
      }

      // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
      for (var i = 0; i < bombsList.length; i++) {
        if (missile === bombsList[i]) {
          bombaPresa = true;
        }
      }
      //   // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    }
    if (missiliUtente.length === maxProof) {
      alert('Fischia! hai vinto!! Sei sopravvissuto!!!!!! Hai totalizzato il massimo dei punti!')
    }
  }
}
// ------------------------------------------------
// Il computer deve generare 16 numeri casuali tra 1 e 100. FATTO.
// I numeri non possono essere duplicati (tadaaa!)          FATTO.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.        FATTO.
// L’utente non può inserire più volte lo stesso numero. FATTO.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. FATTO.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti. FATTO.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. FATTO.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
