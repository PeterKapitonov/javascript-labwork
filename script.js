   //task1
	$('#block1').click(function(){
			$(this).effect('blind', 500);
			return false;
		}
	);


//------------------------------------TASK2
$(document).ready(function(){
	$('#block2').click(function(){
		$(this).effect('blind', {direction: 'horizontal'}, 500);
		return false;
	});
});

//------------------------------------TASK3
$(document).ready(function(){
	$('#block3').click(function(){
		$(this).effect('bounce', 500);
		return false;
	});
});

//------------------------------------TASK4
$(document).ready(function(){
	$('#block4').click(function(){
		$(this).effect('bounce', {direction: 'right'}, 500);
		return false;
	});
});

//------------------------------------TASK5
$(document).ready(function(){
	$('#block5').click(function(){
		$(this).effect('clip', 500);
		return false;
	});
});

//------------------------------------TASK6
$(document).ready(function(){
	$('#block6').click(function(){
		$(this).effect('clip', {direction: 'horizontal'}, 500);
		return false;
	});
});

//------------------------------------TASK7
$(document).ready(function(){
	$('#block7').click(function(){
		$(this).effect('drop', {direction: 'left'}, 500);
		return false;
	});
});

//------------------------------------TASK8
$(document).ready(function(){
	$('#block8').click(function(){
		$(this).effect('drop', {direction: 'right'}, 500);
		return false;
	});
});

//------------------------------------TASK9
$(document).ready(function(){
	$('#block9').click(function(){
		$(this).effect('drop', {direction: 'down'}, 500);
		return false;
	});
});

//------------------------------------TASK10
$(document).ready(function(){
	$('#block10').click(function(){
		$(this).effect('drop', {direction: 'up'}, 500);
		return false;
	});
});

//------------------------------------TASK11
$(document).ready(function(){
	$('#block11').click(function(){
		$(this).effect('explode', 2000);
		return false;
	});
});

//------------------------------------TASK12
$(document).ready(function(){
	$('#block12').click(function(){
		$(this).effect('explode', {pieces: 14}, 5000);
		return false;
	});
});

//------------------------------------TASK13
$(document).ready(function(){
	$('#block13').click(function(){
		$(this).effect('fold', 1000);
		return false;
	});
});

//------------------------------------TASK14
$(document).ready(function(){
	$('#block14').click(function(){
		$(this).effect('fold', {size: '100px'}, 1000);
		return false;
	});
});

//------------------------------------TASK15
$(document).ready(function(){
	$('#block15').click(function(){
		$(this).effect('fold', {horizFirst: true, size: '30px'}, 2000);
		return false;
	});
});

//------------------------------------TASK16
$(document).ready(function(){
	$('#link16').mouseover(function(){
		$('#block16').effect('highlight', {color: 'black'}, 500);
		return false;
	});
});

//------------------------------------TASK17
$(document).ready(function(){
	$('#block17').click(function(){
		$(this).effect('puff', {percent: 300}, 1000);
		return false;
	});
});

//------------------------------------TASK18
$(document).ready(function(){
	$('#block18').click(function(){
		$(this).effect('pulsate', 100);
		return false;
	});
});

//------------------------------------TASK19
$(document).ready(function(){
	$('#block19').click(function(){
		$(this).effect('shake', 200);
		return false;
	});
});

//------------------------------------TASK20
$(document).ready(function(){
	$('#block20').click(function(){
		$(this).effect('shake', {direction: 'up', distance: 50, times: 6}, 200);
		return false;
	});
});

//------------------------------------TASK21
$(document).ready(function(){
	$('#block21').click(function(){
		$(this).effect('slide', {mode: 'hide'}, 1000);
		return false;
	});
});

//------------------------------------TASK22
$(document).ready(function(){
	$('#block22').click(function(){
		$(this).effect('slide', {mode: 'hide', direction: 'right'}, 1000);
		return false;
	});
});

//------------------------------------TASK23
$(document).ready(function(){
	$('#block23').click(function(){
		$(this).effect('slide', {mode: 'hide', direction: 'down'}, 1000);
		return false;
	});
});

//------------------------------------TASK24
$(document).ready(function(){
	$('#block24').click(function(){
		$(this).effect('slide', {mode: 'hide', direction: 'up'}, 1000);
		return false;
	});
});

//------------------------------------TASK25
$(document).ready(function(){
	$('#block25').click(function(){
		$(this).effect('transfer', {to: '#block25-1'}, 400);
		return false;
	});
});

//------------------------------------TASK26  Аккордеон
$(document).ready(function(){
	$('#accordion26').accordion();
});

//------------------------------------TASK27
$(document).ready(function(){
	$('#tabs27').tabs();
});

//------------------------------------TASK28
$(document).ready(function(){
	$('#tabs28').tabs({event: "mouseover"});  //срабатывает при наведении
});

//------------------------------------TASK29
$(document).ready(function(){
	$('#tabs29').tabs({collapsible: true});
});

//------------------------------------TASK30
$(document).ready(function(){
	$("#datepicker30").datepicker();
});

//------------------------------------TASK31
$(document).ready(function(){
	$("#datepicker31").datepicker().datepicker("option", "dateFormat", 'dd.mm.yy');
});

//------------------------------------TASK35
$(document).ready(function(){
	$("#dialog35").dialog();
});