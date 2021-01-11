// funzioni
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
function pushBombs(nProof,min,max){
  var arrayBombs =[];
  while (arrayBombs.length < 16) {
    var bombs = randomNumber(min,max);
    if (arrayBombs.includes(bombs) === false) {
      arrayBombs.push(bombs);
    }
  }
  return arrayBombs;
}
// funzioni
var rangeString;
var range;
var bombsList;
var maxProof;
alert('Benvenuto a campo minato! Scegli la difficoltà e segui le istruzioni per giocare,il gioco finisce se trovi la bomba.Pronto? Via! E buona fortuna')
var difficoltà = prompt('scegli la difficoltà: con 0 o premi invio per difficoltà facile con 1 difficoltà medio con 2 difficoltà difficile')

switch (difficoltà) {
  case '0':
  console.log('modalità facile selezionata');
  maxProof = 84;
  range = 100;
  rangeString = 'da 1 a ' + 100;
  bombsList = pushBombs(84,1,100);
  console.log(bombsList);
  break;
  case '1':
  console.log('modalità media selezionata');
  maxProof = 64;
  range = 80;
  rangeString = 'da 1 a ' + 80;
  bombsList = pushBombs(64,1,80);
  console.log(bombsList);
  break;
  case '2':
  console.log('modalità difficile selezionata');
  maxProof = 34;
  range = 50;
  rangeString = 'da 1 a ' + 50;
  bombsList = pushBombs(34,1,50);
  console.log(bombsList);
  break;
  default:
  console.log('modalità default selezionata');
  maxProof = 84;
  range = 100;
  rangeString = 'da 1 a ' + 100;
  bombsList = pushBombs(84,1,100);
  console.log(bombsList);
  break;
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var missiliUtente =[];
var missile;
while ( missiliUtente.length < maxProof && bombsList.includes(missile) !== true) {
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  missile = parseInt(prompt('Giochiamo! inserisci un numero ' + rangeString));
  if (bombsList.includes(missile) === true) {
    alert('Kaboom! Hai perso! peccato ,hai totalizzato '+ missiliUtente.length + ' punti!')
  }else if (missiliUtente.includes(missile) === true) {
    alert('Numero già inserito! reinserisci un altro numero')
  }else{
    if (isNaN(missile)) {
      alert('inserisci un numero per favore')
    }else if (missile > range) {
      alert('inserisci un numero nel range indicato')
    }else{
      alert('Incrocia le dita...I tuoi numeri fino ad ora ' + missiliUtente.toString())
      // L’utente non può inserire più volte lo stesso numero.
      if (missiliUtente.includes(missile) !== true) {
        missiliUtente.push(missile);
        console.log(missiliUtente);
      }
      //   // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    }
    if (missiliUtente.length === maxProof) {
      alert('Fischia! hai vinto!! Sei sopravvissuto!!!!!! Hai totalizzato ' + maxProof + ' punti su '+ maxProof +' !')
    }
  }
}
// ------------------------------------------------
