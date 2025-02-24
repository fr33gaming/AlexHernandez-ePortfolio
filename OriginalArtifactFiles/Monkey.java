package Rescue;

public class Monkey extends RescueAnimal{
	
	//declare the monkeys specific attributes
	private String tailLength;
	private String height;
	private String bodyLength;
	private String species;
	
	
	//accessing the variables already set in  RescueAnimal
	public Monkey(String name, String species, String gender, String age,
    String weight, String tailLength, String height, String bodyLength, String acquisitionDate, String acquisitionCountry,
	String trainingStatus, boolean reserved, String inServiceCountry) {
		
		setName(name);
		setSpecies(species);
		setGender(gender);
		setAge(age);
		setWeight(weight);
		setTailLength(tailLength);
		setHeight(height);
		setBodyLength(bodyLength);
		setAcquisitionDate(acquisitionDate);
		setAcquisitionLocation(acquisitionCountry);
		setTrainingStatus(trainingStatus);
		setReserved(reserved);
		setInServiceCountry(inServiceCountry);
		
		
	}
	//adding the monkey specific attributes
	
	//set the species
	public void setSpecies(String species) {
		this.species = species;
	}
	
	//accessor for the species
	public String getSpecies( ) {
		return species;
	}
	
	//set the tail length
	public void setTailLength(String tailLength) {
		this.tailLength = tailLength;
	}
	
	//accessor for the tail length
	public String getTailLength() {
		return tailLength;
	}
	
	//set the monkey height
	public void setHeight(String height) {
		this.height = height;
	}
	
	//accessor for monkeys height
	public String getHeight() {
		return height;
	}
	
	//set the monkeys body length
	public void setBodyLength(String bodyLength) {
		this.bodyLength = bodyLength;
	}
	
	//accessor for the monkeys body length
	public String getBodyLength() {
		return bodyLength;
	}

}
