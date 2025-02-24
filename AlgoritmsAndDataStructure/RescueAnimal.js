// parent class

export class RescueAnimal {

    constructor(
        name,
        gender,
        age,
        weight,
        acquisitionDate,
        acquisitionLocation,
        trainingStatus,
        reserved,
        inServiceLocation,
        ) {

        this.name = name;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.acquisitionDate = acquisitionDate;
        this.acquisitionLocation = acquisitionLocation;
        this.trainingStatus = trainingStatus;
        this.reserved = reserved;
        this.inServiceLocation = inServiceLocation;

    }

    set addName(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set addGender(gender) {
        this.gender = gender;
    }

    get getGender() {
        return this.gender;
    }

    set addAge(age) {
        this.age = age;
    }

    get getAge() {
        return this.age;
    }

    set addWeight(weight) {
        this.weight = weight;
    }

    get getWeight() {
        return this.weight;
    }

    set addAcquisitionDate(acquisitionDate) {
        this.acquisitionDate = acquisitionDate;
    }

    get getAcquisitionDate() {
        return this.acquisitionDate;
    }

    set addAcquisitionLocation(acquisitionLocation) {
        this.acquisitionLocation = acquisitionLocation;
    }

    get getAcquisitionLocation() {
        return this.acquisitionLocation;
    }

    set addReserved(reserved) {
        this.reserved = reserved;
    }

    get getReserved() {
        return this.reserved;
    }

    set addInServiceLocation(inServiceLocation) {
        this.inServiceLocation = inServiceLocation;
    }

    get getInServiceLocation() {
        return this.inServiceLocation;
    }

    set addTrainingStatus(trainingStatus) {
        this.trainingStatus = trainingStatus;
    }

    get getTrainingStatus() {
        return this.trainingStatus;
    }
}
