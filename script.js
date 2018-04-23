function task1(){
	var arr='hello world!';
	var arr1=arr[0].toUpperCase()+arr.substr(1);
	alert(arr1);
}
function task2(){
	var str = '123456';
	result = str.split('').reverse().join('');
	alert(result);
}

function task3(){
	var str = '3751';
	arr = str.split('');
	arr.sort();
	var result = arr.join('');
	alert(result);
}
function task4(){
	var str = 'http://phphtml';
	if (str.substr(0, 7) == 'http://') {
		alert('Да');
	} else {
		alert('Нет');
	}	
}

function task5(){
	var str = 'index.html';
	if (str.substr(-5) == '.html') {
		alert('Да');
	} else {
		alert('Нет');
	}
}
