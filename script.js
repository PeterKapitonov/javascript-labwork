function task1(){
	function func(arr) {
		alert(arr[0]);
		arr.splice(0, 1);
		if (arr.length > 0) {
			func(arr);
		}
	}
	var arr1=[1,123,4,42,23,4,423,23];
	alert(func([arr1]));
}

function task2(){
	function isNumberInRange(num){
		var num_new=num.split('');
		var sum=0;
		for(var i=0;i<num_new.length;i++){
			sum+=Number(num_new[i]);
		}
		alert(sum);
		if(sum>9){
			isNumberInRange(num-1);
		}

	}
	var num='112344';
	isNumberInRange(num);
}

