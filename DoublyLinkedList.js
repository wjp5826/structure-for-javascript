/**
 * 双向链表的实现
 * 方法如下：
 * insert: 在任意的位置添加新的项
 * remove: 删除任意的一项
 */

 function DoublyLinkedList(){
  // 项 
  let Node = function(element){
    this.element = element;
    this.prev = null;
    this.next = null;
  }
  let head = null; // 链表的首项
  let tail = null; // 链表的尾
  let length = 0; // 链表的长度

  this.insert = function(position, element){
    // 校验position
    if ( typeof position !== 'number' ||  position < 0 || position > length){
      return false;
    }
    let node = new Node(element),
        current = head, // 目前节点
        previous,
        index = 0;
    if (position === 0){ // 添加到第一个
        if (!head){ // head为空
          head = node;
          tail = node;
        } else { // 不为空
          node.next = current;
          current.prev = node;
          head = node;
        }
    } else if (position === length) { // 添加到最后一个 
      current = tail;
      current.next = node;
      node.prev = current;
      tail = node;
    } else { // 在中间部分添加
      while(index++ < position){
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;

      current.prev = node;
      node.prev = previous;
    }
    length++;
    return true;
  },
  // 删除指定位置的项
  this.removeAt = function(position){
    // 校验position
    if (typeof position !== 'number' ||  position < 0 || position > length){
      throw new Error('expected a valid number');
    }
    let previous,
        index = 0,
        current = head;
   
    if(position === 0){ // 头部
      if (!head){ // 空链表
        length = 0;
        return null;
      } else {
        current = current.next;
        current.prev = null;
        head = current;
      }
    } else if (position === length) {
      current = tail;
      current = current.prev;
      current.next = null;
      tail = current;
    } else {
      while(index++ < position){
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
      current.next.prev = previous;
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
	}
 }

 let link = new DoublyLinkedList();
 link.insert(0, '0');
 link.insert(0, '1');
 link.insert(0, '2');
 link.insert(0, '3');


 console.log(link.removeAt())