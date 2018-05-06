
function task1(){
	let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
	let [elem1, elem2, ...arr] = newArr;
	document.write(elem1 + '| '+ elem2 + '|' +arr); 
} 

function task2(){
	let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
	newArr.reverse();
	let [elem1, elem2] = newArr;
	document.write(elem1 + '|'+ elem2);
} 


function task3(){
	let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
	let [, elem2] = newArr;
	alert(elem2);  

} 

function task4(){
	let newArr = ['первый', 'второй'];
	let [, elem2 = 'bbb', elem3 = 'eee'] = newArr;
	document.write(elem2+' '+elem3); 

} 

function task5(){
	let user = {
		name: 'Пётр',
		surname: 'Петров',
		age: '20 лет'
	};

	let{name, surname, age} = user;
	document.write(name + ' ' + surname + ' ' + age);  
} 

function task6(){
	let user = {
		//name: 'Пётр',
		surname: 'Петров',
		//age: '20 лет'
	};

	let{name = 'Аноним', surname = 'Анонимович', age = '? лет'} = user;
	document.write(name + ' ' + surname + ' ' + age); 
} 


function task7(){
	let arr = ['elem1', 'elem2', 'elem3'];
	for (let curr of arr){
		alert(curr);
	}
}

function task8(){
	let arr = ['elem1', 'elem2', 'elem3'];
	arr.reverse();
	for (let curr of arr){
		alert(curr);
	} 
}

