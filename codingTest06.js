/*
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

arr = [1,2,3,4], return = 2.5
arr = [5,5], return = 5
*/

function solution(...arr){
  var answer = 0;
  const total = arr.reduce((acc, cur)=>{
    return acc += cur;
  }, 0)
  answer = total / arr.length;
  return answer;
}