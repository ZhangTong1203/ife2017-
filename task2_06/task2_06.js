var arr = [];
var collect = document.getElementById("collect");
var number = document.getElementById("number")
function refresh() {
	collect.innerHTML = arr.reduce((pre,cur,index,arr)=>pre+`<div onclick=function(){arr.splice(${index},1);this.onclick=null;}>`+cur+"</div>", "");
	number.value = '';
	number.focus();
}
collect.onclick = refresh
function process(name) {
	if(number.value||number.value==''){
		var arrs = number.value.split(/[\n\r\t\s,，、;；]+/g);
		if(arrs.length>0){
			for(var x in arrs){
				arr[name](arrs[x]);
			}
		}else{
			arr[name](number.value);
		}
		refresh();
	}else{
		alert("Please enter valid number.");
	}
	
}
function search(){
	var query = document.getElementById("query");
	var divs = collect.getElementsByTagName("div");
	for (let i=0, len=divs.length; i<len; i++){
		divs[i].style.backgroundColor="#f00";
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].indexOf(query.value)>-1) {
			divs[i].style.backgroundColor="#0f0";
			//数组a用来记录是否有匹配的div
			var a = [];
			a.push(i);
		}
	}
	query.value = "";
	query.focus();
	if(!a){
		console.log("There is not the string you are finding.");
	}
}

