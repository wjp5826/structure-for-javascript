/***
	created by 云天
	time：2018-3-3 16:40:44
	一个栈的结构
**/

// 这里我们采用数组来实现
function Stack() {
	var items = [];
	// 入栈，添加一个新元素到栈顶
	this.push = function(element){
		items.push(element);
	}
	// 出栈方法
	this.pop = function(){
		return items.pop();
	}
	// peek 返回栈顶的元素
	this.peek = function(){
		return items[items.length - 1];
	}
	// 判断栈是否为空,如果为空 返回 true，否则返回 false
	this.isEmpty = function(){
		return items.length === 0;
	}
	// 移除栈里的所有元素
	this.clear = function() {
		items = [];
	}
	// 返回栈里元素的个数
	this.size = function(){
		return items.length;
	}
}
var stack = new Stack();
stack.push('c')
console.log('hello', stack.peek() )
