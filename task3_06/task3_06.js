var $ = function (name) {
	return document.querySelector(name);
}
//浮出层居中
function autoCenter(el,out){
	var pageWidth = window.innerWidth,
		pageHeight = window.innerHeight;
	if(typeof pageWidth != "number") {
		if(document.compatMode == "CSS1Compat"){
			pageWidth = document.documentElement.clientWidth;
			pageHeight = document.documentElement.clientHeight;
		}else {
			pageWidth = document.body.clientWidth;
			pageHeight = document.body.clientHeight;
		}
	}
	var elWidth = el.offsetWidth;
	var elHeight = el.offsetHeight;
	el.style.left = (pageWidth - elWidth)/2 +'px';
	el.style.top = (pageHeight - elHeight)/2 +'px';
	out.style.height = pageHeight + 'px';
} 
window.onload = window.onresize = function(){
	var layer = $(".layer");
	var container = $(".container");
	autoCenter(layer,container);
	container.onclick = function(){
		layer.style.display = "none";
		container.style.display = "none";
	}
	var displayButton = $(".displayButton");
	displayButton.onclick = function(){
		layer.style.display = "block";
		container.style.display = "block";
	}
};
