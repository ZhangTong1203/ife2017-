var inputs = document.getElementsByTagName('input');
//用于记录要被传入的节点
var root = document.querySelector(".root");
//跨浏览器处理绑定事件
var EventUtil = function(element,type,fun){
	if(element.addEventListener){
		element.addEventListener(type, fun, false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type, fun);
	}else{
		element["on"+type] = fun;
	}
}
var TreeWalker = function(node){
	this.arr = [];
	this.toggle = false;
	this.isTraversing = false
}

TreeWalker.prototype = {
	//前序遍历顺序
	preOrder : function(node){
		this.arr.push(node);
		if(node.firstElementChild){
			this.preOrder(node.firstElementChild);
		}
		if(node.lastElementChild){
			this.preOrder(node.lastElementChild);
		}
	},
	//中序遍历顺序
	inOrder : function(node){
		if(node.firstElementChild){
			this.inOrder(node.firstElementChild);
		}
		this.arr.push(node);
		if(node.lastElementChild){
			this.inOrder(node.lastElementChild);
		}	
	},
	//后序遍历顺序
	postOrder : function(node){
		if(node.firstElementChild){
			this.postOrder(node.firstElementChild);
		}
		if(node.lastElementChild){
			this.postOrder(node.lastElementChild);
		}	
		this.arr.push(node);
	},
	traverse : function() {
		if(!this.isTraversing){
			for(var i=0; i<this.arr.length; i++){
				this.arr.forEach(function(e){e.style.backgroundColor="#fff"});
				var that = this;
				that.isTraversing = true;
				setTimeout((function(num){
           			return function() {
         	   			if(num-1 >= 0) {
               				that.arr[num-1].style.backgroundColor = "#fff";
                			that.isTraversing = false
                		}
                		that.arr[num].style.backgroundColor = "#f00";
           			}
       			})(i), i*300);
			}
			
		}
	}
};
//绑定事件
EventUtil(inputs[0], "click",function() {
		var treeWalker1 = new TreeWalker();
		treeWalker1.preOrder(root);
		treeWalker1.traverse();
	});
EventUtil(inputs[1], "click",function(){
		var treeWalker2 = new TreeWalker();
		treeWalker2.inOrder(root);
		treeWalker2.traverse();
	});
EventUtil(inputs[2], "click",function(){
		var treeWalker3 = new TreeWalker();
		treeWalker3.postOrder(root);
		treeWalker3.traverse();
	});