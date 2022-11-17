export function roll(sides, dice, rolls) {
	var results = [];
	for (var i = 0; i < rolls; i++) {
		results[i] = dice * (Math.floor(Math.random() * sides) +1);
	}
	var theOutput = {
		sides: sides,
		dice: dice,
		rolls: rolls,
		results: results
	}
	return JSON.stringify(theOutput);
}
