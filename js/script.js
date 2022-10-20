let numeriDaCreare = 5;
let numeri = [];
const pHtml = document.getElementById('numeriRandomici');
const numUtenteHtml = document.getElementById('numeriUtente');
const btn = document.getElementById('send');
let numeriUtenteInseriti = [];
let numeriInclusi= [];
let nonInclusi = [];
let ris = document.getElementById('risultato');
const ris1 = document.getElementById('risultato1');
const ris2 = document.getElementById('risultato2');
const stop = document.getElementById('stop');
const btnrigioca = document.getElementById('rigioca');

function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
}
while(numeri.length < numeriDaCreare){
    let numero = getRndInteger(1,100);
    if(!numeri.includes(numero)){
        numeri.push(numero)
    }

}
console.log(numeri)
pHtml.innerText=(numeri)

function clear (){
    pHtml.innerText = ''
}
setTimeout(clear , 10000)
function inserisci(){

    let NumUtente = parseInt(numUtenteHtml.value);
if(numeriUtenteInseriti.length == numeri.length){
    stop.innerText = 'Hai inserito tutti i numeri disponibili.'
    stop.classList.add('stop')
}else{
    numeriUtenteInseriti.push(NumUtente);
    numUtenteHtml.value = '';
}

if(numeri.includes(NumUtente)){
    numeriInclusi.push(NumUtente)
    pHtml.innerHTML = 'Incluso'
    pHtml.classList.add('verde')
}else{
    nonInclusi.push(NumUtente)
    pHtml.innerHTML = 'Non incluso'
    pHtml.classList.add('rosso')
    pHtml.classList.remove('verde')
}
if(numeri == numeriInclusi){
    console.log('hai vinto')
}
if(numeriInclusi.length > 4 || nonInclusi.length > 4){
    btn.removeEventListener('click',inserisci)
}


console.log(numeriInclusi, nonInclusi)
//console.log(nonInclusi)
risultato.innerHTML = numeriUtenteInseriti
ris1.innerHTML = numeriInclusi;
ris1.classList.add('verde')
ris2.innerHTML = nonInclusi;

ris2.classList.add('rosso')
//console.log(numeriUtenteInseriti)

}
btn.addEventListener('click', inserisci)
btnrigioca.addEventListener('click', function rigioca(){
    window.location.reload()

})
