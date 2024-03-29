//어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 
//나머지 논문이 h번 이하 인용되었다면 h가 이 과학자의 H-Index입니다.

/**
 *  어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

    제한사항
    과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
    논문별 인용 횟수는 0회 이상 10,000회 이하입니다.
    입출력 예
    citations	return
    [3, 0, 6, 1, 5]	3
    입출력 예 설명
    이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.
 */


function solution(citations) {
  var answer = 0;

  //1.HOW TO GET H-Index value 
  
  //2.SELECT the index value of array
  
  //3.THEN iterator each index 
  //COUNT number of greater,same than selected the index value  (greaterNum)
  //COUNT number of lower than selected the index value         (lowerNum)
  
  //4. FIND greaterNum === lowerNum  -> 

  var iterator = true;
  citations.sort((a, b)=> b-a).forEach((citation, idx) => {
    if(citation > idx && iterator) {
      ++answer;
    }else {
      iterator = false;
      // break;
    }
    // citations.forEach(item => {
      // if( item >= citationIdxValue && iterator){
      //   ++answer ;
      // }
      // if( over_h === citationIdxValue && iterator){
      //   iterator = false;
      // }
    // });
  });

  console.log("### answer: ", answer);
  return answer;
}


console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6]));