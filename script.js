
function task1(){
	var now = new Date();
	alert(now.getDate());
}
function task2(){
	var now = new Date();
	var month_date=['январь','февраль','март','апрель','май','июнь','июль','август','сентаябр','октябрь','ноябрь','декабрь']
	
	alert(month_date[now.getMonth()]);
}

function task3(){
	var now = new Date();
	alert(now.getFullYear());
}

function task4(){
	function getZero(num){
		if (num > 0 && num < 10) { 
			return '0' + num;
		} else {
			return num;
		}
	}
	var date = new Date();
	alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
	
}

function task5(){
	var date=new Date();
	alert(date.getDay());
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
	var date = new Date();
	var minute = Math.floor(date.getTime() / (1000 * 60));
	alert(minute);

}

function task9(){
	var old=Date.parse('1988-01-01');
	var new_date=new Date();
	var diff=Math.floor((new_date-old)/(1000*60*60));
	alert(diff);
}

function task10(){
	var new_date=new Date();
	var old=new Date(new_date.getFullYear(), new_date.getMonth(), new_date.getDate(), 0, 0, 0);
	var result = Math.floor((new_date.getTime() - old.getTime()) / 1000);
	alert(result);
}


