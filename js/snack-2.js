// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const uefaGroupI = [
    { 
        name: "Norway", 
        points: 0,        
        foulsSuffered: 0 
    },
    { 
        name: "Italy", 
        points: 0, 
        foulsSuffered: 0 
    },
    { 
        name: "Israel", 
        points: 0, 
        foulsSuffered: 0 
    },
    { 
        name: "Estonia", 
        points: 0, 
        foulsSuffered: 0 
    },
    { 
        name: "Moldova", 
        points: 0, 
        foulsSuffered: 0 
    }
];


// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (const team of uefaGroupI) {
    const randomPoints = getRandomIntInclusive(0, 24); //3 punti al massimo per 8 partite del Girone I fanno 24 punti al massimo
    team.points = randomPoints;

    const randomFoulsSuffered = getRandomIntInclusive(0, 240); // stimo 30 falli al massimo come media per ogni partita
    team.foulsSuffered = randomFoulsSuffered;

}


// Functions

//Genera intero random nell'internvallo [min, max]. 
function getRandomIntInclusive(min, max) { 
  const minCeiled = Math.ceil(min); 
  const maxFloored = Math.floor(max); 
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}





// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

