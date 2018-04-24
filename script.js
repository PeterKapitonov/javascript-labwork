function task1(){
	var elem = document.getElementById('task1');
	alert(elem.className); 
	elem.classList.add('www'); 
	alert(elem.className); 
}
function task2(){
	var elem = document.getElementById('task2');
	alert(elem.className); 
	elem.classList.remove('www'); 
	alert(elem.className); 
}

function task3(){
	var elem = document.getElementById('task3');
	alert(elem.className); 
	var elem1=elem.classList.contains('www'); 
	alert(elem1); 
	
}

function task4(){
	var elem = document.getElementById('task4');
	elem.classList.toggle('www');  
}

function task5(){
	var elem = document.getElementById('task5');
	alert(elem.className); 
	var elem1=elem.classList.length; 
	alert('количество классов:'+elem1); 
}

function task6(){
	var elem = document.getElementById('task6');
	var elem_len=elem.classList.length; 
	for (var i = 0; i < elem.classList.length; i++) {
		alert(elem.classList[i]);
 	}   
}

function task7(){
	var elem = document.getElementById('task7');
	elem.style.cssText = 'color: red; font-size: 30px; border: solid 1px black;';  
}

function task8(elem){
	alert(elem.tagName);
}

function task9(){
	var elem = document.getElementById('task9');
	alert(elem.tagName.toLowerCase());
}

function task10(){
	var elems = document.querySelectorAll('.www10');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = elems[i].innerHTML + elems[i].tagName.toLowerCase();
	}	
}

function task11(){
	var arr = {
	'ru':['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
	alert(arr['ru'][0]);
	alert(arr['en'][2]);
}

function task12(){
	var arr = {
	'ru':['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
	var lang = 'ru';
	var day = 3;
	alert(arr[lang][day]);
}
function task13(){
	var arr = ['a','b','c'];
	alert(arr[0]);
	alert(arr[1]);
	alert(arr[2]);
}
function task14(){
	var arr = ['a','b','c'];
	alert(arr[0]);
	alert(arr[1]);
	alert(arr[2]);
}

function task15(){
	var arr = ['a', 'b', 'c', 'd','e','f'] ;
	alert(arr[0]+arr[1]);
	alert(arr[2]+arr[3]);
	alert(arr[4]+arr[5]);
	alert(arr[0]+'+'+arr[1]+','+arr[2]+'+'+arr[3]+','+arr[4]+'+'+arr[5]);
	
}

