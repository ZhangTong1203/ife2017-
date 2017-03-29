var change = {
	focusIt : function (element, txt) {
		element.nextElementSibling.style.display = "block";
		element.nextElementSibling.innerHTML = txt;
		element.nextElementSibling.className = "caution";
		element.style.borderColor = "#ccc";
		element.style.borderRadius = "5px";
    	element.style.boxShadow = "0 0 2px 1px #2E78B9";
	},
	isRight : false,
	blurit : function (element,ifCorrect,txt1,txt2) {
		if(!ifCorrect){	
			element.nextElementSibling.innerHTML = txt1;
			element.nextElementSibling.className = "warn";
			element.style.borderColor = "#DD0007";
			element.style.boxShadow = "none";
			change.isRight = false;
		}else if(ifCorrect){
			element.nextElementSibling.innerHTML = txt2;
			element.nextElementSibling.className = "correct";
			element.style.borderColor = "#82C970";
			element.style.boxShadow = "none";
			change.isRight = true;
		}
	},
	getLength : function(str){
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
};
//绑定事件
var EventUtil = function(element,type,fun){
	if(element.addEventListener){
		element.addEventListener(type, fun, false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type, fun);
	}else{
		element["on"+type] = fun;
	}
};
//计算字符串长度
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

var mustin = document.getElementsByClassName('mustin');
//用于记录验证是否通过的数组
EventUtil(mustin[0], "focus", function() {
	change.focusIt(this, "必填，长度为4-16个字符");
});
EventUtil(mustin[0], "blur", function() {
	change.blurit(this, (change.getLength(this.value)>=4 && change.getLength(this.value)<=16), "名称不能为空", "验证通过");
});
EventUtil(mustin[1], "focus", function(){
	change.focusIt(this, "长度为4-16个字符");
});
EventUtil(mustin[1], "blur", function() {
	change.blurit(this, (change.getLength(this.value)>=4 && change.getLength(this.value)<=16), "请设置密码", "验证通过");
});
EventUtil(mustin[2], "focus", function(){
	change.focusIt(this, "再次输入相同密码")
});
EventUtil(mustin[2], "blur", function() {
	change.blurit(this, 
		(change.getLength(this.value)>=4 && change.getLength(this.value)<=16) && mustin[2].value == mustin[1].value,
		"请输入相同的密码", "密码一致");
});
EventUtil(mustin[3], "focus", function(){
	change.focusIt(this, "请输入有效的邮箱")
});
EventUtil(mustin[3], "blur", function() {
	change.blurit(this, 
		/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.value), 
		"请按正确的格式输入", "验证通过");
});
EventUtil(mustin[4], "focus", function(){
	change.focusIt(this, "请输入有效的手机号" )
});
EventUtil(mustin[4], "blur", function() {
	change.blurit(this, 
		/^1(3|4|5|7|8)\d{9}$/.test(this.value),
		"请按正确的格式输入", "验证通过");
});

//给提交按钮绑定事件
var submit = document.getElementById("submit");
EventUtil(submit, "click", function () {
	if(change.isRight){
		alert("输入成功");
	}else {
		alert("请检查你的输入");
	}
});
