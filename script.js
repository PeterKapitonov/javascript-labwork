function task1(){
	for (var i = 1; i <= 100; i++) {
		document.write(i + '<br>');
	}
}

function task2(){
	for (var i = 100; i >= 1; i--) {
		document.write(i + '<br>');
	}
}

function task3(){
	for (var i = 2; i <= 100; i+=2) {
		document.write(i + '<br>');
	}
	
}

function task4(){
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr[i] = 'x';
	}
	alert(arr);
}

function task5(){
	var arr = [];
	for (var i = 1; i < 11; i++) {
		arr[i] = i;
	}
	alert(arr);
}

function task6(){
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.random().toFixed(2));
	}
	alert(arr);
}

function task7(){
	var arr = [];
	for (var i = 0; i < 10; i++) {
		arr.push(Math.round(Math.random() * 10) + 1);
	}
	alert(arr);
}

function task8(){
	var arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
	document.write(arr+'<br>');
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] > 0 && arr[i] < 10) {
			document.write(arr[i]+'<br>');
		}
	}
}

function task9(){
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] == 5) {
			alert('Есть!');
			break;
		}
	}
}

function task10(){
	var arr = [1, 2, 3, 4, 5];
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	alert(sum);
}

function task11(){
	var arr = [1, 2, 3, 4, 5];
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i] * arr[i];
	}
	alert(sum);

}

function task12(){
	var arr = [1, 2, 3, 7, 6, 9];
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	var result = sum / arr.length;
	alert(result);
}

