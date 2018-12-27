/**
 * 选择排序：大致思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的将其放在第二位
 */
// 从小到大
 function select (arr) {
   let min; // 最小值的索引
   for (let i = 0,len = arr.length - 1;i < len;i++) {
    min = i;  
    for (let j = i,len = arr.length;j < len;j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
   }
   return arr;
 }

console.log('tag', select([5,4,3,2,1]))