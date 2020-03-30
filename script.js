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

function randomItem(list)
{
	return list[Math.floor(Math.random() * list.length)]
}

function generateContent()
{
	var name = document.getElementById("name");
	switch(Math.floor(Math.random() * 2))
	{
		case 0:
			name.innerHTML = randomItem(singular) + " of " + randomItem(plural);
			break;
			
		case 1:
			name.innerHTML = (10 ** (Math.floor(Math.random() * 10) + 1)) + " " + randomItem(plural);
			break;
			
		default:
		console.log("Incorrect random number generated for name type");
			break;
	}
	
}