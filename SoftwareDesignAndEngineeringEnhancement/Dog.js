// Dog class that s inheriting values from the RescueAnimal class

import { RescueAnimal } from "./RescueAnimal.js";

export class Dog extends RescueAnimal {

    constructor (name, breed,
        gender,
        age,
        weight,
        acquisitionDate,
        acquisitionLocation,
        trainingStatus,
        reserved,
        inServiceLocation
        ) {

        // calls the functions from the parent class
        super(name,
            gender,
            age,
            weight,
            acquisitionDate,
            acquisitionLocation,
            trainingStatus,
            reserved,
            inServiceLocation,
            );
        this.breed = breed;
    }

    // dog specific getter and setter
    get getBreed() {
        return this.breed;
    }

    set addBreed(breed) {
        this.breed = breed;
    }
}
