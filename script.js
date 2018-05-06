
function task1(){
	var form=document.forms;
	var summ=0;
	for(var i=0;i<form[0].elements.length-1;i++){
		summ+=Number(form[0].elements[i].value);
	}
	form[0].elements[3].value=summ;
}
function task2(){
	var bat=document.getElementById('result');
	var input=document.getElementsByClassName('num');
	var summ=0;
	for(var i=0;i<input.length;i++){
		summ+=Number(input[i].value);
	}
	bat.innerHTML='Результат: '+summ;
}


function task3(){
	var num=document.getElementById('num3');
	var summ=0;
	for(var i=0;i<num.value.length;i++){
		summ+=Number(num.value[i]);
	}

	
	num.value=summ;
	
}


function task4(event){
	var num=document.getElementById('num4');
	var arr=num.value.split(',');
	var summ=0;
	for(var i=0;i<arr.length;i++){
		summ+=Number(arr[i]);
	}

	
	num.value=summ/arr.length;
	
}

function task5(elem){
	var arr=elem.value.split(' ');
	var clas=document.getElementsByClassName('num5');
	for(var i=0;i<clas.length;i++){
		clas[i].value=arr[i];
	}
}

window.setInterval(task6,100);
function task6(){
	var elem = document.getElementById('task6');
	elem.addEventListener('blur', bigLetter);

	function uswords(str) {
		var arr = str.split(' ');
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].split('');
			arr[i][0] = arr[i][0].toUpperCase();
			arr[i] = arr[i].join('');
		}
		str = arr.join(' ');
		return str;
	}
	
	function bigLetter() {
		elem.value = uswords(elem.value);
	}  
}


function task7(){
	var elem = document.getElementById('task7');          
	var arr= elem.value.split(' ');		//содержимое текста в массиве
	var summ=0;
	for (var i = 0; i < arr.length; i++){
		summ++;
	}

	var p=document.getElementById('task7-1'); 
	p.innerHTML='количество слов: '+summ;
}

var elem8 = document.getElementById('task8');
elem8.addEventListener('blur', task8);

function task8(){
	var max = 0;
	var arr2 = [];
	var str = elem8.value;
	var arr = str.split(' ');

	for (var i = 0; i < arr.length; i++) {
		var num = 0;
		arr2 = arr[i].split('');
 		for (var j = 0; j < arr2.length; j++) {
			num += 1		}
		if (num > max) {
			max = num;
 		} 
 	}

	var p = document.getElementById('result8');
	p.innerHTML = max;
}

var elem9 = document.getElementById('task9');
elem9.addEventListener('blur', task9);

function task9() {
	var arr2 = [];
	var str = elem9.value;
	var arr = str.split('.');
	arr2 = arr.reverse();
	var str1 = arr2.join('-');
	elem9.value = str1;
} 

var elem10 = document.getElementById('task10');  //task10
var elem10_1 = document.getElementById('btn10');
elem10_1.addEventListener('click', task10);

function task10() {
	var year = elem10.value;
	var date = new Date();
	var yearNow = date.getFullYear();
	var p = document.getElementById('result10');
	p.innerHTML = yearNow - year + ' лет';
} 

var elem11 = document.getElementById('task11');  //task11
elem11.addEventListener('blur', task11);

function task11() {
	var dayWeak = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
 	var str = elem11.value;
	var arr = str.split('.');
	var arr2 = arr.reverse();
	var str1 = arr2.join(',')
	var date = new Date(str1);
	var day = date.getDay();
	var p = document.getElementById('text11');
	p.innerHTML = dayWeak[day];
}

var elem12 = document.getElementById('task12');  //task12
var btn12 = document.getElementById('but12');
btn12.addEventListener('click', task12);

function task12() {
	var str = elem12.value;
 	var arr = str.split('');
	var arr2 = str.split('').reverse();
	for(var i = 0; i < arr.length; i++) {
		if(arr[i]!== arr2[i]) { 
			alert('это слово не палиндром');
			return;
		}
  	}
	alert('это слово палиндром');
	return;
}

var elem13 = document.getElementById('task13'); //task13
elem13.addEventListener('blur', task13);

function task13() {
	var str = elem13.value;
	var arr = str.split('');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 3) {
			alert('это число содержит 3');
			return;
  		}
	}
	alert('это число не содержит 3');
	return;
}

var elem14 = document.getElementsByTagName('p'); //task14
var batton14= document.getElementById('task14');
batton14.addEventListener('click', task14);

function task14() {
	for (var i = 5; i< 10; i++) {
		elem14[i].innerHTML = elem14[i].innerHTML+' '+(i + 1);
	}
 }   


var elem15 = document.getElementsByTagName('p'); //task15
var btn15= document.getElementById('btn15');
btn15.addEventListener('click', task15);

function task15() {
	var arr2 = [];

 	for (var i = 16; i< 20; i++) {
		arr2[i] +=elem15[i].innerHTML;
	}

	var input = document.getElementById('task15');
	input.value = arr2.sort(sortArr);
}

function sortArr(a, b) {
	if (a > b) {
		return -1;
	}
	if (a < b) {
		return -1;
 	}
	if (a == b) {
		return 0;
 	}
 }   




var elem16 = document.getElementsByTagName('a'); 					//task16

window.onload = function task16() {
	for (var i = 0; i < elem16.length; i++) {
		elem16[i].innerHTML = elem16[i].innerHTML + '(' +elem16[i].href+')';
	}
 }    




function task17() {                       //task17
	var elem = document.getElementsByTagName('a');
	for (var i = 0; i < elem.length; i++) {
		if (elem[i].href.indexOf('https://') == 0) {
 			elem[i].innerHTML = elem[i].innerHTML + '&rarr;';
		}
	}
 }    

 window.onload = function task18() {                       //task18
	var elem = document.getElementsByTagName('p');

	for (var i = 0; i < elem.length; i++) {
		elem[i].addEventListener('click', func18);
	}

	function func18() {
		this.innerHTML = Number(this.innerHTML) * Number(this.innerHTML);
	} 
 }    


 function task19() {                       //task19
	var elem = document.getElementsByTagName('img');
	for (var i = 0; i < elem.length; i++){
		elem[i].addEventListener('click', func);
 	}

	function func() {
		this.style.height = '145px';
		this.style.width = '145px';
 	}    
 }   


function task20() {                       //task20
	var elem = document.getElementsByTagName('img');
	for (var i = 3; i < elem.length; i++){
		elem[i].addEventListener('click', func20);
 	}

	function func20() {
		this.style.height = '145px';
		this.style.width = '145px';
		this.removeEventListener('click', func20);
		this.addEventListener('click', reback20);
 	 }

	function reback20() {
		this.style.height = '70px';
		this.style.width = '150px';
		this.removeEventListener('click', reback20);
		this.addEventListener('click', func20);
	}       
} 


function task21() {                       //task21
	var elem = document.getElementsByTagName('img');
	for (var i = 0; i < elem.length; i++) {
		elem[i].addEventListener('click', func21);
	}

function func21() {
		var bigImg = document.getElementById('task');
		bigImg.src = this.src;
	}     
}   


window.onload = function task22() {                       //task22
	var elem = document.getElementById('task22');
	var btnElem = document.getElementsByClassName('cls');
	for (var i = 0;i < elem.length; i++) {
		btnElem[i].addEventListener('click', func);
 	}

	function func() {
		var number = Number(elem.value)+Number(this.value);
		if (number >= 0){
			elem.value = number;
 		} else {
			elem.value = 0;
		}
	}          
}   


window.onload = function task23() {                       //task23
	var inp23 = document.getElementById('task23');
	inp23.addEventListener('blur', func23);

	function func23() {
		var content = inp23.value;
		if (content > 0 && content < 101){
			inp23.style.background = 'green';
		} else {
			inp23.style.background = 'red';
		}
	}               
}   


window.onload = function task24() {                       //task24
	var inp = document.querySelector('input');
	document.documentElement.addEventListener('mouseup', func);

	function func() {
		var content = window.getSelection().toString();
		inp.value = content;
	}                  
}   


  window.onload = function task27() {                       //task27
	var inp27 = document.getElementById('input27');
	
	window.setInterval(timer, 1000);
 	

	function timer() {
		inp27.value = String(inp27.value * inp27.value);
 	}                   
} 


window.onload = function task45() {                       //task45
	var inp = document.querySelector('input');
	var btn = document.querySelector('button');
	var list = document.querySelector('ul');
	btn.addEventListener('click', func);

	function func() {
		var str = inp.value;
		var arr = str.split(',');
		var item;
		list.innerHTML = '';
		for (var i = 0; i < arr.length; i++){
			item = document.createElement('li');
			item.innerHTML = arr[i];
			list.appendChild(item);
		}
	}                 
} 

