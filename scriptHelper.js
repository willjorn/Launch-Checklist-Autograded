// Write your helper functions here!


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
}

 function validateInput(testInput) {

    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

    

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {
    // Get the elements from the DOM
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

       // Validate input fields
       if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
       validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
       alert("All fields are required!");
       return;
   }

   if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number" ||
       validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
       alert("Please enter valid information for each field!");
       return;
   }

    // Update pilot and copilot status with template literals
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // Convert fuelLevel and cargoMass to numbers
    let fuelLevelNumber = Number(fuelLevel);
    let cargoMassNumber = Number(cargoMass);

    // Assume shuttle is ready for launch
    let isReadyForLaunch = true;

    // Check fuel level
    if (fuelLevelNumber < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        isReadyForLaunch = false;
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    }

    // Check cargo mass
    if (cargoMassNumber > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        isReadyForLaunch = false;
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

    // Update launch status based on the checks
    if (isReadyForLaunch) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
        faultyItems.style.visibility = "hidden"; // Hide the list if everything is ready
    } else {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible"; // Show the list if there are issues
    }
}


    
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
         .then(function(response){
         return response.json();
         });
         return planetsReturned;
}

 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;