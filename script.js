function task1(){
	function isNumberInRange(n){
		if(n>0 && n<10){
			return true;
		}else{
			return false;
		}
	}
	var a=prompt('Введите число:');
	alert(isNumberInRange(a));
}

function task2(){
	function isNumberInRange(n){
		if(n>0 && n<10){
			return true;
		}else{
			return false;
		}
	}
	var arr = [1,23,23,2,6,2,4,7,22];
	var arr1=[];
	for(var i=0;i<arr.length;i++){
		if(isNumberInRange(arr[i])==true){
			arr1.push(arr[i]);
		}
	}
	alert(arr1);
}

function task3(){
	function getDigitsSum(т){
		var m=String(m);
		var summ=0;
		for(var i=0;i<m.length;i++){
			summ+=Number(m[i]);
		}
		return summ;
	}
	m=getDigitsSum(1234234234);
	alert(m);
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

