// Monkey class inherits fucntions from the RescueAnimal class

import { RescueAnimal } from "./RescueAnimal.js";

export class Monkey extends RescueAnimal {

    constructor (
        name, 
        species,
        gender,
        age,
        weight,
        tailLength,
        height,
        bodyLength,
        acquisitionDate,
        acquisitionLocation,
        trainingStatus,
        reserved,
        inServiceLocation,
        ) {

        // super function calls the functions from the parent class
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
        this.species = species;
        this.tailLength = tailLength;
        this.height = height;
        this.bodyLength = bodyLength;
    }

    // monkey specific getters and setters
    get getSpecies() {
        return this.species;
    }

    set addSpecies(breed) {
        this.breed = breed;
    }

    get getTailLengh() {
        return this.tailLength;
    }

    set addTailLength(tailLength) {
        this.tailLength = tailLength;
    }

    get getHeight() {
        return this.getHeight;
    }

    set addHeight(height) {
        this.height = height;
    }

    get getBodyLength() {
        return this.bodyLength;
    }

    set addBodyLength(bodyLength) {
        this.bodyLength = bodyLength;
    }
}