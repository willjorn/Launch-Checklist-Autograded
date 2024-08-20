// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, pilot, copilot, fuelLevel, cargoMass);
    });

    // Fetch the list of planets
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function(result) {
        let listedPlanets = result;
        console.log(listedPlanets);

        // Pick a random planet and add destination information
        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
            document, 
            selectedPlanet.name, 
            selectedPlanet.diameter, 
            selectedPlanet.star, 
            selectedPlanet.distance, 
            selectedPlanet.moons, 
            selectedPlanet.image
        );
    });
});

