/**
 * 冒泡排序的实现(从小到大)
 */

 function bubbleSort (arr) {
   for (let i = 0,len = arr.length;i < len;i++) {
      for (let j = 0,len = arr.length - 1;j < len;j++) {
        if (arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
   }
   return arr;
 }
// 优化版本
 function bubbleSort (arr) {
  for (let i = 0,len = arr.length;i < len;i++) {
     for (let j = 0,len = arr.length - 1 - i;j < len;j++) {
       if (arr[j] > arr[j+1]) {
         let temp = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = temp;
       }
     }
  }
  return arr;
}

 console.log('tag', bubbleSort([5,4,3,2,1]))