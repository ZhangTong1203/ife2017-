var arr = [];
var collect = document.getElementById("collect");
var number = document.getElementById("number")
function refresh() {
	collect.innerHTML = arr.reduce((pre,cur,index,arr)=>pre+"<div onclick=collect.removeChild(this);>"+cur+"</div>", "");
}
function process(name) {
	if(number.value && number.value.match(/^(?:[1-9]\d|100)$/)){
		arr[name](number.value);
		refresh();
	}else{
		alert("Please enter valid number.");
	}
	
}
