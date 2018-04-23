function task1(){
	var a=Number(prompt('Введите а:')),b=Number(prompt('Введите b:'));
	var ostat=a%b;
	alert('остаток от деления а на b = '+ostat);
}
function task2(){
	var a=Number(prompt('Введите а:')),b=Number(prompt('Введите b:'));
	var ostat=a%b;
	if(ostat==0){
		alert('Делиться без остсатка, результат деления: '+(a/b));
	}else{
		alert('Делится с остатком. Остаток: '+ ostat);
	}
}

function task3(){
	var a=2,b=10;
	var st= Math.pow(a,b);//возведение a в b-ую степень
	alert(st);
}

function task4(){
	var st= Math.sqrt(245);//квадратный корень числа 245
	alert(st);
}

function task5(){
	var arr=[4, 2, 5, 19, 13, 0, 10];
	var koren,summ=0;
	for(var i=0;i<arr.length;i++){
		summ+=arr[i]**3;
	}
	koren=Math.sqrt(summ);
	document.write(summ);
}

function task6(){
	var num=379;
	num1=Math.sqrt(num);
	for(var i=0;i<20;i++){
		document.write(num1.toFixed(i)+'<br>');
	}
}

function task7(){
	var num=Math.sqrt(587);
	document.write('квадратный корень равен: '+num+'<br>');
	document.write('Функция ceil: '+Math.ceil(num)+'<br>');
	document.write('Функция floor: '+Math.floor(num)+'<br>');
}

function task8(){
	var num=[ 4, -2, 5, 19, -130, 0, 10],num_max,num_min;
	num_max=Math.max.apply(null,num);
	num_min=Math.min.apply(null,num);	
	document.write(num_max+"<br>");
	document.write(num_min);
}

function task9(){
	function getRandomInt(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	}
	document.write(getRandomInt(-10,100));

}

function task10(){
	var arr=[];
	for(var i=0;i<=20;i++){
		arr[i]=Math.ceil(Math.random()*(100-1+1))+1;
	}
	for(j=0;j<arr.length;j++){
		document.write(arr[j]+'<br>');
	}
}

function task11(){
	var a=Number(prompt('Введите число а:')),b=Number(prompt('Введите число b:'));
	var modraz=Math.abs(a-b);
	alert(modraz);
}

function task12(){
	var a=Number(prompt('Введите число а:')),b=Number(prompt('Введите число b:'));
	var c=Math.abs(a-b);
	alert(c);

}

function task13(){
	var arr=[12, 15, 20, 25, 59, 79];
	var sred=0;
	for(var i=0;i<arr.length;i++){
		sred+=arr[i];
	}
	alert(sred+' '+arr.length);
	sred=sred/arr.length;
	alert(sred);
}

function task14(){
	var a=Number(prompt('Введите число а:'));
	fact=1;
	for(var i=1;i<=a;i++){
		fact*=i;
	}
	document.write(a+'!='+fact);
}


