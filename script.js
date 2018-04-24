function task1(){
	var elem = document.getElementById('task1');
	alert(elem.clientTop);
	
}
function task2(){
	var elem = document.getElementById('task2');
	alert('clientLeft:  '+elem.clientLeft);
	alert('clientRight:  '+elem.clientRight);
}

function task3(){
	var elem = document.getElementById('task3');
	alert('ширина окна:  '+elem.offsetWidth);
	
}

function task4(){
	var elem = document.getElementById('task4');
	alert('высота окна:  '+elem.offsetHeight);
}

function task5(){
	var elem = document.getElementById('task5');
	alert('ширина без границы:  '+elem.clientWidth);
}

function task6(){
	var elem = document.getElementById('task6');
	alert('высота без границы:  '+elem.clientHeight); 
}

function task7(){
	var elem = document.getElementById('task7');
	alert('высота без границы и без padding:  '+getComputedStyle(elem).height+'  ширина без границы и без padding:  '+getComputedStyle(elem).width); 
}

function task8(){
	var elem = document.getElementById('task8');
	alert('элемент по вертикали прокручен на '+elem.scrollTop+'px'); 
}

function task9(){
	var elem = document.getElementById('task9');
	alert('элемент по горизонтали прокручен на '+elem.scrollLeft+'px'); 
}

function task10(){
	var elem = document.getElementById('task10');
	elem.scrollTop=100; 
}

function task11(){
	var elem = document.getElementById('task11');
	elem.scrollLeft=100;
}

function task12(){
	window.scrollTo(0, document.body.clientHeight);
}
