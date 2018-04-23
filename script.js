
function task1(){
	var date=document.getElementById('task1');
	date.innerHTML=parseInt(date.innerHTML)+1;
	window.setTimeout(task1,1000);
}
function task2_1(){
	window.timeId=window.setInterval(task2_2,1000);//таймер запускает функцию через каждую 1 сек
 	document.getElementById('task2_1').disabled = true;
	document.getElementById('task2_3').disabled = false;
}
function task2_2(){
	var date=document.getElementById('task2');
	date.innerHTML=parseInt(date.innerHTML)+1;
}
function task2_3(){
	clearInterval(window.timeId);//функ останавливает таймер
	document.getElementById('task2_1').disabled = false;
	document.getElementById('task2_3').disabled = true;
}
function task3_1(){
	window.setInterval(task3,1000);
}
function task3(){
	var date= new Date();
	var hour=date.getHours();
	var min=date.getMinutes();
	var sec=date.getSeconds();
	var span_task3=document.getElementById('task3');
	span_task3.innerHTML=hour+':'+min+':'+sec;

}

function task4(){
	var span_task4=document.getElementById('task4');
	var taim=span_task4.innerHTML;
	if(taim>1){
		span_task4.innerHTML=parseInt(span_task4.innerHTML)-1;
	}else{
		span_task4.innerHTML='отсчёт окончен';
	}
	window.setTimeout(task4,1000);
	
}

function task5(){
	var elem=document.getElementById('task5');
	var clas=elem.className;
	var mass=clas.split(' ');
	var new_mass=['task5-1','task5-2','task5-3','task5-4'];
	for(var i=0;i<4;i++){
		if(mass[1]==new_mass[i]){
			var num=i;
			break;
		}	
	}

	if(num==3){
		elem.className=mass[0]+' '+new_mass[0];

	}else{
		elem.className=mass[0]+' '+new_mass[num+1];
	}
	window.setTimeout(task5,1000);
	
}

function task6(){
	var date = new Date();
	var day = date.getDay();

	function showDay(day) {
		var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
		return days[day];
	}	

	alert(showDay(day));
}

function task7(){
	alert(day);
	alert(mon);
}

function task8(){
	var seconds = document.getElementById('seconds');
	var minutes = document.getElementById('minutes');
	var hours = document.getElementById('hours');
	var now = new Date();
	var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0);
	var diff =  Math.floor((midnight - now)/1000);//разница в милисекундах, перевели в секунды
	var hoursRemain   = Math.floor(diff/(60*60));
	var minutesRemain = Math.floor((diff-hoursRemain*60*60)/60);
	var secondsRemain = Math.floor(diff%60);
	hours.innerHTML   = hoursRemain;
	minutes.innerHTML = addZero(minutesRemain);
	seconds.innerHTML = addZero(secondsRemain); 	
	window.setTimeout(task8,1000);	
}
function addZero(num){
	if(num <=9) return '0'+num;
		else return num;
}

