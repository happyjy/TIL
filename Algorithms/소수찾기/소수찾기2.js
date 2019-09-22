const isPrime = (n) => {
  if (n < 2) return false;
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++)
    if (n % i === 0) return false;
  return true;
}

const makeAllNumber = (number = null, ...numbers) => {
  if (number === null) return [];
  if (numbers.length === 0) return [numbers];

  let arr = [number];
  console.log("### arr : ", arr);
  for (const idx in numbers){
    const rest = numbers.filter((v, i) => i !== parseInt(idx, 10));
    const n = numbers[idx];

    //STUDY3
    arr = [...arr, ...makeAllNumber(number + n, ...rest)];
    arr = [...arr, ...makeAllNumber(n + number, ...rest)];
    arr = [...new Set(arr)]; //#STUDY2
  }

  return arr;
}

function solutions(numbers) {
  debugger;
  numbers = numbers.split('');
  //#STUDY1
  let makedNumbers = makeAllNumber("", ...numbers).filter(v => v !== '')
                                                  .map(v => parseInt(v));
  makedNumbers = [...new Set(makedNumbers)];

  return makedNumbers.map(isPrime).filter(v => v === true).length;

}


solutions("23")
/*
  # STUDY1
  # SUTDY2
  # STUDY3
  
  # STUDY1 - spread syntax
    - var newArr = numbers.unshift("");  makeAllnumber.apply(null, newArr);
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  # STUDY2 - Set
    * set으로 중복제거하기 
    -       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Remove_duplicate_elements_from_the_array
    - 다음 세가지 방법으로 중복 제거 하는 방법 설명 - new Set, filter(), forEach()
    https://wsvincent.com/javascript-remove-duplicates-array/

  # STUDY3 - 모든 문자열 찾는 방법
    * 
 */