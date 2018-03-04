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
// 另一种实现
let Stack1 = (function(){
	const items = new WeakMap();
	class Stack {
		constructor(){
			items.set(this, []);
		}
		// 入栈，添加一个新元素到栈顶
		push(element){
			items.get(this).push(element);
		}
		// 出栈方法
	pop(){
		return items.get(this).pop();
	}
	// peek 返回栈顶的元素
	peek(){
		return items.get(this)[items.length - 1];
	}
	// 判断栈是否为空,如果为空 返回 true，否则返回 false
	isEmpty(){
		return items.get(this).length === 0;
	}
	// 移除栈里的所有元素
	clear() {
		items.set(this, []);
	}
	// 返回栈里元素的个数
	size(){
		return items.get(this).length;
	}
}
return Stack;
})();