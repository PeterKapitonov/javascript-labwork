
function task1(){
	var elems = document.querySelectorAll('.task11');
	for (var i = 0; i < elems.length; i++) {
		elems[i].onclick = func11;
	}
}
function func11() {
	alert(this.getAttribute('class'));
}
function task2(){
	var elems = document.getElementsByTagName('a');
	for (var i = 0; i < elems.length; i++) {
		elems[i].addEventListener('mouseover', func22);
	}
}
function func22() {
	this.title = this.innerHTML;
}
function task3(){
	var elems = document.getElementsByTagName('a');
	for (var i = 0; i < elems.length; i++) {
		elems[i].addEventListener('mouseover', func33);
	}
}
function func33() {
	this.title = this.innerHTML+ ' (' + this.href + ')';
}

function task4(){
	var elems = document.getElementsByTagName('a');
	for (var i = 0; i < elems.length; i++) {
		elems[i].addEventListener('mouseover', func44);
	}
	
}
function func44() {
	this.title = this.innerHTML+ ' (' + this.href + ')';
	
}
var parag = document.getElementById('test5');
function task5(){
	var elems = document.querySelectorAll('.task55');
	for (var i = 0; i < elems.length; i++) {
		elems[i].addEventListener('blur', func55);
	}
}
function func55() {
	parag.innerHTML = this.value;
	
}


