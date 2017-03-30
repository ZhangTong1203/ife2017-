var $ = function(name){
	return document.querySelector(name);
};
var $$ = function(name) {
	return document.querySelectorAll(name);
}

//切换radio选项时显示不同的div
function change() {
	var inputs = $$("input");
	var divs = $$("div");
	if(inputs[0].checked) {
		divs[1].className = "";
		divs[2].className = "hide";
	}else {
		divs[1].className = "hide";
		divs[2].className = "";
	}
}

//表单的联动
function changeSchool(){
	var data = {
		beijing : ["北京大学","清华大学","中国人民大学"],
		xian : ["西安交通大学","西北工业大学","西安电子科技大学"],
		shanghai : ["上海交通大学","上海复旦大学","上海财经大学"]
	};
	var selects = $$("select");
	var city = selects[0];
	var school = selects[1];
	var selectedIndex = city.options[city.selectedIndex].value;
	school.innerHTML = "";
	for(var i=0,len=data[selectedIndex].length; i<len; i++){
		var option = document.createElement("option");
		option.innerHTML = data[selectedIndex][i];
		school.appendChild(option);
	}
}
