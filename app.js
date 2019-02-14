var shape = document.querySelector('#shape');

var start = new Date().getTime();


//function to get a random color
function getRandomColor(){
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for(var i=0; i<6; i++){
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

// function to make our shape appear after a certain time
function makeShapeAppear(){
	//add random top and left styles and change size
	var top = Math.random() * 400;
	var left = Math.random() * 400;
	var width = Math.random() * 400;

	//get circles randomly
	if(Math.random() > 0.5){
		document.querySelector('#shape').style.borderRadius = '50%';
	}else{
		document.querySelector('#shape').style.borderRadius = '0';
	}

	document.querySelector('#shape').style.backgroundColor = getRandomColor();
	document.querySelector('#shape').style.top = top + 'px';
	document.querySelector('#shape').style.left = left + 'px';
	document.querySelector('#shape').style.width = width + 'px';
	document.querySelector('#shape').style.height = width + 'px';
	document.querySelector('#shape').style.display = 'block';
	start = new Date().getTime(); //update the timer
}

//make the shape appear 2 second after page loads
function appearAfterDelay(){
	setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

shape.addEventListener('click',function(){
	shape.style.display = 'none';

	//calcuating the time taken for something to happen
	var end = new Date().getTime();
	var timeTaken = (end - start)/1000; //milliseconds

	document.querySelector('#timeTaken').innerHTML = timeTaken + 's';

	appearAfterDelay(); //make shape re-appear 
});
