/**
	队列的实现
**/
// 这里是队列的实现，采取数组来存放 
function Queue(argument) {
	let items = [];
	// 进入队列
	this.enqueue = function(ele){
		items.push(ele);
	};
	// 出队列
	this.dequeue = function(){
		return items.shift();
	};
	// 返回队列中第一个元素
	this.front = function(){
		return items[0];
	};
	// 是否为空
	this.isEmpty = function(){
		return items.length === 0;
	};
	// 队列的长度
	this.size = function(){
		return items.length;
	}
}
