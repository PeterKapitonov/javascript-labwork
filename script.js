
function task1(){
	var arr = [5, 6, 7, 8, 9];
	var newArr = [];
	arr.forEach(function(elem) {
		newArr.push(elem * elem);
	});
	alert(newArr)  
} 

function task2(){
	var arr = [5, 6, 7, 8, 9];
	var sum = 0;
	arr.forEach(function(elem) {
		sum += elem;
	});
	alert(sum)    
} 


function task3(){
	var arr = [5, 6, 7, 8, 9];
	var newArr = arr.map(function(elem) {
		return elem * elem;
	});
	document.write(newArr);   

} 

function task4(){
	var arr = [5, 6, 7, -8, 9];
	function func(elem){return elem > 0};
	alert(arr.every(func));  

} 

function task5(){
	var arr = [5, 6, -7, 8, 9];
	function func(elem){return elem < 0};
	alert(arr.some(func));  
} 

function task6(){
	var arr = [1, -3, 5, 6, -7, 8, 9, -11];
	function func(elem){return elem < 0};
	var newArr = arr.filter(func);
	alert(newArr);  
} 


function task7(){
	var arr = [1, -3, 5, 6, -7, 8, 9, -11];
	function func(elem){return elem % 2 == 0};
	var newArr = arr.filter(func);
	alert(newArr); 
}

function task8(){
	var arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
	function func(elem){return elem.length > 5};
	var newArr = arr.filter(func);
	alert(newArr);  
}

function task9(){
	var arr = [1, 'string', [3, 4], 5, [6, 7]];
	function func(elem){return Array.isArray(elem)};
	var newArr = arr.filter(func);
	alert(newArr);  
}

function task10(){
	var arr = [5, -3, 6, -5, 0, -7, 8, 9];
	function func(elem){return elem < 0};
	var newArr = arr.filter(func);
	alert(newArr.length);  
}
