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
> 이제 checkscope()는 중첩 함수를 호출 하고 그 결과를 반환하는 대신, 중첩 함수 객체 그 자체를 반환

* 어휘적 유효번위의 기본적인 규칙
  - 자바스크립트 함수는 함수가 정의되었을 때의 유효범위 체인을 사용하여 실행
  - 중첩 함수 f()가 정의된 유효범위 체인에서 변수 scope는 'local scope'로 바인드 되어 있음
  - f가 어디서 호출되든 상관없이, f가 실행될 때 이 바인딩은 항상 유효
  - 그래서 global scope가 아니라 local scope를 반환


## 클로져 구현 의문점 
* 바깥쪽 함수에서 정의된 지역 변수는 바깥족 함수의 실행이 종료되면 없어질 텐데, 어떻게 더 이상 존재하지 않은 유효 범위 체인을 사용하여 중첩 함수가 실행될 수 있을까? 이 점이 궁금하다면?
  - C와 같은 저수준 프로그래밍 언어나 스택 기반 CPU 아키텍처를 접해왔기 때문에
  - 이런 저수준 언어나 스택기반 CPU 아키텍처에서는, CPU스택에 정의된 함수의 지역 변수는 함수가 반환될 때 실제로 없어진다.


# step2
> 바깥쪽 함수의 실행이 끝나면, 어떤 코드도 counter변수를 볼 수 없다.  
오직 안쪽 함수만 단독으로 counter 변수에 접근할 수 있다.  
counter와 같은 내부 변수는 여러 클로저가 공유할 수 있다.

```
var uniqueInteger = (function(){
  var counter = 0;
  return function(){return counter++;};
}());
```

> 이 두 메서드가 'private variable', 즉 내부 변수를 n을 공유한다  
counter()를 호출할 때마다 새로운 유효범위 체인과 새로운 내부변수가 생성된다.  
counter()를 두번 호출 하면 두개의 counter객체를 가지게 된다.

> 클로저 기법과 getter/getter 프로퍼티를 결합할 수 있다는 사실은 주목할 가치가 있다.
```
function counter(){
  var n = 0;
  return {
    count: function() {return n++;},
    reset: function() {return n = 0;}
  }
}

var c = counter(), d = counter();
c.count();  // => 0
d.count();  // => 0: 이들은 서로 독립적
c.reset();  // reset() 메서드와 count() ㅁ[서드는 상대를 공유
c.count();  // => 0: c를 리셋했기 때문
d.count();  // => 1: d는 리셋되지 않음
```