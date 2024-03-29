/*
우선 콜라 빈 병 20병을 가져가서 10병을 받습니다.
받은 10병을 모두 마신 뒤, 가져가서 5병을 받습니다.
5병 중 4병을 모두 마신 뒤 가져가서 2병을 받고, 또 2병을 모두 마신 뒤 가져가서 1병을 받습니다.
받은 1병과 5병을 받았을 때 남은 1병을 모두 마신 뒤 가져가면 1병을 또 받을 수 있습니다.
이 경우 상빈이는 총 10 + 5 + 2 + 1 + 1 = 19병의 콜라를 받을 수 있습니다.

빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다.
기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다.
콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어집니다.

1 ≤ b < a ≤ n ≤ 1,000,000
*/

function solution(a, b, n) {
  var answer = 0;
  if(n > 1000000){
    answer = '100만 개를 넘었습니다.'
  } else{
    while(n >= a){
      answer += Math.floor(n/a) * b;
      n = (Math.floor(n/a) * b ) + n%a;
    }
  }
  return answer;
}