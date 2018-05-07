$('#task1 p').click(function() {   //task1
	alert($(this).html());
});

$('#task2 a').mouseover(task2); //task2
function task2(){
	$(this).html($(this).html()+'('+$(this).attr('href')+')');
};

$('#task3 a').mouseover(task3); //task3
function task3(){
	$(this).html($(this).html()+'('+$(this).attr('href')+')');
	$(this).off('mouseover', task3);
};

$('#task4 input').mouseover(function(){ //task4
	$('#test4').html($('#test4').html()+' '+$(this).attr('value'));
	
});

$('#task5 input').click(function(){ //task5
	alert($(this).attr('value'));
	$(this).off('click');
});

$('#task6 p').click(function(){ //task6
	alert($(this).html()**2);
});

$('#task7 p').click(function(){ //task6
	$(this).html($(this).html()**2);
	$(this).off('click');
});

$('#task7 p').dblclick(function(){ 
	$(this).html(String($(this).html())+String($(this).html()));
	$(this).off('dblclick');
});

$('#task8 a').mouseover(task8); //task2
function task8(){
	$(this).html($(this).html()+'('+$(this).attr('href')+')');
};