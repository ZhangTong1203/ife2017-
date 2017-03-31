(function(){
	var table = document.getElementById('table');
	for(var i=0; i<11; i++) {
		var tr = document.createElement("tr");
		for(var j=0; j<11; j++){
			var td = document.createElement("td");
			if(i == 0 && j>= 1) {
				td.innerHTML = j;
			}
			if(j == 0 && i >= 1) {
				td.innerHTML = i;
			}
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
})();
var Change = function() {
	this.x = 6;
	this.y = 6;          //x和y的取值范围均为1-10
	this.direc = 0;    //direc有1,2,3,4共四个值，1表示蓝色朝上；2表示朝右；3表示朝下；4表示朝左
	
}
Change.prototype = {
	go : function() {
		var direc = this.direc;
		if(direc == 0 && this.y < 10 && this.y > 1) {
			this.y--;
		}else if(direc == 1 && this.x < 10 && this.x > 1) {
			this.x++;
		}else if(direc == 2 && this.y < 10 && this.y > 1) {
			this.y++;
		}else if(direc == 3 && this.x < 10 && this.x > 1) {
			console.log(this.x);
			this.x--;
		}
	},
	turnLef : function() {
		this.direc--;
	},
	turnRig : function() {
		this.direc++;
	},
	traLef : function(){
		if(this.x < 10 && this.x > 1){
			this.x--;
		}
	},
	traRig : function(){
		if(this.x < 10 && this.x > 1){
			this.x++;
		}
	},
	traTop : function(){
		if(this.y < 10 && this.y > 1){
			this.y--;
		}
	},
	traBot : function(){
		if(this.y < 10 && this.y > 1){
			this.y++;
		}
	},
	lef : function(){
		this.direc = 3;
	},
	rig : function(){
		this.direc = 1;
	},
	top : function(){
		this.direc = 0;
	},
	bot : function(){
		this.direc = 2;
	},
	render : function(){
		space.style.left = (this.x*50 + this.x) + 'px';
		space.style.top = (this.y*50 + this.y) + 'px';
		console.log(this.direc)
		space.style.transform = "rotate(" + (this.direc*90) + "deg)";
		this.direc = this.direc%4 + (this.direc%4<0 ? 4 : 0);
		console.log(this.direc)
		
	}
}
var space = document.getElementsByClassName("space")[0];
var change = new Change();
var act = document.getElementById("act");
act.onclick = function(){
	var action = document.getElementById("action").value;
	switch(action) {
		case "Go" : 
			change.go();
			change.render();
			break;
		case "TUN LEF" : {
			change.turnLef();
			change.render();
			break;
		}
		case "TUN RIG" : {
			change.turnRig();
			change.render();
			break;
		}
		case "TUN BAC" : {
			change.turnLef();
			change.turnLef();
			change.render();
			break;
		}
		case "TRA LEF" : {
			change.traLef();
			change.render();
			break;
		}
		case "TRA TOP" : {
			change.traTop();
			change.render();
			break;
		}
		case "TRA RIG" : {
			change.traRig();
			change.render();
			break;
		}
		case "TRA BOT" : {
			change.traBot();
			change.render();
			break;
		}
		case "MOV LEF" : {
			change.lef();
			change.traLef();
			change.render();
			break;
		}
		case "MOV RIG" : {
			change.rig();
			change.traRig();
			change.render();
			break;
		}
		case "MOV TOP" : {
			change.top();
			change.traTop();
			change.render();
			break;
		}
		case "MOV BOT" : {
			change.bot();
			change.traBot();
			change.render();
			break;
		}
		default : 
			alert("请输入正确的指令\nGo:  前进\nTUN LEF:  向左旋转\nTUN RIG:  向右旋转\nTUN BAC:  旋转180度\nTRA LEF:  平行左移\nTRA RIG:  平行右移\nTRA TOP:  平行上移\nTRA BOT:  平行下移\nMOV LEF:  转向左侧并左移MOV RIG:  转向右侧并右移\nMOV TOP:  转向上侧并上移\nMOV BOT:  转向下侧并下移")
	}
}