window.onload = function() {
	var links = document.getElementsByTagName('a');
	for (var i=0;i < links.length;i++) {
		if (links[i].className == 'new-window') {
			links[i].onclick = function() {
				window.open(this.href);
				return false;
			};
		}
	}
};