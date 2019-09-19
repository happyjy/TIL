function solution(numbers) {
  var answer = 0;

  // #소수 찾기
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


  // #숫자 모든 조합 - 중복제거 필요/ 재귀호출 사용
  // [고민해보기] 모든 조합 만들기 && 중복 제거 
  var allAssembleStr = [];
  function makeAllAssemble(str, l, n) {
    if (l === n) {
      console.log("### l === n", str);
      allAssembleStr.push(str);
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

  //중복제거 - 숫자 모든 조합중
  // * allAssembleStr : 이차 배열이라 바로 filter에서 중복 하는 것을 피할 수 없다.
  //[STUDY] allAssembleStr이 filter안에서도 사용된다.
  //[STUDY] allAssembleStr.indexOf(v): allAssembleStr 배열 안에서 원하는 배열 인자 값이 몇번째에 있는가?
  //[STUDY] allAseembleStr.indexOf(v) === i : i는 allSeembleStr의 배열 index value 
  debugger;
  // var delDuplStr = allAssembleStr.filter((v,i) => allAssembleStr.indexOf(v) === i)
  
  var arrJoined = allAssembleStr.map((v,i) => v.join(""));
  var delDuplArr = arrJoined.filter((v,i)=> arrJoined.indexOf(v) === i);

  console.log("###delDuplStr", delDuplStr);

  return answer;
}

console.log(solution('17'));
console.log(solution('011'));