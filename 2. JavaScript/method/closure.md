# 8.6 closure
> closure를 이해하는 첫걸음 '중접 함수의 어휘적 유효범위 규칙'

``` js
var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f() {return scope;}
	return f();
}
checkscope();     //=> 'local scope' 반환
```


```js
var scope = "global scope";
function checkscope(){
	var scope = "local scope";
	function f() {return scope;}
	return f;
}
checkscope();     //=> 'function() {return scope;};
checkscope()();   //=> 'local scope' 반환

```

> 한쌍의 괄호가 checkscope() 안에서 밖으로 이동  
> 이제 checkscope()는 중첩 함수를 후출 하고 그결과를 반환하는 대신, 중첩 함수 객체 그자체를 반환한다.  

* 어휘적 유효번위의 기본적인 규칙
  - 자바스크립트 함수는 함수가 정의되었을 때의 유효범위 체인을 사용하여 실행
  - 중첩 함수 f()가 정의된 유효범위 체인에서 변수 scope는 'local scope'로 바인드 되어 있다.
  - f가 어디서 호출되든 상관없이, f가 실행될 때 이 바인딩은 항상 유효하다.
  - 그래서 global scope가 아니라 local scope를 반환한다.


## 클로져 구현
* 바깥쪽 함수에서 정의된 지역 변수는 바깥족 함수의 실행이 종료되면 없어질 텐데, 어떻게 더 이상 존재하지 않은 유효 범위 체인을 사용하여 중첩 함수가 실행될 수 있을까? 이점이 궁금하다면
  - c와 같은 저수준 프로그래밍 언어나 스택 기반 cpu 아키텍처를 접해왔기 때문에
  - 이런 저수준 언어나 스택기반 cpu 아키텍처에서는, cpu 스태겡 정의된 함수의 지역 변수는 함수가 반환될 때 실제로 없어진다.