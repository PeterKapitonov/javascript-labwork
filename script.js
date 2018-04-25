
function task1(){
	var elem = document.getElementById('task1');

	elem.onmousemove = func;

	function func(event) {
		this.innerHTML = 'кординаты всего окна:<br>'+ event.clientX + ':' + event.clientY;
	}
	
}
function task1_1(){
	window.addEventListener('mousemove', go);
	function go(event) {
		document.getElementById('task1-1').innerHTML = 'X:'+event.clientX+' Y:'+event.clientY;
	}	
}

function task2(){
	window.addEventListener('click', go);
	function go(event) {
		var elem = document.getElementById('task2');
		elem.style.left = event.clientX+'px';
		elem.style.top = event.clientY+'px';
	}
}

function task3(){
	window.addEventListener('click', go);
	function go(event) {
		var elem = document.getElementById('task3');
		elem.style.left = (event.clientX - parseInt(window.getComputedStyle(elem, "").width) / 2)+'px';
		elem.style.top = (event.clientY  - parseInt(window.getComputedStyle(elem, "").height) / 2)+'px';
	}

}

function nachalo(){
	window.scrollTo(0,0);
}


function task4(){
	document.getElementById('task4').innerHTML = 'keyCode = '+ event.keyCode;
}

function task5(){
	document.getElementById('task5').innerHTML =' Название кнопки: '+String.fromCharCode(event.keyCode);
}

function task6(){
	var div = document.getElementById('task6');
	if(event.ctrlKey && event.shiftKey){
		div.style.background = "orange";
	}else{
		if(event.ctrlKey){
			div.style.background = "red";
		} 
		if(event.shiftKey){
			div.style.background = "blue";
		} 
		if(event.altKey){
			div.style.background = "green";
		} 
	}
}

function task7(){
	var div = document.getElementById('task7');
		if(event.ctrlKey){
			div.innerHTML = "1";
		} 
		if(event.shiftKey){
			div.innerHTML = "2";
		} 
		if(event.altKey){
			div.innerHTML = "3";
		} 
}
function task8(event){
	var text = document.getElementById('task8-text');
	var elem_p = document.getElementById('task8');
	var text_value=text.value;
	if(event.keyCode==13){
		elem_p.innerHTML=text_value;
		text.value=' ';
	}
}


