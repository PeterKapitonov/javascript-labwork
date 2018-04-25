
function task1(){
	var ul = document.getElementsByTagName('ul');
	ul[0].addEventListener('click', addSign);
	ul[1].addEventListener('click', addSign);
	function addSign() {
		event.target.innerHTML = event.target.innerHTML + '!';
	}

	var button = document.getElementById('task111');
	button.addEventListener('click', task1_0);

	function task1_0() {
		var li = document.createElement('li');
		li.innerHTML = 'пункт';
		ul[0].appendChild(li);
	}

	var button1 = document.getElementById('task112');
	button1.addEventListener('click', task1_1);

	function task1_1() {
		var li = document.createElement('li');
		li.innerHTML = 'пункт';
		ul[1].appendChild(li);
	}
	
}

function task2(){
	var table=document.getElementById('onclock');//таблица
	var addition=document.getElementById('sur-name');//input с именем и фамилией
	if(event.keyCode==13){
		var mass=addition.value.split(' ');
		if(mass.length==2){
			if(isNaN(mass[0]) && isNaN(mass[1]) ){
				table.innerHTML=table.innerHTML+'<tr><td id="surname">'+mass[0]+'</td><td id="name">'+mass[1]+'</td></tr>';
			}else{
				alert('Введите правлиьно своё имя');
			}

				
		}else{
			alert('Введите правлиьно своё имя');
		}
	}
	table.addEventListener('click',addSign);
	function addSign(){
		var art=prompt('Введите изменения:');
		event.target.innerHTML= String(art);
	}
}

