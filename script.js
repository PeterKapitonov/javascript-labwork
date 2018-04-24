function task1(){
	alert(document.documentElement.clientHeight);
}
function task2(){
	var heightWindow = document.body.clientHeight;
	window.scrollTo(0, heightWindow);
}

function task3(){
	alert('Текущая прокрутка сверху: '+pageYOffset);
	
}

