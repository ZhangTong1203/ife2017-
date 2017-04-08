var block2 = document.querySelectorAll('.block')[1];
var menu = document.querySelector('.menu');

block2.addEventListener('contextmenu', function (e) {
	e.preventDefault();
	e.returnValue = false; 
	menu.style.display = 'block';
	var width = menu.offsetWidth;
	var height = menu.offsetHeight;
	var clientHeight=document.documentElement.clientHeight;
	var clientWidth = document.documentElement.clientWidth;
	if((clientHeight - e.clientY) >= height){
		menu.style.top = e.clientY + 'px';
		if((clientWidth - e.clientX) >= width){
			menu.style.left = e.clientX + 'px';
		}else {
			menu.style.left = (e.clientX - width) + 'px';
		}
	}else {
		menu.style.top = (e.clientY) + 'px';
		if((clientWidth - e.clientX) >= width){
			menu.style.left = e.clientX + 'px';
		}else {
			menu.style.left = (e.clientX - width) + 'px';
		}
	}
});

document.documentElement.addEventListener('click',function(){
	menu.style.display = 'none';
})