function task1(){
	function ucfirst(stroka){
		var sekta=stroka.split(' ');
		var new_stroka='';
		for(var i=0;i<sekta.length;i++){
			new_stroka+=sekta[i][0].toUpperCase()+sekta[i].slice(1)+' ';
		}
		return new_stroka;
	}
	alert(ucfirst('hello world! good morning'));
}

function task2(){
	function ucfirst(stroka){
		var sekta=stroka.split('_');
		var new_stroka=sekta[0]+'_';
		for(var i=1;i<sekta.length;i++){
			if(i<sekta.length-1){
				new_stroka+=sekta[i][0].toUpperCase()+sekta[i].slice(1)+'_';
			}else{
				new_stroka+=sekta[i][0].toUpperCase()+sekta[i].slice(1);
			}

		}
		return new_stroka;
	}
	alert(ucfirst('var_text_hello'));
}

function task3(){
	function inArray(text,arr){
		for(var i=0;i<arr.length;i++){
			if(arr[i]==text){
				return true;
			}else{
				return false;
			}
		}	
	}
	var arr=['hello','world','!'];
	alert(inArray('hello',arr));
}

function task4(){
	function inArray(num){
		num_arr=num.split('');
		var num='';
		for(var i=0;i<num_arr.length;i+=2){
			num+=num_arr[i+1]+num_arr[i];
		}
		return num;
	}
	alert(inArray('123456'));

}

