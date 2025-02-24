// import the getters and setters from our other file
import { Monkey } from './Monkey.js';
import { Dog } from './Dog.js';
//import { dogs } from './DogList.js';
//import { monkeys } from './MonkeyList.js';

//used for testing purposes
//const dogID = [];


// Initialize the button by grabbing them from the html file by ID
const dogButton = document.getElementById("dog-button");
const monkeyButton = document.getElementById("monkey-button");

// grab the element by id
const intakeContainer = document.getElementById("intake-container");

//initialize objects
let dog = new Dog();
let monkey = new Monkey();

// adds a dog to the database
async function addDog(dog) {
    await fetch("http://localhost:4000/addDog", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dog)
        
    });
}

// deletes a dog from the database
async function deleteDog(id) {
    await fetch(`http://localhost:4000/deleteDog/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        
    });
}

// retreives the dogs from the database
async function getDogs() {
    const res = await fetch("http://localhost:4000/getDogs");
    const dogDB = await res.json();
    //console.log(dogDB);
    addDogObjects(dogDB);

}

// adds a monkey to the database    
async function addMonkey(monkey) {
    await fetch("http://localhost:4000/addMonkey", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(monkey)
        
    });
}

// deletes a monkey from the database
async function deleteMonkey(id) {
    await fetch(`http://localhost:4000/deleteMonkey/${id}`, { // route to delete
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        
    });
}

// retreives the monkeys from the database
async function getMonkeys() {
    const res = await fetch("http://localhost:4000/getMonkeys");
    const monkeyDB = await res.json();
    //console.log(monkeyDB);
    addMonkeyObjects(monkeyDB);
}


//function creates table with data from the list of objects
function addDogObjects(dogs) {

    // grab the table by id
    const dogTable =  document.getElementById("dog-table");

    // deletes the contents of the table
    deleteChildElements(dogTable);

    // creates a new row for the table
    const header = document.createElement("tr");

    // adds the header to the table
    header.innerHTML = `
                        <th>Name</th>
                        <th>Breed</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Training Status</th>
                        <th>Reserve Status</th>
                        <th>Location</th>
                        <th>Options</th>
                        `;

    // adds the header to the table
    dogTable.append(header);

    // loops through the list of objects
    for(let i = 0; i < dogs.length; i++) {

        // creates a new row for the table
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
                            <td><button class="delete-button" id="${dogs[i]._id}"><span class="material-icons">delete</span></button></td>
                            `;
    //console.log(dogs[i]._id);

    //testing purposes
    //dogID.push(dogs[i]._id);

    // adds the created values to the table
    dogTable.appendChild(newDogRow); // add the created values

    }

    // grabs all of the delete buttons
    const deleteButtons = document.querySelectorAll(".delete-button");
    //console.log(deleteButtons);
    
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            //console.log(button.id);
            deleteDog(button.id);
            getDogs();
        })
    });

    //console.log(dogID);


}

//function creates table with data from the list of objects
function addMonkeyObjects(monkeys) {

    // grab the table by id
    const monkeyTable = document.getElementById("monkey-table");

    // deletes the contents of the table
    deleteChildElements(monkeyTable);

    // creates a new row for the table
    const header = document.createElement("tr");

    // adds the header to the table
    header.innerHTML = `
                        <th>Name</th>
                        <th>Species</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Weight</th>
                        <th>Training Status</th>
                        <th>Reserve Status</th>
                        <th>Location</th>
                        <th>Options</th>
                        `;

    // adds the header to the table
    monkeyTable.append(header);

    // loops through the list of objects
    for(let i = 0; i < monkeys.length; i++) {

        // creates a new row for the table
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
                            <td><button class="delete-button" id="${monkeys[i]._id}"><span class="material-icons">delete</span></button></td>
                            `;

    // adds the created values to the table
    monkeyTable.appendChild(newMonkeyRow); // add the created values
    }

    // grabs all of the delete buttons
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            //console.log(button.id);
            deleteMonkey(button.id);
            getMonkeys();
        })
    });
}

// calls the functions to add sample dogs and monkeys
getDogs();
getMonkeys();


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
                                <form>
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


    // event listener waits for the button to be pressed 
    newDogIntake.addEventListener("submit", (e) => {

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

        console.log(dog);

        // adds the dog to the database
        addDog(dog);

        //add dog to the table
        getDogs(dog);
        
        //clears the form entries
        newDogIntake.reset();
    
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
                                <form>
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

    // adds the html to the newly created div
    intakeContainer.appendChild(newMonkeyIntake);

    // Added this to disable button so that it doesnt keep adding the html code over and over again
    monkeyButton.disabled = true;
    dogButton.disabled = false;

    const monkeyIntake = document.getElementById("monkey-intake-form");

    // event listener waits for the button to be pressed
    monkeyIntake.addEventListener("submit", (e) => {

        // does not allow for page to referesh once the button is pressed
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

        // adds the monkey to the database
        addMonkey(monkey);  

        // resets all of the entries for the form
        newMonkeyIntake.reset();
       
    }) 


}

// event listeners
dogButton.addEventListener("click", displayDogIntakeform);
monkeyButton.addEventListener("click", displayMonkeyIntakeform);

const dogIntake = document.getElementById("intake-form");

dogIntake.addEventListener("submit", async (e) => {

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

    console.log(dog);

    // adds the dog to the database
    await addDog(dog);

    //add dog to the table
    getDogs();
    
    //clears the form entries
    dogIntake.reset();
});    