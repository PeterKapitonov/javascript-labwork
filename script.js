function task1(){
	var $h2=$('#task1 h2');
	$h2.html('!');
}

function task2(){
	var $h3=$('#task2 h3');
	$h3.css({color:'red'});
}

function task3(){
	var $h2=$('#task3 h2');
	$h2.css({color:'blue',fontSize:'30px'});
}

function task4(){
	var $test=$('.test4');
	$test.css({color:'red'});
}

function task5(){
	var $test=$('h2.test5');
	$test.css({color:'red'});
}

function task6(){
	$('h3 + h3').css('color', 'red');

}

function task7(){
	$('li + li.www').css('color', 'red');

}

function task8(){
	$('h2 i').css('color', 'red');

}

function task8_1(){
	$('h2 a').css('color', 'red');

}

function task8_2(){
	$('h2 i').css({'color': 'black'});
	$('h2 a').css({'color': 'black'});
}

function task9(){
	$('#task9 h2>i').css('color', 'red');
}

function task10(){
	$(':header').css('color', 'red');
}

function task11(){
	$('h2:not(.test)').css('color', 'red');
}

function task12(){
	$(':header:not(.test)').css('color', 'red');
}

function task13(){
	$(':header + :header').css('color', 'red');
}

function task14(){
	$(':header.test + :header.test').css('color', 'red');
}

function task15(){
	$('#task15 div:empty').css('border', '1px solid red');
}

function task16(){
	$('#task16 p:first').css('color', 'red');
}

function task17(){
	$('#task17 p:last').css('color', 'red');
}

function task18(){
	$('#task18 li:contains("Пункт")').css('color', 'red');
}

function task19(){
	$('#task19 h2:has(i)').css('color', 'red');
}

function task20(){
	$('#task20 h2>i').css('color', 'red');
}