// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bikeObjects = [
    
    { 
        name: `Trek Domane SL 6`, 
        weight: 8.9 
    },
    
    { 
        name: `Specialized Rockhopper`, 
        weight: 13.2 
    },
    
    { 
        name: `Cannondale Trail 5`, 
        weight: 13.5 
    },
    
    { 
        name: `Bianchi Oltre XR4`, 
        weight: 6.8 
    },
    
    { 
        name: `Giant Talon 2`, 
        weight: 13.0 
    },
    
    { 
        name: `Scott Spark 970`, 
        weight: 12.6 
    },
    
    { 
        name: `Cube Reaction Pro`, 
        weight: 11.9 
    },
    
    { 
        name: `Orbea Orca M30`, 
        weight: 8.4 
    },
    
    { 
        name: `Santa Cruz Hightower`, 
        weight: 14.2 
    },
    
    { 
        name: `Pinarello Dogma F`, 
        weight: 6.8 
    }
];

// Stampare a schermo la bici con peso minore.
let lightestBike = bikeObjects[0];
for (const bike of bikeObjects) {

    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }

    console.log(bike.name, bike.weight);
    
}

console.log("Lightest bike name:", lightestBike.name, ", Lightest bike weight:", lightestBike.weight, "kg");