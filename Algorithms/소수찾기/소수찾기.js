function solution(numbers) {
  var answer = 0;

  function isPrime(n){
    const divisor = 2;
    while(n > divisor){
      if(n % divisor == 0){
        return false;
      } else {
        divisor++;
      }
      return true;
    }
  }

  //재귀호출
  //모든조합다나옴 중복제거 필요
  function makeAllAssemble(str, l, n) {
    if (l === n) {
      console.log("### l === n", str);
    } else {
      for (var i = l; i <= n; i++) {
        str = swap(str, l, i);
        makeAllAssemble(str, l+1, n);
        str = swap(str, l, i);
      }
    }
  }

  function swap(str, i, j){
    var temp = str[i];
    str[i] = str[j];
    str[j] = temp;

    return str;
  }

  debugger;
  var numbersArr = numbers.toString().split('');
  makeAllAssemble(numbersArr, 0, numbersArr.length-1);

  return answer;
}

console.log(solution('17'));
console.log(solution('011'));