//Alexandro Hernandez 
//Project 2
//10-15-2023

package Rescue;

import java.util.ArrayList;
import java.util.Scanner;

public class Driver {

	//our two arraylists to hold our dogs
	//created the monkey arraylist
	private static ArrayList<Dog> dogList = new ArrayList<Dog>();
	private static ArrayList<Monkey> monkeyList = new ArrayList<Monkey>();
	// Instance variables (if needed)

	public static void main(String[] args) {

		Scanner scnr = new Scanner(System.in);
		char userInfo = ' ';

		initializeDogList();
		initializeMonkeyList();

		// Add a loop that displays the menu, accepts the users input
		// and takes the appropriate action.
		// For the project submission you must also include input validation
		// and appropriate feedback to the user.
		// Hint: create a Scanner and pass it to the necessary
		// methods 
		// Hint: Menu options 4, 5, and 6 should all connect to the printAnimals() method.

		//will continue to loop until q is entered
		while(true) {
			//displays menu method and shows the different options
			displayMenu();

			//takes in user input
			userInfo = scnr.next().charAt(0);

			//check to see if the input matches any of the options
			//if no option is correct out invalid input
			if(userInfo == '1') {
				intakeNewDog(scnr);
			}
			else if(userInfo == '2') {
				intakeNewMonkey(scnr);
			}
			else if(userInfo == '3') {
				reserveAnimal(scnr);
			}
			else if(userInfo == '4') {
				printAnimals(userInfo); 
			}
			else if(userInfo == '5') {
				printAnimals(userInfo);
			}
			else if(userInfo == '6') {
				printAnimals(userInfo);
			}
			else if(userInfo == 'q') {
				System.out.println("Now exiting application...");
				break;
			}
			else {
				System.out.println("Error: Invalid input.");
			}
		}

	}

	// This method prints the menu options
	public static void displayMenu() {
		System.out.println("\n\n");
		System.out.println("\t\t\t\tRescue Animal System Menu");
		System.out.println("[1] Intake a new dog");
		System.out.println("[2] Intake a new monkey");
		System.out.println("[3] Reserve an animal");
		System.out.println("[4] Print a list of all dogs");
		System.out.println("[5] Print a list of all monkeys");
		System.out.println("[6] Print a list of all animals that are not reserved");
		System.out.println("[q] Quit application");
		System.out.println();
		System.out.println("Enter a menu selection: ");
	}

	// Adds dogs to a list for testing
	public static void initializeDogList() {
		Dog dog1 = new Dog("Spot", "German Shepherd", "male", "1", "25.6", "05-12-2019", "United States", "in service", false, "United States");
		Dog dog2 = new Dog("Rex", "Great Dane", "male", "3", "35.2", "02-03-2020", "United States", "Phase I", false, "United States");
		Dog dog3 = new Dog("Bella", "Chihuahua", "female", "4", "25.6", "12-12-2019", "Canada", "in service", false, "Canada");

		dogList.add(dog1);
		dogList.add(dog2);
		dogList.add(dog3);
	}

	// Adds monkeys to a list for testing
	//Optional for testing
	public static void initializeMonkeyList() {
		Monkey monkey1 = new Monkey("Spot", "Squirrel Monkey", "male", "1", "10", "1 foot", "2 feet", "1 foot", "05-12-2019", "United States","intake", true, "United States");
		Monkey monkey2 = new Monkey("Rex", " Capuchin", "female", "1", "10", "1 foot", "2 feet", "1 foot", "03-30-2022", "United States","Phase I", false, "United States");
		Monkey monkey3 = new Monkey("Bella", " Capuchin", "female", "1", "10", "1 foot", "2 feet", "1 foot", "03-30-2022", "United States","in Service", false, "United States");

		//add monkeys examples to the array list
		monkeyList.add(monkey1);
		monkeyList.add(monkey2);
		monkeyList.add(monkey3);
	}

	// Complete the intakeNewDog method
	// The input validation to check that the dog is not already in the list
	// is done for you
	public static void intakeNewDog(Scanner scanner) {
		System.out.println("What is the dog's name?");
		//changed this line from .nextline to .next seemed to work better
		//I got an error before
		String name = scanner.next();

		//checks to see if dog is already in system
		for(Dog dog: dogList) {
			if(dog.getName().equalsIgnoreCase(name)) {
				System.out.println("\n\nThis dog is already in our system\n\n");
				return; //returns to menu
			}
		}

		scanner.nextLine();

		//gather all the attributes for our dog
		System.out.println("What's the dog's breed?");
		String breed = scanner.nextLine();
		System.out.println("What's the dog's gender?");
		String gender = scanner.next();
		System.out.println("What's the dog's age?");
		String age = scanner.nextLine();
		scanner.nextLine();
		System.out.println("What is the dog's weight?");
		String weight = scanner.nextLine();
		System.out.println("When was the dog acquired?");
		String acquisitionDate = scanner.nextLine();
		System.out.println("Where was the dog acquired?");
		String acquisitionCountry = scanner.nextLine();
		System.out.println("Whats the dogs training status? (Select from: Intake, Phase I, Phase II, Phase III, Phase IV, Phase V, In Service or Farm)");
		String trainingStatus = scanner.nextLine();
		System.out.println("Is the dog reserved?");
		boolean reserved = scanner.nextBoolean();
		System.out.println("What country is the dog in service?");
		String inServiceCountry = scanner.next();

		//assign values to be set in the dog class
		Dog dog = new Dog(name, breed, gender, age, weight, acquisitionDate, acquisitionCountry, trainingStatus, reserved, inServiceCountry);
		//add
		dogList.add(dog);

		System.out.println("Dog has been added to the system.");

		return;

		// Add the code to instantiate a new dog and add it to the appropriate list
	}

	// Complete intakeNewMonkey
	//Instantiate and add the new monkey to the appropriate list
	// For the project submission you must also  validate the input
	// to make sure the monkey doesn't already exist and the species type is allowed
	public static void intakeNewMonkey(Scanner scanner) {
		String species = null;
		//input validation for monkey name
		System.out.println("What is the monkey's name?");
		String name = scanner.next();

		//checks if monkey is already in system
		for(Monkey monkey: monkeyList) {
			if(monkey.getName().equalsIgnoreCase(name)) {
				System.out.println("\n\nThis monkey is already in our system\n\n");
				return; //returns to menu
			}
		}

		scanner.nextLine();

		//gather attributes for monkey
		//will add input validation for monkey species
		//used while loop to allow user to retry input if the species type is incorrect
		while(true) {
			System.out.println("What's the monkey's species? (Please choose from: Capuchin, Guenon, Macaque, Marmoset, Squirrel monkey, Tamarin)");
			species = scanner.nextLine();
			//input validation for monkey species
			if(species.equalsIgnoreCase("Capuchin") || species.equalsIgnoreCase("Guenon") || species.equalsIgnoreCase("Macaque") || species.equalsIgnoreCase("Marmoset") || species.equalsIgnoreCase("Squirrel monkey") || species.equalsIgnoreCase("Tamarin")) {
				break;
			}
			else {
				System.out.println("Invalid monkey species. Try Again");	
			}
		}

		//continue getting the rest of the attributes
		System.out.println("What's the monkey's gender?");
		String gender = scanner.next();
		System.out.println("What's the monkey's age?");
		String age = scanner.nextLine();
		scanner.nextLine();
		System.out.println("What is the monkey's weight?");
		String weight = scanner.nextLine();
		System.out.println("What's the monkey's tail length?");
		String tailLength = scanner.nextLine();
		System.out.println("What's the monkey's height?");
		String height = scanner.nextLine();
		System.out.println("What's the monkey's body length?");
		String bodyLength = scanner.nextLine();
		System.out.println("When was the monkey acquired?");
		String acquisitionDate = scanner.nextLine();
		System.out.println("Where was the monkey acquired?");
		String acquisitionCountry = scanner.nextLine();
		System.out.println("Whats the monkeys training status? (Select from: Intake, Phase I, Phase II, Phase III, Phase IV, Phase V, In Service or Farm)");
		String trainingStatus = scanner.nextLine();
		System.out.println("Is the monkey reserved?");
		boolean reserved = scanner.nextBoolean();
		System.out.println("What country is the monkey in service?");
		String inServiceCountry = scanner.next();

		//Adds monkey to monkeyList
		Monkey monkey = new Monkey(name, species, gender, age, weight, tailLength, height, bodyLength, acquisitionDate, acquisitionCountry, trainingStatus, reserved, inServiceCountry);
		monkeyList.add(monkey);

		System.out.println("Monkey has been added to the system.");

		//return to menu
		return;

	}

	// Complete reserveAnimal
	// You will need to find the animal by animal type and in service country
	//Currently working on this method not sure what exactly we have to do
	//maybe try searching by the animal type and the inservice country

	//Currently working on the reserve animal method
	public static void reserveAnimal(Scanner scanner) {
		String country;
		scanner.nextLine();

		while(true) {
			System.out.println("Please enter animal type or enter q to return to main menu: ");
			String animalType = scanner.nextLine();

			//check if user entered dog, if not system prints incorrect animal type and asks user to try again.
			if(animalType.equalsIgnoreCase("Dog")) {
				while(true) {
					System.out.println("Where are you located?");
					country = scanner.nextLine();

					//trying to check if the dog is already is reserved yet
					for(Dog dog: dogList) {
						if(dog.getInServiceLocation().equalsIgnoreCase(country) && dog.getReserved() != true) {
							//System.out.println(dog.getName() + " | " + dog.getAge() + " | " + dog.getTrainingStatus() + " | " + dog.getReserved());
							dog.setReserved(true);
							System.out.println("Dog reserved successfully.");
							return;
						}
					}
					//when there are no available dogs in that country location
					System.out.println("No dogs matching that criteria");
					System.out.println();
					break;
				}
			}

			//check if user entered monkey, if not system prints incorrect animal type and asks user to try again.
			else if(animalType.equalsIgnoreCase("Monkey")) {
				while(true) {
					System.out.println("Where are you located?");
					country = scanner.nextLine();

					//trying to check if the dog is already is reserved yet
					for(Monkey monkey: monkeyList) {
						if(monkey.getInServiceLocation().equalsIgnoreCase(country) && monkey.getReserved() != true) {
							monkey.setReserved(true);
							System.out.println("Monkey reserved successfully.");
							return;
						}

					}
					//when there are no monkeys in location country
					System.out.println("No monkeys matching that criteria");
					System.out.println();
					break;
				}
			}
			//exits method and shows the menu
			else if(animalType.equalsIgnoreCase("q")) {
				System.out.println("Returning to main menu.");
				return;
			}
			//gives feedback if the user does not input dog or monkey
			else {
				System.out.println("Invalid input. Please enter correct animal type.");
				System.out.println();

			}
		} 
	}

	// Complete printAnimals
	// Include the animal name, status, acquisition country and if the animal is reserved.
	// Remember that this method connects to three different menu items.
	// The printAnimals() method has three different outputs
	// based on the listType parameter
	// dog - prints the list of dogs
	// monkey - prints the list of monkeys
	// available - prints a combined list of all animals that are
	// fully trained ("in service") but not reserved 
	// Remember that you only have to fully implement ONE of these lists. 
	// The other lists can have a print statement saying "This option needs to be implemented".
	// To score "exemplary" you must correctly implement the "available" list.
	public static void printAnimals(char animalType) {
		//outputs all dogs in the arrayList
		if(animalType == '4') {
			for(Dog dog: dogList) {
				System.out.println(dog.getName() + " | " + dog.getTrainingStatus() + " | " + dog.getAcquisitionLocation() + " | " + dog.getReserved() + " | ");
			}	
		}
		//outputs all monkeys in the ArrayList
		else if(animalType == '5') {
			for(Monkey monkey: monkeyList) {
				System.out.println(monkey.getName() + " | " + monkey.getTrainingStatus() + " | " + monkey.getAcquisitionLocation() + " | " + monkey.getReserved() + " | ");
			}
		}
		//outputs each animal that is available
		else if(animalType == '6') {
			System.out.println("Available Animals: ");
			System.out.println();
			//outputs available dogs first
			for(Dog dog: dogList) {
				if(dog.getTrainingStatus().equalsIgnoreCase("In Service") && dog.getReserved() != true) {
					System.out.println("Dog: " + dog.getName() + " | " + dog.getTrainingStatus() + " | " + dog.getAcquisitionLocation() + " | " + dog.getReserved() + " | ");
					System.out.println();
				}
			}
			//outputs all available monkeys
			for(Monkey monkey: monkeyList) {
				if(monkey.getTrainingStatus().equalsIgnoreCase("In Service") && monkey.getReserved() != true) {
					System.out.println("Monkey: " + monkey.getName() + " | " + monkey.getTrainingStatus() + " | " + monkey.getAcquisitionLocation() + " | " + monkey.getReserved() + " | ");
					System.out.println();

				}
			}
		}
	}
}

