// funzioni
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}
function pushBombs(nProof,min,max){
  maxProof = nProof;
  bombsList =[];
  rangeString = 'da 1 a ' + max;
  range = max;
  var a = 0;
  while (a < 16) {
    var bombs = randomNumber(min,max);
    if (bombsList.includes(bombs) === false) {
      bombsList.push(bombs);
      a++;
    }
  }
}
// funzioni
var rangeString;
var bombsList;
var maxProof;
alert('Benvenuto a campo minato! Scegli la difficoltà e segui le istruzioni per giocare,il gioco finisce se trovi la bomba o se ripeti i numeri inseriti Pronto? Via! E buona fortuna')
var difficoltà = prompt('scegli la difficoltà: con 0 difficoltà facile con 1 difficoltà medio con 2 difficoltà difficile')

switch (difficoltà) {
  case '0':
  console.log('modalità facile selezionata');
  pushBombs(84,1,100);
  console.log(bombsList);
  break;
  case '1':
  console.log('modalità media selezionata');
  pushBombs(64,1,80);
  console.log(bombsList);
  break;
  case '2':
  console.log('modalità difficile selezionata');
  pushBombs(34,1,50);
  console.log(bombsList);
  break;
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var missiliUtente =[];
for (x = 0; x < maxProof; x++) {
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
  var missile = parseInt(prompt('Giochiamo! inserisci un numero ' + rangeString));
  if (bombsList.includes(missile) === true) {
    alert('Kaboom! Hai perso! peccato ,hai totalizzato '+ missiliUtente.length + ' punti!')
    maxProof = 0;
  }else if (missiliUtente.includes(missile) === true) {
    alert('Hai barato! Hai perso! peccato ,hai totalizzato '+ missiliUtente.length + ' punti!')
    maxProof = 0;
  }else{
    if (isNaN(missile)) {
      alert('inserisci un numero per favore')
      x = 0;
    }else if (missile > range) {
      alert('inserisci un numero nel range indicato')
    }else{
      alert('Prosegui')
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
