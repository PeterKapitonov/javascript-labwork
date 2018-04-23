function task1(){
	var arr1=[1,2,3];
	var arr2=[4,5,6];
	alert(arr1.concat(arr2));
}
function task2(){
	var arr=[1,2,3,3,4];
	arr.reverse();
	alert(arr);
}

function task3(){
	var arr=[1,2,3];
	arr.push(4,4,5,6);
	alert(arr);
}
function task4(){
	var arr=[1,2,3];
	arr.unshift(4,4,5,6);
	alert(arr);
}

function task5(){
	var arr= ['js', 'css', 'jq'];
	alert(arr.shift());
}

function task6(){
	var arr= ['js', 'css', 'jq'];
	alert(arr.pop());
}

function task7(){
	var arr=[1, 2, 3, 4, 5];
	var arr1=arr.slice(0,3);
	alert(arr1);
}

function task8(){
	var arr=[1, 2, 3, 4, 5];
	var arr1=arr.slice(3);
	alert(arr1);
}

function task9(){
	var arr=[1, 2, 3, 4, 5];
	arr.splice(1,2);
	alert(arr);
}

function task10(){
	var arr=[1, 2, 3, 4, 5];
	var arr1=arr.splice(1,3);
	alert(arr1);
}

function task11(){
	var arr = [1, 2, 3, 4, 5];
	arr.splice(3, 0, 'a', 'b', 'c');
	alert(arr);
}

function task12(){
	var arr = [1, 2, 3, 4, 5];
	arr.splice(1, 0, 'a', 'b');
	arr.splice(6, 0, 'c');
	arr.splice(8, 0, 'e');
	alert(arr);
}
function task13(){
	var arr = [3, 4, 1, 2, 7];
	arr.sort();
	alert(arr);
}

function task14(){
	var arr = {js: 'test', jq: 'hello', css: 'world'};
	var result = Object.keys(arr);
	alert(result);
}


