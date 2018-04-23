function task1(){
	var st="js";
	var st1=st.toUpperCase();
	alert(st);
	alert(st1);
}
function task2(){
	var a=prompt('Введите строку:');
	var st=a.toLowerCase();
	alert(st);
}

function task3(){
	var a='я учу javascript!';
	alert('длина строки "'+a+'" = '+a.length);
}

function task4(){
	var a='я учу javascript!';
	alert(a.substr(2,3));
	alert(a.substring(2,5));
	alert(a.slice(2,5));
}

function task5(){
	var a='я учу javascript!';
	str=a.indexOf('учу');
	str1=a.indexOf('учу1');
	alert(str);
	alert(str1);
}

function task6(){
	var st='Ты учил js?';
	var num=5,result='';
	if(st.length>num){
		result+=st.substr(0,num)+'...';
	}else{
		result=st;
	}
	alert(result);
}

function task7(){
	var str='Я-учу-javascript!';
	a=num.replace(/-/g,'!');
	alert(a);
}

function task8(){
	var str='Я учу javascript!';
	var a=str.split(' ');
	alert(a);
}

function task9(){
	var str='Я учу javascript!';
	var a=str.split('');
	alert(a);
}

function task10(){
	var date='2025-12-31';
	var num=date.split('-');
	var date1='';
	for(var i=num.length;i>0;i--){
		date1+=num[i-1]+'.';
	}
	alert(date1);
}

function task11(){
	var arr=['я', 'учу', 'javascript', '!'];
	arr=arr.join('+');
	alert(arr);
}

function task12(){
	var a='строка';
	var a1=a[0].toUpperCase()+a.slice(1);
	alert(a1);
}
function task13(){
	var str='слова слова слова';
	var arr1=str.split(' '),str1='';
	for(var i=0;i<arr1.length;i++){
		str1+=arr1[i][0].toUpperCase()+arr1[i].slice(1)+' ';
	}
	alert(str1);
}

function task14(){
	var str='var_test_text_mazol_hello_world';
	var arr1=str.split('_'),str1='';
	for(var i=0;i<arr1.length;i++){
		if(i==0){
			str1+=arr1[i]+' ';
		}if(i==arr1.length){
			str1+=arr1[i][0].toUpperCase()+arr1[i].slice(1);

		}else{
			str1+=arr1[i][0].toUpperCase()+arr1[i].slice(1)+' ';
		}	
	}
	alert(str1);
}


