function solution(new_id) {
  var answer = '';
  new_id.toLowerCase(); // 1
  new_id = new_id.replace(/[^a-z0-9\-_.]/g, ""); // 2
  new_id = new_id.replace(/[.]{2,}/g, "."); // 3

  // 4
  if(new_id[0] === '.'){
    new_id = new_id.substring(1);
  } else if(new_id[new_id.length - 1] === '.'){
    new_id = new_id.slice(0, -1);
  }

  // 5
  if(new_id.length === 0){
    new_id = 'a';
  }
  
  // 6
  if(new_id.length >= 16){
    new_id = new_id.slice(0, 15);
    if(new_id[new_id.length - 1] === '.'){
      new_id = new_id.slice(0, -1);
    }
  }

  // 7
  while(new_id.length <= 2){
    new_id += new_id[new_id.length - 1];
  }
  
  answer = new_id;
  return answer;
}

const testId = "...!@BaT#*..y.abcdefghijklm";
console.log(solution(testId));