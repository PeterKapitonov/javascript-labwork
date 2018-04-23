function task1(){
	var arr = ['a','b','c'];
	alert(arr);
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
	var obj = {a: 1, b: 2, c: 3};
	alert(obj['c']);
	alert(obj.a);
}

function task6(){
	var obj = {Коля: '1000', Вася: '500', Петя: '1200000200'};
	alert("Зарплата Коли:"+obj['Коля']);
	alert("Зарплата Пети:"+obj.Петя);
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

