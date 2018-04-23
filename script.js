function task1(){
	var a=Number(prompt('Введите число:'));
	if(a==0){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}
}

function task2(){
	var a=Number(prompt('Введите число:'));
	if(a>0){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}
}

function task3(){
	var a=Number(prompt('Введите число:'));
	if(a<0){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}
}

function task4(){
	var a=Number(prompt('Введите число:'));
	if(a>=0){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}

}

function task5(){
	var a=Number(prompt('Введите число:'));
	if(a<=0){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}
}

function task6(){
	var a=Number(prompt('Введите число:'));
	if(a!=0){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}
}

function task7(){
	var a=prompt('Введите число:');
	if(a=='test' || a=='тест'){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}
}

function task8(){
	var a=prompt('Введите число:');
	if(a==='1'){
		alert('Верно!');
	}else{
		alert( 'Неверно');
	}
}

function task9(){
	var test  = true;
	if (test) {
		alert('Верно');
	} else {
		alert('Неверно');
	}
}

function task10(){
	var test  = true;
	if (test!=true) {
		alert('Верно');
	} else {
		alert('Неверно');
	}
}

function task11(){
	var a=Number(prompt('Введите число:'));
	if(0<a && a<5){
		alert('Верно');
	} else {
		alert('Неверно');
	}
}

function task12(){
	var a=Number(prompt('Введите число:'));
	if(a==0 || a==2){
		a+=7;
	}else{
		a=a/10;
	}
	alert(a);
}

function task13(){
	var a=1, b=2;
	if(a<=1 && b>=3){
		a=a+b;
	}else{
		a=a-b;
	}
	alert(a);
}

function task14(){
	var a=Number(prompt('Введите число a:')), b=Number(prompt('Введите число b:'));
	if(a>2 && a<11 && b>=5  && b<14){
		alert('Вверно');
	}else{
		alert('Неверно!');
	}
	
}

function task15(){
	var num =Number(prompt('Введите число от 0 до 4:'));
	switch(num){
		case 1:
			result = 'Зима';
		break;
		case 2:
			result = 'Весна';
		break;
		case 3:
			result = 'Лето';
		break;
		case 4:
			result = 'Осень';
		break;
	}
	alert(result);
}

function task16(){
	var day =Number(prompt('Введите число от 0 до 31:'));
	if(0<day && day<=10){
		var decada=1;
	}
	if(10<day && day<=20){
		var decada=2;
	}
	if(20<day && day<=31){
		var decada=3;
	}
	alert(decada);
}

function task17(){
	var month =Number(prompt('Введите число от 0 до 12:'));
	if (month == 12 || month <= 2) {
		var result = 'Зима';
	}
	if (month >= 3 && month <= 5) {
		result = 'Весна';
	}
	if (month >= 6 && month <= 8) {
		result = 'Лето';
	}
	if (month >= 9 && month <= 11) {
		result = 'Осень';
	}
	alert(result);
}
	
function task18(){
	var stroka =prompt('Введите abcde');
	s=stroka[0];
	if(s=='a'){
		alert('да');
	}else{
		alert('нет');
	}
}
