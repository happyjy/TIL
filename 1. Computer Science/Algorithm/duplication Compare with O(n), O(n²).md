# 중복 비교
> 보통 이중 반복문으로 문제를 해결했음 - O(n²) 
> map형식(key, value)을 사용하여  - O(n) 
> O(n²) -> O(n) 으로 시간을 줄이는 방법 

---
## 예시코드
```
  <script>
    /* 
      # 중복 비교 
      비교1 : 비교 Map형식 사용 
      비교2 : 이중 for문

      # 가정 
      가정1 : 그리드에 배열 형식으로 값이 1-1000 있는 상태에
      가정2 : 가정1 상태에 1000 이라는 값을 넣는다.
      가정3 : 가정2 동작시 "중복 비교" 로직
    */
  var arr = []
  var arrObj = {key1:'value2', key2:"value2"};

  //가정1
  for(var i=0; i<1000; i++){
    arr.push(arrObj);
  }

  //비교1
  console.time("duplMap");
  var duplMap = {};
  arr.forEach(function(item, idx){
    duplMap[idx] = item;
  });
  console.log(duplMap[999]);
  console.timeEnd("duplMap");

  //비교2
  console.time("2loop"); 
  for(var i=0; i<arr.length+1; i++){
    for(var j=0; j<arr.length+1; j++){
      if(i=='999' && i == j){
        console.log(arr[999]);
      }
    }
  }
  console.timeEnd("2loop");
  </script>

```