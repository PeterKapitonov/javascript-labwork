
function task1(){
	var a=prompt();
	if (a > 0) {
		var ggg = function() {
			alert('!');
		}
	} else {
		var ggg = function() {
			alert('!!');
		}
	}
	ggg();	
} 

function task2(){
	var ggg = function(n, f) {return f(n);}
	var funcNew = function(a){return Math.pow(a, 2)};
	num = 2;
	alert(ggg(num, funcNew));
} 


function task3(){
	var ggg = function(a, b){return a() + b();};
	var f1 = function(){
		return 3
	}
	var f2 = function(){
		return 4
	}
	alert(ggg(f1, f2));

} 

function task4(){
	var ggg = function(a, b, c){return b(a) + c(a);};
	var square = function(n){return Math.pow(n, 2)};
	var cub = function(n){return Math.pow(n, 3)};
	alert(ggg(3, square, cub));

} 

function task5(){
	var each = function(startArr, f){return f(startArr)};
	var arr = [64, 49, 36, 25, 16];
	var myFunc = function(a){
		var newArr = [];
		for (var i = 0; i < a.length; i++) {
			newArr[i]=Math.sqrt(a[i]);
		}
			return newArr;
	}	

	alert(each(arr, myFunc));
} 

function task6(){
	var each = function(numArr, funcArray) {
		var newArr = [];
		for (var i = 0; i < numArr.length; i++){
			var current = funcArray[i % funcArray.length](numArr[i]);
			newArr.push(current);
  		}
		return newArr
	}

	var f1 = function(a){return a + 3};
	var f2 = function(a){return a + 2};
	var f3 = function(a){return a + 1};
	var funcAll = [f1, f2, f3];
	var startArray = [0,1,2, 3, 4, 5, 6, 7, 8, 9,10, 11];
	document.write(each(startArray, funcAll));
} 


function task7(){
	function counter() {
		var i = 1;
		return function() {return i++};
	}

	var func = counter();

	alert(func());
	alert(func());
	alert(func());
	alert(func());
	alert(func());
	alert(func());
}

var f1 = function(){   //task8 ----------------------------------------
	var k = 1;
	return function() {
		this.innerHTML = k;
		return k++;
	}
}

var all_buttons = document.getElementsByClassName('button8');
for (var i = 0; i < all_buttons.length; i++) {
	all_buttons[i].addEventListener('click', f1(this));
}




//task9 ----------------------------------------


var colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
var p_collect = document.getElementsByTagName('p');

var f1 = function() {
	var k = 0;
	return function() {
		this.style.color = colors[k];
		k++;
		if (k == colors.length){k=0};
	}
}

for (var i = 0; i < p_collect.length; i++) {
	p_collect[i].addEventListener('click', f1());
}



//task10  ----------------------------------------

var f1 = function(){
	var a = 0;
	var b = 1;
	var temp;
	return function() {
		this.nextElementSibling.innerHTML = a;
		temp = a;
		a = b;
		b = temp +a;
	}
}

var buts_collect = document.getElementsByClassName('button10');
for (var i = 0; i < buts_collect.length; i++) {
	buts_collect[i].addEventListener('click', f1());
}

//task12 ----------------------------------------

var f12 = function() {
	var already_used = [];
	return function() {
		var new_num = Math.floor(Math.random() * 100 + 1);
		for (var i = 0; i < already_used.length; i++) {
			if (already_used[i] == new_num) {return}
		};

		parag.innerHTML += new_num+', ';
		already_used.push(new_num);
	}
}

var parag = document.getElementsByClassName('button12-1');
var but=document.getElementsByClassName('button12');
but.addEventListener('click', f12);
