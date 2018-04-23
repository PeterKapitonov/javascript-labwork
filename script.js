function task1(){
	function umnog(num){
		return alert(num**2);
	}
	umnog(111);
}
function task2(){
	function sum(a, b) {
		return a + b;
	}
	alert(sum(100,7));
}

function task3(){
	function func(a, b, c) {
		return (a - b) / c;
	}
	alert(func(100,7,3));
}
function task4(){
	function getDay(num) {
		var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
		return arr[num - 1];
	}
	alert(getDay(5));
}


