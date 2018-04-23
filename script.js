function task1(){
	var arr = [];
	var x ='x';
	for(var i=1;i<100;i++){
		arr.push(x);
		x+='x';
		document.write(arr+'<br>');
	}
}

function task2(){
	var arr = [];
	for(var i=1;i<100;i++){
		var num='';
		for(var j=1;j<=i;j++){
			num+=i;
		}
		arr.push(String(num));
		arr=arr.slice(-1);
		document.write(arr+'<br>');
	}
}

function task3(){
	function arrayFill(x,k){
		array=[];
		for(var i=0;i<k;i++){
			array.push(String(x));
		}
		return array;
	}
	alert(arrayFill('Hello',6))
	
}

function task4(){
	arr=[1,3,1,-6,-95,54,54,3];
	num=1;
	for(var i=0;i<arr.length;i++){
		num*=arr[i];
		alert(num);
		if(num>10){
			alert((i+1)+' элементa');
			break;
		}
	}
	if(num<10){
		alert('если сложить все элементы получиться меньше 10');
	}

}

function task5(){
	var arr=[1,3,1,-6,-95,54,54,3];
	var arr1=[];
	for(var i=arr.length-1;i>=0;i--){
		arr1.push(arr[i]);
	}
	alert(arr1);
}

function task6(){
	arr=[[1, 2, 3], [4, 5], [6,3],[3,3,4]];
	summ=0;
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr[i].length;j++){
			summ+=arr[i][j];
		}
	}
	alert(summ);

}

function task7(){
	var arr=[[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
	summ=0;
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr[i].length;j++){
			for(var g=0;g<arr[i][j].length;g++){
				summ+=arr[i][j][g];
			}
		}
	}
	alert(summ);
}

