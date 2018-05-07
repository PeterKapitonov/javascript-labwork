$('.task').before('<p')


$('#hide1').click(function() { //task1
	$('#elem1').slideUp(1000);
});

$('#show1').click(function() {
	$('#elem1').slideDown(1000);
});

$('#hide2').click(function() { //task2
	$('#elem2').slideToggle(500,function(){
				if($('#hide2').html() == 'свернуть'){
					$('#hide2').html('развернуть');
				}
				else $('#hide2').html('свернуть');
			}
		

	);
});


$('#fadeOut3').click(function(){  //task3
	$('#elem3').fadeOut(500);
		return false;
});

$('#fadeIn3').click(function(){  
	$('#elem3').fadeIn(500);
		return false;
});

$('#fadeToDown3').click(function(){  
	$('#elem3').fadeTo(500, 0.5);;    //затемнение на половину за пол сек
		return false;
});

$('#fadeToUp3').click(function(){  
	$('#elem3').fadeTo(500, 1);;
		return false;
});



$('#hide4').click(function(){  ///task4--------------
	$('#elem4').fadeToggle(500, function(){
		if($('#hide4').html() == 'свернуть'){
			$('#hide4').html('показать');
		}
		else $('#hide4').html('свернуть');
		});
		return false;
	}
);

//--------------------------------------------------task5

$('#hide5').click(function(){
	$('#elem5').hide(500);
		return false;
	}
);

$('#show5').click(function(){
	$('#elem5').show(500);
		return false;
	}
);

//--------------------------------------------------task6

$('#elem6').click(function(){
	$(this).animate({width: '450px'}, 2000);
		return false;
	}
);

//--------------------------------------------------task7
$('#elem7').click(function(){
	$(this).animate({width: '+=200px'}, 1000);
		return false;
	}
);