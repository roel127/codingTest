/*
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

N의 범위 : 100,000,000 이하의 자연수
*/

function solution(n){
  var answer = 0;
  if(n <= 100000000){
    const numToStrArr = String(n).split('');
    answer = numToStrArr.reduce((acc, cur)=>{
      acc += Number(cur);
      return acc;
    }, 0)
  } else{
    answer = '범위 값을 넘었습니다.'
  }
  return answer;
}