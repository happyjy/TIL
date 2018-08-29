# 객체 타입 키를 상수, 변수 동시에 넣어서 설정 하고 싶을때 (SETTING OBJ KEY WITH CONTANT, VARIABLE)

## key
> var variable = abc;
> obj['constant' + variable]

## 예시코드
```
var arr = ['a', 'b', 'c', 'd'];

var obj = {};
arr.forEach(function(item, idx){
  obj['arrKey_'+item] = item;
});

console.log("### arr : " + arr);
console.log(obj);

//결과
/*
{
  "arrKey_a": "a",
  "arrKey_b": "b",
  "arrKey_c": "c",
  "arrKey_d": "d"
}
*/
```

