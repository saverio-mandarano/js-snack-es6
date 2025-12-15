// BONUS 
 
// Crea 10 oggetti che rappresentano una zucchina.
const zucchine = [
    
    { 
        varietà: "verdi", 
        peso: 0.5, 
        lunghezza: 15
    },
    
    {
        varietà: "chiare", 
        peso: 1, 
        lunghezza: 10
    },
    
    {
        varietà: "tonde", 
        peso: 1.1, 
        lunghezza: 11
    },
    
    {
        varietà: "lunghe-fiorentine", 
        peso: 1.8, 
        lunghezza: 12
    },
    
    {
        varietà: "trombetta", 
        peso: 1.4, 
        lunghezza: 13
    },
    
    {
        varietà: "gialle", 
        peso: 1.5, 
        lunghezza: 14
    },
    
    {
        varietà: "siciliane", 
        peso: 1.7, 
        lunghezza: 15
    },
    
    {
        varietà: "bianche-triestine", 
        peso: 1.6, 
        lunghezza: 16
    },
    
    {
        varietà: "patisson", 
        peso: 1.3, 
        lunghezza: 17
    },
    
    {
        varietà: "crookneck", 
        peso: 1.2, 
        lunghezza: 18
    }
];


// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
const smallZucchine = [];
const bigZucchine = [];
for (const zucchina of zucchine) {

    if (zucchina.lunghezza >= 15) {
        bigZucchine.push(zucchina);
    }
    else{
        smallZucchine.push(zucchina);
    }
}

console.log(smallZucchine);
console.log(bigZucchine);


// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
let sumSmallWeight = 0;
for (const zucchina of smallZucchine) {
    sumSmallWeight += zucchina.peso;
}
console.log(`il peso totale delle zucchine piccole è: ${sumSmallWeight.toFixed(1)}`);

let sumBigWeight = 0;
for (const zucchina of bigZucchine) {
    sumBigWeight += zucchina.peso;
}
console.log(`il peso totale delle zucchine grandi è: ${sumBigWeight.toFixed(1)}`);
