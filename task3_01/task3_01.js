var verify = document.getElementsByTagName("input")[1];
var EventUtil = function(element,type,fun){
	if(element.addEventListener){
		element.addEventListener(type, fun, false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type, fun);
	}else{
		element["on"+type] = fun;
	}
};
EventUtil(verify, "click", function(){
	var input = document.getElementsByTagName("input")[0];
	var spanvalue = document.getElementsByTagName("span")[0];
	if(input.value === null ||input.value === undefined || input.value === ""){
		input.style.borderColor = "#DD0007";
		spanvalue.style.color = "#DD0007";
		var text = "姓名不能为空";
		spanvalue.innerHTML = text;
	}else if(getLength(input.value)>=4 && getLength(input.value)<=16){
		input.style.borderColor = "#82C970";
		spanvalue.style.color = "#82C970";
		var text = "名称格式正确";
		spanvalue.innerHTML = text;
	}else{
		input.style.borderColor = "#DD0007";
		spanvalue.style.color = "#DD0007";
		var text = "请输入4-16个字符";
		spanvalue.innerHTML = text;
	}
}); 
function getLength(str) {
	var len = 0;
	for(var i=0; i<str.length; i++){
		if(str[i].charCode>=0 && str[i].charCode<=128){
			len += 1;
		}else {
			len += 1;
		}
	}
	return len;
}
