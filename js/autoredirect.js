var count = 10;
var counter = setInterval(timer, 1000);

function timer(){
	count--;
	if(count <= 0){
		location.href = '../';
	}
	document.getElementById("timer").innerHTML = "You will be automatically redirected to the home page in " + count + " seconds.";
}