
function task1(){
	var bat=document.getElementById('task1');
	bat.innerHTML='<b>текст стал жирным</b>';
}
function task2(){
	var bat=document.getElementById('task2');
	bat.innerHTML='<h3>текст стал h3</h3>';
}

function task3(){
	var bat=document.getElementById('task3');
	var elem=bat.innerHTML;
	bat.innerHTML='<h3>'+elem+'</h3>';
}

function task4(){
	var elem1=document.getElementById('task4-1');
	var elem2=document.getElementById('task4-2');
	var elem3=document.getElementById('task4-3');
	elem3.innerHTML=Number(elem1.value)+Number(elem2.value);
}

function task5(){
	var change=document.getElementsByTagName('p');
	for (var i = 0; i < change.length; i++){
		change[i].innerHTML = 'Ку-ку!';
	}
}

function task6(){
	var ordinal=document.getElementsByClassName('www');
	for(var i=0;i<ordinal.length;i++){
		ordinal[i].innerHTML=String(i);
	}
}

function task7(){
	var elem=document.querySelectorAll('p.www');
	for(var i=0;i<elem.length;i++){
		elem[i].innerHTML=String(i);
	}
}

function task8(){
	var elclass=document.getElementById('my-class');
	alert('Назваие класса абзаца:'+elclass.getAttribute('class'));
}

function task9_1(){
	var elem=document.getElementById('task9');
	alert(elem.getAttribute('class'));
}

function task9_2(){
	var elem=document.getElementById('task9');
	elem.removeAttribute('class');
	alert('Атрибут class удалён, нажмите первую кнопку чтобы проверить это');

}

function task10_1(){
	var elem=document.getElementById('task10');
	alert(elem.getAttribute('class'));
}

function task10_2(){
	var elem=document.getElementById('task10');
 	elem.setAttribute('class','task10-myclass');
 	elem.innerHTML='Класс задает красный цвет.';
 	
}

function task11(elem){
	var text = document.getElementById('text-11');
	text.innerHTML = elem.value;
}

function task12(){
	var elements = document.getElementsByTagName('a');
	for (var i = 0; i < elements.length; i++){
		elements[i].innerHTML = elements[i].innerHTML+' ('+elements[i].getAttribute('href')+')';
	}
}
function task13(elem){
	elem.disabled  =  true;
	elem.value  =  'О, на меня нельзя больше нажать!';
	var test = document.getElementById('text-13');
	test.innerHTML = 'Привет, мир!';
	test.style.color  =  'red';
}

function task14(){
	var elements = document.getElementsByTagName('p');
	for (var i = 0; i < elements.length; i++){
		elements[i].innerHTML = i;
	}
}