// Business Logic
function Destinations() {
  this.destinations = [];
  this.destinationID = 0;
}

Destinations.prototype.addDestination = function(destination) {
  destination.id = this.assignID();
  this.destinations.push(destination);
}

Destinations.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}

function Places(name, location, timeOfYear, landmarks, notes) {
  this.name = name;
  this.location = location;
  this.timeOfYear = timeOfYear;
  this.landmarks = landmarks;
  this.notes = notes;
}

// UI Logic
let destination = new Destinations();

$(document).ready(function() {
  $("form#newLocation").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const location = $("input#location").val();
    const landmarks = $("input#landmarks").val();
    const timeOfYear = $('input[name="timeOfYear"]:checked').val();
    const notes = $("input#notes").val();

    let newPlace = new Places(name, location, timeOfYear, landmarks, notes);
    console.log(newPlace);
    
    destination.addDestination(newPlace);
    console.log(destination.destinations);
  })
})