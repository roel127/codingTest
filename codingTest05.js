/*
자연수 n이 매개변수로 주어집니다.
n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.

10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.
*/

function solution(n){
  var answer = 0;
  const allRemainder = [];
  for(let i = 3; i <= 1000000; i++ ){
    if(n % i === 1){
      allRemainder.push(i)
    }
  }
  answer = allRemainder;
  return answer;
}
