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
addWord("Ace", "Aces");
addWord("Death", "Deaths");
addWord("Vex", "Vex");
addWord("Ghaul", "Ghaul");
addWord("Scream", "Screams");
addWord("Guardian", "Guardians");
addWord("Traveller", "Travellers");
addWord("Space", "Space");
addWord("Light", "Lights");
addWord("Dark", "Darkness");
addWord("Burden", "Burdens");
addWord("Rat", "Rats");
addWord("Rabbit", "Rabbits");
addWord("Thorn", "Thorns");
addWord("Tommy", "Tommies");
addWord("Ghoul", "Ghouls");
addWord("Colony", "Colonies");

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
	//Display card if not already shown
	document.getElementById("card").style.display = "block";
	
	//Kinetic, Energy, or Power
	var type = randomItem(slots);
	
	//Name
	var name = "";
	switch(randomBetween(0, 7))
	{
		//Word of Words
		case 0:
			name = randomItem(singular) + " of " + randomItem(plural);
			break;
			
		//10^X Words
		case 1:
			name = (10 ** (randomBetween(1, 10)) + " " + randomItem(plural));
			break;
		
		case 2:
			name = randomItem(singular);
			break;
			
		case 3:
			name = "The " + randomItem(singular);
			break;
			
		case 4:
			var word = randomItem(singular).toUpperCase();
			for(i = 0; i < word.length - 1; i++)
			{
				name += word.charAt(i) + ".";
			}
			name += word.charAt(word.length - 1);
			break;
			
		case 5:
			name = "The " + randomItem(singular) + "breaker";
			break;
			
		case 6:
			name = "The Last " + randomItem(singular);
			break;
			
		case 7:
			var word = randomItem(singular.concat(plural));
			if(word.toUpperCase().charAt(word.length - 1) == "S")
			{
				name = word + "' " + randomItem(plural);
			}
			else
			{
				name = word + "'s " + randomItem(plural);
			}
			break;
	}
	document.getElementById("name").innerHTML = name;
	
	//Slot
	var slot = type.name;
	document.getElementById("slot").innerHTML = slot;
	
	//Icon
	
	//Impact
	var impact = randomBetween(type.min_damage, type.max_damage);
	document.getElementById("impact").innerHTML = impact;
	
	//Range
	var range = randomBetween(type.min_range, type.max_range);
	document.getElementById("range").innerHTML = range;
	
	//Stability
	var stability = randomBetween(type.min_stability, type.max_stability);
	document.getElementById("stability").innerHTML = stability;
	
	//Handling
	var handling = randomBetween(type.min_handling, type.max_handling);
	document.getElementById("handling").innerHTML = handling;
	
	//Reload speed
	var reload_speed = randomBetween(type.min_reload_speed, type.max_reload_speed);
	document.getElementById("reload_speed").innerHTML = reload_speed;
	
	//RPM
	var rpm = randomBetween(type.min_rpm, type.max_rpm);
	document.getElementById("rpm").innerHTML = rpm;
	
	//Aim assist
	var aa = randomBetween(0, 100);
	
	//Draw target
	var ctx = document.getElementById("aa").getContext("2d");
	var target_radius = 70;
	
	ctx.clearRect(0, 0, (target_radius + 2) * 2, (target_radius + 2) * 2);
	
	ctx.strokeStyle = "#000000";
	for(var i = 0; i < target_radius / 10; i++)
	{
		ctx.beginPath();
		ctx.arc(target_radius + 1, target_radius + 1, target_radius - (10 * i), 0, 2 * Math.PI);
		ctx.stroke();
	}
	
	//Fire simulated shots at target
	ctx.strokeStyle = "#ff0000";
	for(var i = 0; i < randomBetween(1, 100); i++)
	{
		ctx.beginPath();
		var x = randomBetween(0 + (target_radius * (aa/type.max_stability)), target_radius);
		var y = randomBetween(0 + (target_radius * (aa/type.max_stability)), target_radius) - (i * (target_radius * 2) / stability);
		ctx.arc(x, y, 1, 0, 2 * Math.PI);
		ctx.stroke();
	}
}