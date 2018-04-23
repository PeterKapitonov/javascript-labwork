function task1(){
	for(var i=1;i<10;i++){
		for(var j=1;j<=10;j++){
			a=String(i);
			b=String(j);
			document.write(a+'*'+b+'='+(i*j)+' ');
		}
		document.write('<br>')
	}
}
function task2(){
	var a = '';
	for(var i=1;i<10;i++){
		a+=String(i);
	}
	alert(a);
}

function task3(){
	var a = '';
	for(var i=10;i>0;i--){
		a+=String(i);
	}
	alert(a);
}
function task4(){
	var a = '-';
	for(var i=1;i<10;i++){
		a+=String(i)+'-';
	}
	alert(a);
}
function task5(){
	var str = '';
	for (var i = 1; i <= 20; i++) {
		str += 'x';
		document.write(str + '<br>');
	}
}

function task6(){
	for (var i = 1; i <= 129; i++) {
		for (var j = 1; j <= i; j++) {
			document.write(i);
		}
		document.write('<br>');
	}
}
function task7(){
	var str = '';
	for(var i = 0; i <= 100; i++) {
		str += 'xx';
		document.write(str + '<br>');
	}
}
