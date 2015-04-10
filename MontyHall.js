function MontyHallSwitch()
{
	var options = [1,2,3];
	var prize = Math.floor((Math.random() * 3) + 1);
	var guess = Math.floor((Math.random() * 3) + 1);

	options.splice(options.indexOf(guess),1);
	// console.log("First guess: " + guess);
	if(guess===prize)
	{
		guess = options[Math.round(Math.random())];
	}
	else
	{
		guess = prize;
	}
	// console.log("Guess: " + guess);
	// console.log("Answer: " + prize);
	if(guess===prize)
		return "Winner";
	else
		return "Loser";
}
function RunMontyHall(times)
{
	var winners = 0;
	var losers = 0;

	for (var i=0;i<times;i++)
	{
		if(MontyHallSwitch()=="Winner")
			winners++;
		else
			losers++;
	}

	console.log("Winners: " + winners);
	console.log("Losers: " + losers);
}

