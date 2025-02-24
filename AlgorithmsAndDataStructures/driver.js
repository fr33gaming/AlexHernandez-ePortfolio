// import the getters and setters from our other files.
import { Monkey } from './Monkey.js';
import { Dog } from './Dog.js';
import { dogs } from './items.js';
import { monkeys } from './items.js';


// Initialize the button by grabbing them from the html file by ID
const dogButton = document.getElementById("dog-button");
const monkeyButton = document.getElementById("monkey-button");

// grab the element by id
const intakeContainer = document.getElementById("intake-container");

//initialize 
let dog = new Dog();
let monkey = new Monkey();

/*
// adding sample animals to table
let dog1 = new Dog("Max", "Chihuahua", "Male", "2", "20", "2025-02-08", "United States", "Intake", false, "United States");
let dog2 = new Dog("Lucky", "German Shepard", "Male", "1", "123", "2025-01-08", "United States", "Phase I", false, "United States");
let dog3 = new Dog("Missy", "Labrador", "Female", "3", "90", "2024-02-08", "United States", "In-Service", true, "United States");
*/



//console.log(dogs);

/*
// created function to append table data to newley created table row
function addDogSamples(dog) {

    // grab the element we want to add into
    const dogTable =  document.getElementById("dog-table");
     
    // create the new element
    const newDogRow = document.createElement("tr");
    
    // add what will go into the new created element
    newDogRow.innerHTML = `
                            <td>${dog.name}</td>
                            <td>${dog.breed}</td>
                            <td>${dog.gender}</td>
                            <td>${dog.age}</td>
                            <td>${dog.weight}</td>
                            <td>${dog.trainingStatus}</td>
                            <td>${dog.reserved}</td>
                            <td>${dog.inServiceLocation}</td>
                          `;
    
    dogTable.appendChild(newDogRow); // add the created values
}


//Adding the examples into our table through html
addDogSamples(dog1);
addDogSamples(dog2);
addDogSamples(dog3);

*/

//function creates table with data from the list of objects
function addDogObjects(dogs) {

    const dogTable =  document.getElementById("dog-table");

    deleteChildElements(dogTable);

    const header = document.createElement("tr");

    header.innerHTML = `
                        <th>Name</th>
                        <th>Breed</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Training Status</th>
                        <th>Reserve Status</th>
                        <th>Location</th>
                        `;

    dogTable.append(header);

    for(let i = 0; i < dogs.length; i++) {

        const newDogRow = document.createElement("tr");

        // add what will go into the new created element
        newDogRow.innerHTML = `
                            <td>${dogs[i].name}</td>
                            <td>${dogs[i].breed}</td>
                            <td>${dogs[i].gender}</td>
                            <td>${dogs[i].age}</td>
                            <td>${dogs[i].weight}</td>
                            <td>${dogs[i].trainingStatus}</td>
                            <td>${dogs[i].reserved}</td>
                            <td>${dogs[i].inServiceLocation}</td>
                            `;

    dogTable.appendChild(newDogRow); // add the created values
    }
}

//function creates table with data from the list of objects
function addMonkeyObjects(dogs) {

    const monkeyTable =  document.getElementById("monkey-table");

    deleteChildElements(monkeyTable);

    const header = document.createElement("tr");

    header.innerHTML = `
                        <th>Name</th>
                        <th>Species</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Training Status</th>
                        <th>Reserve Status</th>
                        <th>Location</th>
                        `;

    monkeyTable.append(header);

    for(let i = 0; i < monkeys.length; i++) {

        const newMonkeyRow = document.createElement("tr");

        // add what will go into the new created element
        newMonkeyRow.innerHTML = `
                            <td>${monkeys[i].name}</td>
                            <td>${monkeys[i].species}</td>
                            <td>${monkeys[i].gender}</td>
                            <td>${monkeys[i].age}</td>
                            <td>${monkeys[i].weight}</td>
                            <td>${monkeys[i].trainingStatus}</td>
                            <td>${monkeys[i].reserved}</td>
                            <td>${monkeys[i].inServiceLocation}</td>
                            `;

    monkeyTable.appendChild(newMonkeyRow); // add the created values
    }
}

addDogObjects(dogs);
addMonkeyObjects(monkeys);

// console.log(dogs);


// function deletes the contents of an html element 
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// the fucntion will display the form for the user to enter in a new dog into the
function displayDogIntakeform() {

    // clears the contents of the intakeContainer
    deleteChildElements(intakeContainer);
    
    // create a new div 
    const newDogIntake = document.createElement("div");

    // sets the id of the div
    newDogIntake.id = "dog-intake-form";

    // set the html that will be inserted into the new div
    newDogIntake.innerHTML = `
                                <form id="intake-form-dog">
                                    <label for="dog-name">Please enter dog's name: </label>
                                    <input class="dog-form" id="dog-name" type="text" name="name">
                                    <label for="dog-breed">Please enter dog's breed: </label>
                                    <input class="dog-form" id="dog-breed" type="text" name="bread">
                                    <label for="dog-gender">Choose the dog's Gender: </label>
                                    <select class="dog-form" name="dog-gender" id="dog-gender" required>
                                        <option value="" disabled selected hidden>Choose option below</option> 
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <label for="dog-age">Please enter dog's age: </label>
                                    <input class="dog-form" id="dog-age" type="number" name="age">
                                    <label for="dog-weight">Please enter dog's weight: </label>
                                    <input class="dog-form" id="dog-weight" type="number" name="weight">
                                    <label for="dog-acquisitionDate">Please enter date acquired: </label>
                                    <input class="dog-form" id="dog-acquisitionDate" type="date" name="date">
                                    <label for="dog-acquisitionLocation">Please enter where dog was acquired: </label>
                                    <input class="dog-form" id="dog-acquisitionLocation" type="text" name="location">
                                    <label for="dog-training">Choose the dog's Training Status: </label>
                                    <select class="dog-form" name="dog-training" id="dog-training" required>
                                        <option value="" disabled selected hidden>Choose option below</option> 
                                        <option value="Intake">Intake</option>
                                        <option value="Phase I">Phase I</option>
                                        <option value="Phase II">Phase II</option>
                                        <option value="Phase III">Phase III</option>
                                        <option value="Phase IV">Phase IV</option>
                                        <option value="Phase V">Phase V</option>
                                        <option value="In-Service">In-Service</option>
                                        <option value="Farm">Farm</option>
                                    </select>
                                    <label for="dog-reserve">Choose dog's Reserve status: </label>
                                    <select class="dog-form" name="dog-reserve" id="dog-reserve" required>
                                        <option value="" disabled selected hidden>Choose option below</option> 
                                        <option value="true">Reserved</option>
                                        <option value="false">Not Reserved</option>
                                    </select>
                                    <label for="dog-inServiceLocation">Please enter where dog will be In-Service: </label>
                                    <input class="dog-form" id="dog-inServiceLocation" type="text" name="inService-location">
                                    <input id="dog-submit" type="submit" value="Submit">
                                </form>
                             `;

    //add the html to the newly created div
    intakeContainer.appendChild(newDogIntake);

    // Added this to disable button so that it doesnt keep adding the html code over and over again
    dogButton.disabled = true;
    monkeyButton.disabled = false;

    // grab the container where the for is held
    const dogForm = document.getElementById("intake-form-dog");

    // event listener waits for the button to be pressed 
    dogForm.addEventListener("submit", (e) => {

        // does not allow for page to referesh once the button is pressed 
        e.preventDefault();

        // save the values form the form 
        let dogName = document.getElementById("dog-name").value;
        let dogBreed = document.getElementById("dog-breed").value;
        let dogGender = document.getElementById("dog-gender").value;
        let dogAge = document.getElementById("dog-age").value;
        let dogWeight = document.getElementById("dog-weight").value;
        let dogAcquisitionDate = document.getElementById("dog-acquisitionDate").value;
        let dogAcquisitionLocation = document.getElementById("dog-acquisitionLocation").value;
        let dogTrainingStatus = document.getElementById("dog-training").value;
        let dogReserveStatus = document.getElementById("dog-reserve").value;
        let dogInServiceLocation = document.getElementById("dog-inServiceLocation").value;

        // add the values to an object
        dog = new Dog(dogName, dogBreed, dogGender, dogAge, dogWeight, dogAcquisitionDate, dogAcquisitionLocation, dogTrainingStatus, dogReserveStatus, dogInServiceLocation);

        dogs.push(dog);

        //console.log(dogs);
        
        /*
        // grab the table that we want to add the information to
        const dogTable =  document.getElementById("dog-table");
        


        // Create new table row element within our table
        const newDogRow = document.createElement("tr");
        
        // add the table data into the row
        newDogRow.innerHTML = `
                                <td>${dog.name}</td>
                                <td>${dog.gender}</td>
                                <td>${dog.age}</td>
                                <td>${dog.weight}</td>
                                <td>${dog.trainingStatus}</td>
                                <td>${dog.reserved}</td>
                                <td>${dog.inServiceLocation}</td>
                              `;
        
        // add the data onto the table in the html file
        dogTable.appendChild(newDogRow);
        */

    

        addDogObjects(dogs);

        
        //clears the form entries
        dogForm.reset();

    
    }); 

    

}

// this function handles displaying the monkey input form when the button is pressed
function displayMonkeyIntakeform() {

    // clears the div of any other code
    deleteChildElements(intakeContainer);
    
    // creates a new div element
    const newMonkeyIntake = document.createElement("div");

    // sets the id of the div
    newMonkeyIntake.id = "monkey-intake-form";

    // sets the html code to add inside of the new div
    newMonkeyIntake.innerHTML = `
                                <form id="intake-form-monkey">
                                    <label for="monkey-name">Please enter monkey's name: </label>
                                    <input class="monkey-form" id="monkey-name" type="text" name="name">
                                    <label for="monkey-species">Choose the monkey's species: </label>
                                    <select class="monkey-form" name="monkey-species" id="monkey-species" required>
                                        <option value="" disabled selected hidden>Choose option below</option> 
                                        <option value="Capuchin">Capuchin</option>
                                        <option value="Guenon">Guenon</option>
                                        <option value="Macaque">Macaque</option>
                                        <option value="Marmoset">Marmoset</option>
                                        <option value="Squirrel Monkey">Squirrel Monkey</option>
                                        <option value="Tamarin">Tamarin</option>
                                    </select>
                                    <label for="monkey-gender">Choose the monkey's gender: </label>
                                    <select class="monkey-form" name="monkey-gender" id="monkey-gender" required>
                                        <option value="" disabled selected hidden>Choose option below</option> 
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <label for="monkey-age">Please enter monkey's age: </label>
                                    <input class="monkey-form" id="monkey-age" type="number" name="age">
                                    <label for="monkey-weight">Please enter monkey's weight: </label>
                                    <input class="monkey-form" id="monkey-weight" type="number" name="weight">
                                    <label for="monkey-tailLength">Please enter monkey's tail length: </label>
                                    <input class="monkey-form" id="monkey-tailLength" type="text" name="tailLength">
                                    <label for="monkey-height">Please enter monkey's height: </label>
                                    <input class="monkey-form" id="monkey-height" type="text" name="height">
                                    <label for="monkey-bodyLength">Please enter monkey's body length: </label>
                                    <input class="monkey-form" id="monkey-bodyLength" type="text" name="bodyLength">
                                    <label for="monkey-acquisitionDate">Please enter date acquired: </label>
                                    <input class="monkey-form" id="monkey-acquisitionDate" type="date" name="date">
                                    <label for="monkey-acquisitionLocation">Please enter where monkey was acquired: </label>
                                    <input class="monkey-form" id="monkey-acquisitionLocation" type="text" name="location">
                                    <label for="monkey-training">Choose the monkey's Training Status: </label>
                                    <select class="monkey-form" name="monkey-training" id="monkey-training" required>
                                        <option value="" disabled selected hidden>Choose option below</option> 
                                        <option value="intake">Intake</option>
                                        <option value="Phase I">Phase I</option>
                                        <option value="Phase II">Phase II</option>
                                        <option value="Phase III">Phase III</option>
                                        <option value="Phase IV">Phase IV</option>
                                        <option value="Phase V">Phase V</option>
                                        <option value="In-Service">In-Service</option>
                                        <option value="Farm">Farm</option>
                                    </select>
                                    <label for="monkey-reserve">Choose monkey's Reserve status: </label>
                                    <select class="monkey-form" name="monkey-reserve" id="monkey-reserve" required>
                                        <option value="" disabled selected hidden>Choose option below</option> 
                                        <option value="true">Reserved</option>
                                        <option value="false">Not Reserved</option>
                                    </select>
                                    <label for="monkey-inServiceLocation">Please enter where monkey will be In-Service: </label>
                                    <input class="monkey-form" id="monkey-inServiceLocation" type="text" name="inService-location">
                                    <input id="monkey-submit" type="submit" value="Submit">
                                </form>
                             `;

    
    intakeContainer.appendChild(newMonkeyIntake);
    monkeyButton.disabled = true;
    dogButton.disabled = false;

    const monkeyForm = document.getElementById("intake-form-monkey");

    monkeyForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // taking in the values from the inputs of the form
        let monkeyName = document.getElementById("monkey-name").value; // using the id to get the value of the element
        let monkeySpecies = document.getElementById("monkey-species").value;
        let monkeyGender = document.getElementById("monkey-gender").value;
        let monkeyAge = document.getElementById("monkey-age").value;
        let monkeyWeight = document.getElementById("monkey-weight").value;
        let monkeyTailLength = document.getElementById("monkey-tailLength").value;
        let monkeyHeight = document.getElementById("monkey-height").value;
        let monkeyBodyLength = document.getElementById("monkey-bodyLength").value;
        let monkeyAcquisitionDate = document.getElementById("monkey-acquisitionDate").value;
        let monkeyAcquisitionLocation = document.getElementById("monkey-acquisitionLocation").value;
        let monkeyTrainingStatus = document.getElementById("monkey-training").value;
        let monkeyReserveStatus = document.getElementById("monkey-reserve").value;
        let monkeyInServiceLocation = document.getElementById("monkey-inServiceLocation").value;

        // adds the input values into an object
        monkey = new Monkey(monkeyName, monkeySpecies, monkeyGender, monkeyAge, monkeyWeight, monkeyTailLength, monkeyHeight, monkeyBodyLength, monkeyAcquisitionDate, monkeyAcquisitionLocation, monkeyTrainingStatus, monkeyReserveStatus, monkeyInServiceLocation);

        monkeys.push(monkey);

        addMonkeyObjects(monkeys);
        
        // resets all of the entries for the form
        monkeyForm.reset();
       
    }) 


}


// event listeners
dogButton.addEventListener("click", displayDogIntakeform);
monkeyButton.addEventListener("click", displayMonkeyIntakeform);





