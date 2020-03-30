//Stores the words used in creating the name
var singular = [];
var plural = [];

function addWord(one, multi)
{
	singular.push(one);
	plural.push(multi);
}

addWord("Lord", "Lords");
addWord("Wolf", "Wolves");
addWord("Pickle", "Pickles");

//Slot values
class Slot
{
	constructor(name,
	min_damage, max_damage,
	min_range, max_range,
	min_stability, max_stability,
	min_handling, max_handling,
	min_reload_speed, max_reload_speed,
	min_rpm, max_rpm)
	{
		//Name
		this.name = name;
		
		//Damage
		this.min_damage = min_damage;
		this.max_damage = max_damage;
		
		//Range
		this.min_range = min_range;
		this.max_range = max_range;
		
		//Stability
		this.min_stability = min_stability;
		this.max_stability = max_stability;
		
		//Handling
		this.min_handling = min_handling;
		this.max_handling = max_handling;
		
		//Reload speed
		this.min_reload_speed = min_reload_speed;
		this.max_reload_speed = max_reload_speed;
		
		//Rounds per minute
		this.min_rpm = min_rpm;
		this.max_rpm = max_rpm;
	}
}

kinetic = new Slot("Kinetic",
17, 93,
9, 100,
27, 92,
9, 83,
9, 83,
50, 800);

energy = new Slot("Energy",
5, 100,
27, 100,
26, 100,
30, 84,
23, 83,
60, 1100);

power = new Slot("Power",
40, 100,
18, 100,
9, 83,
9, 83,
9, 70,
12, 500);

var slots = [kinetic, energy, power];

//Returns a random item from the list
function randomItem(list)
{
	return list[Math.floor(Math.random() * list.length)]
}

//Returns a random number between the two given inclusive
function randomBetween(x, y)
{
	return Math.floor(Math.random() * (y + 1)) + x;
}

//Creates new content for the videogame Destiny 2
function generateContent()
{
	//Kinetic, Energy, or Power
	var type = randomItem(slots);
	
	//Name
	var name = document.getElementById("name");
	switch(Math.floor(Math.random() * 2))
	{
		//Word of Words
		case 0:
			name.innerHTML = randomItem(singular) + " of " + randomItem(plural);
			break;
			
		//10^X Words
		case 1:
			name.innerHTML = (10 ** (randomBetween(1, 10)) + " " + randomItem(plural));
			break;
	}
	
	//Slot
	var slot = type.name;
	
	//Icon
	
	//Impact
	var impact = randomBetween(type.min_damage, type.max_damage);
	
	//Range
	var range = randomBetween(type.min_range, type.max_range);
	
	//Stability
	var stability = randomBetween(type.min_stability, type.max_stability);
	
	//Handling
	var handling = randomBetween(type.min_handling, type.max_handling);
	
	//Reload speed
	var reload_speed = randomBetween(type.min_reload_speed, type.max_reload_speed);
	
	//RPM
	var rpm = randomBetween(type.min_rpm, type.max_rpm);
}