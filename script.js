
function task1(){
	var form=document.getElementById('form');
	var sum=0;
	var form_1=document.forms;
	for(var i=0;i<form_1[0].elements.length-1;i++){
		sum+=Number(form_1[0].elements[i].value);
	}

	var button1 = document.getElementById('batton1');
	button1.addEventListener('click', task1_1);

	function task1_1() {
		form_1[0].elements[4].value=sum;
	}
	
}

function task2(){
	var sum=0;
	var form_1=document.forms;
	for(var i=1;i<form_1.length;i++){
		for(var j=0;j<form_1[i].elements.length;j++){
			sum+=Number(form_1[i].elements[j].value);
		}
	}
	var button2 = document.getElementById('batton2');
	button2.addEventListener('click', task1_1);

	function task1_1() {
		form_1[2].elements[4].value=sum;
	}
}

function task3(){
	var color=document.getElementById('color');
	var color2=document.getElementById('color2');
	color2.value=color.value;
	window.setInterval(task3,500);
}


function task4(){
	var select = document.getElementById('select4-1');
	var num = document.getElementById('color4');

	var options = select.options;

	if(event.keyCode==13){
		options[num].selected == true;
	}
}



