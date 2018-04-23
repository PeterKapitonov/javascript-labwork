function buttonsClick(){
	var input1 = document.getElementById('summ1');
	var input2 = document.getElementById('summ2');
	var input3 = document.getElementById('summ3');
	input3.value = Number(input1.value)+Number(input2.value);
	if(input3.value==0  ){
		input3.value = '';
	}

	var input1 = document.getElementById('raz1');
	var input2 = document.getElementById('raz2');
	var input3 = document.getElementById('raz3');
	input3.value = Number(input1.value)-Number(input2.value);
	if(input3.value==0  ){
		input3.value =0;
	}

	var input1 = document.getElementById('multi1');
	var input2 = document.getElementById('multi2');
	var input3 = document.getElementById('multi3');
	input3.value = Number(input1.value)*Number(input2.value);
	if(input3.value==0  ){
		input3.value = '';
	}

	var input1 = document.getElementById('div1');
	var input2 = document.getElementById('div2');
	var input3 = document.getElementById('div3');
	input3.value = Number(input1.value)/Number(input2.value);
	if(input3.value==0 || isNaN(input3.value) ){
		input3.value = '';
	}
}
function task1(){
	var arr = ['a','b','c'];
	alert(arr[0]);
	alert(arr[1]);
	alert(arr[2]);
}
function task2(){
	var arr = ['a','b','c'];
	alert(arr[0]);
	alert(arr[1]);
	alert(arr[2]);
}

function task3(){
	var arr = ['a', 'b', 'c', 'd','e','f'] ;
	alert(arr[0]+arr[1]);
	alert(arr[2]+arr[3]);
	alert(arr[4]+arr[5]);
	alert(arr[0]+'+'+arr[1]+','+arr[2]+'+'+arr[3]+','+arr[4]+'+'+arr[5]);
	
}

function task4(){
	var arr = [2,5, 3, 9] ;
	alert(arr[0]*arr[1]+', '+arr[2]*arr[3]);
}

function task5(){
	var input=document.getElementById('kyky');
	alert(input.value);
}

function task6(){
	var obmen=document.getElementById('obmen');
	if(obmen.value =='Поменял значение'){
		obmen.value ='Нажми!';
	}else{
		obmen.value ='Поменял значение';
	}
}

function task7(){
	var week={1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',7:'Воскресенье'};
	var num = prompt('Номер недели: ');
	alert(week[num]);
}

function task8(){
	var obj = {1:'пн', 2:'вт', 3:'ср', 4:'чт', 5:'пт', 6:'сб', 7:'вс'};
	var day = 3;
	alert(obj[day]);
}

function task9(){
	var arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
	alert(arr[1][0]);
}

function task10(){
	var obj= {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
	alert(obj.js[0]);
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
function task1(){
	var arr = ['a','b','c'];
	alert(arr[0]);
	alert(arr[1]);
	alert(arr[2]);
}
function task2(){
	var arr = ['a','b','c'];
	alert(arr[0]);
	alert(arr[1]);
	alert(arr[2]);
}

function task3(){
	var arr = ['a', 'b', 'c', 'd','e','f'] ;
	alert(arr[0]+arr[1]);
	alert(arr[2]+arr[3]);
	alert(arr[4]+arr[5]);
	alert(arr[0]+'+'+arr[1]+','+arr[2]+'+'+arr[3]+','+arr[4]+'+'+arr[5]);
	
}

function task4(){
	var arr = [2,5, 3, 9] ;
	alert(arr[0]*arr[1]+', '+arr[2]*arr[3]);
}

function task5(){
	var input=document.getElementById('kyky');
	alert(input.value);
}

function task6(){
	var obmen=document.getElementById('obmen');
	if(obmen.value =='Поменял значение'){
		obmen.value ='Нажми!';
	}else{
		obmen.value ='Поменял значение';
	}
}

function task7(){
	var week={1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',7:'Воскресенье'};
	var num = prompt('Номер недели: ');
	alert(week[num]);
}

function task8(){
	var obj = {1:'пн', 2:'вт', 3:'ср', 4:'чт', 5:'пт', 6:'сб', 7:'вс'};
	var day = 3;
	alert(obj[day]);
}

function task9(){
	var arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
	alert(arr[1][0]);
}

function task10(){
	var obj= {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
	alert(obj.js[0]);
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

function task25(num){
	var value=document.getElementById('value');
	value.value+=num;
}


