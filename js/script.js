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

// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire millemila numeri ogni volta potrebbe essere un po’ scocciante
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve
