function task1(){
	$('p:has(b)').wrap('<div>');
}

function task2(){
	$('p.www2').prepend('!').html('<h3>'+$('p.www2').html()+'</h3>').css('color', 'red');
}

function task3(){
	$('p.www3').replaceWith(function() {
		return '<div>' + $(this).html() + '</div>';
	});
}

function task4(){
	$('#task4 :checkbox').prop('disabled', true);
}

function task5(){
	$('#task5 :checkbox:not([disabled])').prop('checked', true);
}

function task6(){
	$('#test6').prev().html('!').end().next().html('?');

}

function task7(){
	var $elem = $('#test7');
	var text = $elem.html();
	$elem.prev().html(text).end().next().html(text);

}

function task8(){
	var $elem = $('#test8');
	var text = $elem.html();
	$elem.prevUntil('p').last().prev().html(text);

}



function task9(){
	$('#task9 li').addClass('.www').wrapInner('<i>').after('<li>привет</li>');
}

function task10(){
	$('#task10 li:eq(3)').parent().prev().wrap('<div class="www10">');
}

function task11(){
	$('p:not(.www11').each(function (index) {
		$(this).append(index);
	});
}

function task12(){
	$('p.www12').each(function() {
		var $elem = $(this);
		$elem.before($elem.clone().css('color', 'red')).css('color', 'green');
	});
	$('#task12').css('height','350px');
}

function task13(){
	$('h2 + p.www13').each(function() {
		var $elem = $(this);
		$elem.prev().before($elem);
	});
}

function task14(){
	$('p:empty').html(function() {
		return $(this).prev().html();
	});
}

function task15(){
	$('b').each(function() {
		$(this).parent('.www15, p').css({color: 'red', fontSize: '30px'});
	});
	$('#task15').css('height','420px');
}

function task16(){
	$('p:empty').each(function() {
		$(this).html($(this).prevAll('h2').first().html());
	});
	$('#task16').css('height','320px');
}

function task17(){
	$('input.www17').val(function (index, value) {
		return value * value;
	});
}

function task18(){
	var $elem = $('#test18');
	var textPrev = $elem.prev().html();
	var textNext = $elem.next().html();
	$elem.prepend(textPrev+' ');
	$elem.append(' '+textNext);
}

function task19(){
	var $id = $('#test19');
	var $next = $id.nextAll().eq(1);
	var $prev = $id.prevAll().eq(1);
	var nextText = $next.html();
	var prevText = $prev.html();
	$next.html(prevText);
	$prev.html(nextText);
}

function task20(){
	$('div.www20').children(':not(h2)').css('color', 'red');
}

function task21(){
	$('p').css('color', 'red').filter('.www21').html('!');
}

function task22(){
	$('p.www22').css('color', 'red').first().html('!').end().last().html('?');
}

function task23(){
	$('p.www23').append(function (index, text) {
		return text;
	})
}

function task24(){
	$('p.www24').append(function (index) {
		return index;
	});
}

function task25(){
	$('p.www25').append(function (index, text) {
		return $(this).html(index * Number(text));
	});
}


	$('p.www26').on('click', function() {
        	$(this).prev().remove().end().next().remove();
    });


	$('p.www27').on('click', function() {
        	$('p').prevUntil(':header').remove();
    });


	$('p.www28').on('click', function() {
        	$(this).nextAll('.test28').first().remove();
    });


	$('p.www29').on('click', function() {
        	$(this).nextAll().eq(4).remove();
    });


	$('p.www30').on('click', function() {
        	$(this).nextAll().eq(4).not('h2').remove();
    });