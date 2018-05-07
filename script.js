function task1(){
	var $a=$('li').not('.test1');
	$a.css({color:'blue'});
}

function task2(){
	alert($('#task2 li').first().html());
}

function task3(){
	alert($('#task3 li').last().html());
}

function task4(){
	var $a=$('#task4 li').eq(4);
	alert($a.html());
}

function task5(){
	var $test=$('#task5 li').eq(-2);
	alert($test.html());
}

function task6(){
	var $test=$('#task6 li').slice(1, 4);
	$test.css('color', 'red');

}

function task7(){
	$('li').filter('.test7').css('color', 'red');
}

function task8(){
	$('.test8').next().css('color', 'red');

}



function task9(){
	$('.test9').prev().css('color', 'red');
}

function task10(){
	$('.test10').nextAll().css('color', 'red');
}

function task11(){
	$('.test11').prevAll().css('color', 'red');
}

function task12(){
	$('.www').nextUntil('.test12').css('color', 'red');
}

function task13(){
	$('.test13').prevUntil('.www').css('color', 'red');
}

function task14(){
	$('h1.test14').siblings().css('color', 'red');
}

function task15(){
	$('.test15').siblings('.test').css('color', 'red');
}

