function task1(){
	arr=[1,23,324,23,3,2,23,5,3,5,32,24,24];
	for(var i=0;i<arr.length;i++){
		if(arr[i]==5){
			var a=1;
			break;
		}
		
	}
	if (a==1){
		alert('yes');
	}else{
		alert('no');
	}
}
function task2(){
	var a=Number(prompt('Введите число:'));
	flag = 0;
	for(var i=2;i<a;i++){
		if(a%i==0){
			flag = true
			break;
		}
	}
	if(flag == true){
		alert('true');
	}else{
		alert('false');
	}

}

function task3(){
	var arr=[1,2,13,13,4,32];
	flag = 0;
	for(var i=1;i<arr.length;i++){
		if(arr[i]==arr[i-1]){
			flag = true
			break;
		}
	}
	if(flag == true){
		alert('ДА');
	}else{
		alert('НЕТ');
	}
}

