/***
	链表的实现，
	包括方法
	append： 向链表添加一个元素
	insert：向特定的位置插入一个新的项
	remove：从列表中移除一项
	indexOf: 返回元素在列表中的索引
	removeAt: 从特定的位置移除一项
	isEmpty：检查链表是否为空
	size: 返回链表的包含的元素个数
**/

function linkedList(){
	let Node = function(element){
		this.element = element;
		this.next = null;
	}
	let length = 0;
	let head = null;
	// 向链表尾部添加新元素,考虑 head是否为空
	this.append = function(element){
		let node = new Node(element),
			current;
		if (head === null){
			head = node;
		} else {
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}
		length++;
	},
	// 向特定的位置插入一个项
	this.insert = function(position, element){
		// 校验值的合法性
		if (typeof position !== 'number' || position < 0 || position > length) {
			return false;
		}
		let node = new Node(element), // 新节点
			current = head, // 目前的节点
			previous, // 上一个节点
			index = 0; // 目前的索引
		// 在位置0处添加
		if (position === 0) {
			node.next = current;
			head = node;
		} else {// 在链表中间或尾部添加
			// 循环遍历，找出目标节点
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			// 把新项跟目前项和上一项连接起来
			node.next = current;
			previous.next = node;
			// 更新链表长度
			length++;
			return true;
		}
	},
	// 接受一个元素的值，返回它第一次出现的位置
	this.indexOf = function(element){
		let current = head,
			index = 0;

		while(current){
			if (element === current.element){
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	},
	// 根据元素删除链表的一项
	this.remove = function(element){
		const index = this.indexOf(element);
		return this.removeAt(index);
	},
	// 删除指定位置的元素
	this.removeAt = function(position){
		if (position < 0 || position > length){
			return;
		}
		let index = 0,
			previous,
			current = head;
		if (position === 0){
			if (current) {
				head = current.next;
			} else {
				return null;
			}
		} else {
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}
		length--;
		return current.element;		
	},
	// 输出链表
	this.toString = function(){
		let current = head,
			res = []; // 结果
		while(current){
			res.push(current.element);
			current = current.next;
		}
		return res;
	},
	// 返回链表的长度
	this.length = function(){
		return length;
	},
	// 检查链表是否为空
	this.isEmpty = function(){
		return length === 0;
	}
}
