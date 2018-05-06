var display=document.getElementById('window');
var del=document.getElementById('tor-c');
var symbols=document.getElementsByClassName('symbol1');
var str='';

for(var i=0;i<symbols.length;i++){
	addEvent(symbols[i]);
}
function addEvent(button){
	button.addEventListener('click',event);
	function event() {
				var symbol=button.innerHTML;
				if (symbol == '=') {
					str = eval(str);

				}if (button.getAttribute('data-type') == "C") {
					str = str.slice(0,str.length-1);

				}if (symbol != '='){
					str += symbol;
				}
				display.value = str;
			}
}

del.addEventListener('click',event_del);
function event_del() {
	display.value='';
	str='';	
}