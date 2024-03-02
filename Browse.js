//open json  file
//for each element of this json file
//create an album container and add onto the parent container


fetch("CarsAndTruckz.json")
.then(response => response.json())
.then(myVehicles => loadCarzAndTruckz(myVehicles))


function loadCarzAndTruckz(myVehicles){
    //Get "col" node of Browse.html
    var vehicleCatalog = document.getElementById("col");
    //Get vehicles from json file
    let vehicles = myVehicles.vehicles;
    console.log(vehicles);

    for (var i = 0; i<vehicles.length; i++){
        //Get all json info
        let make = vehicles[i].make;
        let model = vehicles[i].model;
        let year = vehicles[i].year;
        let color = vehicles[i].color;
        let price = vehicles[i].price;
        let path = vehicles[i].path;
        let card = "vehicle" + i.toString;

        let AddVehicle = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddVehicle.classList.add("col"); 
        // create Bootstrap card 
        AddVehicle.innerHTML = `
            <div id=${card} class="card shadow-sm">
            <img src=${path} class="card-img-top" alt="${color}"></img>
            <div class="card-body">
            <p class="card-text"> <strong>${year} ${make} ${model} ${color} ${price}</strong></p>
            </div>
            </div>`;
        //append new division
        vehicleCatalog.appendChild(AddVehicle);
    }
}