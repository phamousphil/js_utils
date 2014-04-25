//This function allows you to automatically open links in a new window using <a href=""> in 
//an XHTML/HTML5 compatible manner. 

//use class="new-window" in your <a> tag.

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
