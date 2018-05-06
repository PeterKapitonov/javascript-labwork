		var tabs = document.getElementById('tabs');
		createTabs(tabs);
		function createTabs(root) {
			var items = root.getElementsByClassName('tabs__item');
			var texts = root.getElementsByClassName('tabs__text');
			root.addEventListener('click', go);
			function go(event) {
				var targ = event.target;
				if (targ.tagName !== 'LI') return;
				var select = 'tabs__item-select';
				for (var i = 0; i < items.length; i++) {
					items[i].classList.remove('select');
				}
				targ.classList.add('select');
				for (var i = 0; i < texts.length; i++) {
					texts[i].style.display = 'none'
				} 
				var id = targ.getAttribute('data-id');;
				root.querySelector('div[id=' + id + ']').style.display = 'block';
			}
		}