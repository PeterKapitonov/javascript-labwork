function task1(){
	$('h2').wrap('<div>');
}

function task2(){
	$('h2').wrap('<div class="test"></div>');
}

function task3(){
	$('h2').wrapInner('<i>');
}

function task4(){
	$('h2').wrapAll('<i>');
}

function task5(){
	$('div > p').unwrap();
}

function task6(){
	$('h2.task6').before('<p>!</p>');

}

function task7(){
	$('li.task7').after('<p>?</p>');

}

function task8(){
	$('li.task8').before('<p>!</p>').after('<p>?</p>');
	$('#task8').css({height:'480px'})
}

function task9(){
	$('#task9 li').prepend('!');
}

function task10(){
	$('#task10 li').append('!');
}

function task11(){
	$('#task11 li').prepend('!').append('?').css('color', 'red');
}

function task12(){
	$('#task12 li').replaceWith($('#task12 li.task12').text());
}

function task13(){
	$('li').replaceWith($('#task13 li').text().wrap('p'));
}

function task14(){
	$('#task14 li').remove();
}

function task15(){
	$('#task15 li').empty();
}

function task16(){
	alert($('#task16 .www a').attr('href'));
}

function task17(){
	alert($('#task17 .www a:first').attr('href'));
}

function task18(){
	$('#task18 a').each(function (){
		alert($(this).attr('href'));
	});
}

function task19(){
	$('#task19 a').attr('href','!');
}

function task20(){
	$('#task20 a').attr('target', '_blank');
}

function task21(){
	$('#task21 a').each(function (){
		var $elem = $(this);
		$elem.html($elem.attr('href'));
	});
}

function task22(){
	$('#task22 a').each(function (){
		var $elem = $(this);
		$elem.html($elem.html()+'('+$elem.attr('href')+')');
	});
}

function task23(){
	$('#task23 a').each(function (){
	var $elem = $(this);
	$elem.attr('title', $elem.html());
});
}