var singular = ["Lord", "Wolf", "Pickle"];
var plural = ["Lords", "Wolves", "Pickles"];

function generateContent()
{
	var name = document.getElementById("name");
	name.innerHTML = singular[Math.floor(Math.random() * singular.length)] + " of " + plural[Math.floor(Math.random() * plural.length)];
}