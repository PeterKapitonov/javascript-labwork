function task1while(){
	var i = 1;
	while(i<=100){
		document.write(i+'<br>');
		i++;
	}
}
function task1for(){
	for(var i=0; i<=100;i++){
		document.write(i+'<br>');
	}
}
function task2(){
	for(var i=11;i<=33;i++){
		document.write(i+"<br>");
	}
}

function task3(){
	for(var i=0;i<=100;i+=2){
		document.write(i+"<br>");
	}
}

function task4(){
	var summ=0;
	for(var i=1;i<=100;i+=1){
		summ+=i;
		document.write(i+' '+summ+"<br>");
	}
	alert(summ);
}

function task5(){
	var arr=[1,2,3,4,5];
	for(var i=0;i<arr.length;i++){
		alert(arr[i]);
	}
}

function task6(){
	var arr=[1,2,3,4,5];
	var result=0;
	for(var i=0;i<arr.length;i++){
		result+=arr[i];
	}
	alert(result);
}

function task7(){
	var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
	for(var key in obj){
		alert(key); //ключи
		alert(obj[key]); //значения
	}
}

function task8(){
	var obj = {Коля: '333', Толя: '232', Сашя: '23423'};
	for(var key in obj){
		alert(key+'- зарплата '+obj[key]+' рублей в день.');
	}
}

function task9(){
	var arr=[2,5,9,15,0,4];
	for(var i=0;i<=arr.length;i++){
		if(arr[i]>3 && arr[i]<10){
			document.write(arr[i]+'<br>');
		}
	}

}

function task10(){
	var arr=[-2,15,-49,-15,10,4];
	var summ=0;
	for(var i=0;i<=arr.length;i++){
		if(arr[i]>0){
			summ+=arr[i];
		}
	}
	document.write(arr+'<br>');
	document.write('сумма положительных элементов равна: '+summ);
}

function task11(){
	var arr=[1,2,5,9,4,13,4,10];
	for(var i=0;i<=arr.length;i++){
		if(arr[i]==4){
			alert('Есть!');
			break;
		}
	
	}
}

function task12(){
	var arr = ['10', 20, '30', '50', '235', '3000'];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][0] == '1' || arr[i][0] == '2' || arr[i][0] == '5') {
			alert(arr[i]);
		}
	}

}

function task13(){
	var arr=[1,2,3,4,5,6,7,8,9];
	var stroka='';
		for(var i;i<=arr.length;i++){
			stroka+='-'+String(arr[i]);
		}
	document.write(stroka);
}

function task14(){
	var arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
	for(var i=0;i<arr.length;i++){
		if(arr[i]=='Сб' || arr[i]=='Вс'){
			document.write('<strong>'+arr[i]+'</strong><br>');
		}else{
			document.write(arr[i]+'<br>');
		}
	}
}

function task15(){
	var arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
	var day=Number(prompt('Введите номер дня недели:'));
	for(var i=0;i<arr.length;i++){
		if((i+1)==day){
			document.write('<i>'+arr[i]+'</i><br>');
		}else{
			document.write(arr[i]+'<br>');
		}
	}
}

function task16(){
	var num = Number(prompt('Ведите число:'));
	for(var i=0;i<100;i++){
		num/=2;
		if(num<50){
			break;
		}
	}
	alert(num);
}

