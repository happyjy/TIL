# 8.6 closure
> closure를 이해하는 첫걸음 : '중접 함수의 어휘적 유효범위 규칙'

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

* _**어휘적 유효번위의 기본적인 규칙**_
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


> 클로저는 함수의 지역 변수를 포착하고, 이 변수들을 내부 상태로 사용할 수 있다.  
> uniqueInteger() 함수가 클로저를 사용하도록 어떻게 코드를 재작성할 수 있는지 살펴보자. 아래 코드 참고
```
var uniqueInteger = (function(){
  var counter = 0;
  return function(){return counter++;};
}());
```
* 위 코드 설명  
  - 함수를 정의하고 호출  
  - 반환 값은 또 다른 함수  
  - 중첨 함수는 유효범위에 있는 변수에 접근하고, 바깥쪽 함수에 정의된 couter변수를 사용할 수 있다.  
  - 바깥족 함수의 실행이 끝나면, 어떤코드도 counter 변수를 볼 수 없다. 오직 안쪽 함수만 단독으로 counter 변수에 접근할 수 있을 뿐  
  - counter와 같은 내부 변수는 여러 클로저가 공유 할 수 있다.  
    즉 같은 함수 안에 정의된 중첨 함수들은 같은 유효범위 체인을 공유한다.  
    다음 코드 확인 하자.

```js
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
* 위 코드 설명
  - 이 두 메서드가 'private variable', 즉 내부 변수를 n을 공유한다  
<u>**counter()를 호출할 때마다 새로운 유효범위 체인과 새로운 내부변수가 생성된다.**</u>  
counter()를 두번 호출 하면 두개의 counter객체를 가지게 된다.
  - 클로저 기법과 getter/getter 프로퍼티를 결합할 수 있다는 사실은 주목할 가치가 있다.
아래 예시 코드


```js
function counter(n){  
  return {
    //getter 메서드 프로퍼티는 countner 변수를 반환하고 증가시킨다.
    get count(){return n++}, 
    set counter(m){
      if(m>=n) n=m;
      else throw Error("count는 오직 더큰 값으로만 설정될 수 있습니다.");
      )
    }
  }
}

// #결과
var c = counter(1000);
c.count //=> 1000
c.count //=> 1001
c.count = 2000;
c.count //=> 2000
c.count = 2000 //=> 에러
```
* 위 코드 설명
  - 이 버전의 counter() 함수는 지역 변수를 정의하지 않지만,  
  - 프로퍼티 접근 메[서드들이 공유하는 내부 상태를 보관하기 위해 배개변수 n을 사용한다.  
이로써 counter()를 호출하는 쪽에서 내부 변수의 초기 값을 지정할 수 있다.




# step3
> step2 설명은 클로저 기법을 사용하여 내부 상태를 공유하는 기법을 일반화한것 

## 예제 8-4 클로저를 사용하는 내부 프로퍼티 접근 메서드
> addPrivateProperty() 함수를 정의하는데,   
이 함수는 하나의 내부 변수와 그 변수를 얻고 설정하는 두 중첩 함수를 정의한다.   
그리고 두 중첩 합수를 특정 객체의 메서드로 추가한다.

```js

function addPrivateProperty(o, name, predicate){
  var value;

  // getter 메서드는 단순히 value를 반환한다.
  o["get" + name] = function( {return value;} );

  // setter 메서드는 value를 저장하거나
  // 단정 함수가 값을 적합하지 않다고 판단하면 예외를 발생시킨다.
  o["set" + name] = function(v){
    if(predicate && !redicate(v))
      throw Error("set" + name + ": 유효하지 않은 값" + v);
    else
      value = v;
  };

}
```

* 설명 
  - 이 함수는 프로퍼티 접근 메서드를 객체 o의 프로퍼디에 특정 이름으로 추가한다.
  - 메서드 이름은 get<name>과 set<name>이 된다.
  - 만약 단정(predicate) 함수가 제공되면, setter 메서드는 전달된 인자를 저장하기 전에  
  인자 유효성 테스트하기 위해 단정 함수를 하용한다.
  - 만약 단정 함수가 false를 반환하면 setter 메서드는 얘외를 발생시킨다.
  - 주의할 것 : getter/setter 메서드가 제어하고 있는 프로퍼티 값이  
  객체 o에 저장되지 않는 것. 대신, 그 값으 오직 이 함수의 지역 변수(value) 로만 저장된다.
  - 또한, getter/setter메서드는 이 함수 내부에 지역적으로 정의되기 때문에 이 함수의  
  지역 변수에 접근할 수 있다. 다시말해 value 변수는 두 접근 메서드 전용이고,  
  setter 메서드를 통하지 않고서는 설정되거나 수정될 수 없다는 뜻이다.


```js
//다음 코드는 addPrivateProperty() 메서드를 사용하는 방법을 보여준다.
var o = {};

//프로퍼티 접근 메서드 getName과 setName()를 추가한다.
//문자열 값만 설정 가능하도록 조치한다.
addPrivateProperty(o, "Name", functino(x) {return typeof x == "string";});

o.setName("Frank");       //프로퍼티 값을 설정한다.
console.log(o.getName()); //프로퍼티 값을 얻는다.
o.setName(0);             //엉뚱한 자료형의 값을 설정해본다.
```


# 이어질 내용 
> 클로저들이 공유해서는 안 되는 변수를 공유하는 실수를 발하는 내용 -중요-

```js
//이 함수는 항상 v를 반환하는 함수를 반환한다.
function constfunc(v) { return function() {return v;} }

//상수 함수에 대한 배열을 생성한다.
var funcs = [];
for(var i = 0; i<10; i++) funcs[i] = constfunc(i);

//배열 요소 5의 함수는 값 5를 반환한다.
funcs[5]()    //=>5

```
* 설명
  - 흔한 실수 : 루프를 사용 여러개의 클로저를 생성하는 코드를 사용할때, 클로저를 정의하는 함수 내에서 루프를 이동하는 것


---
```js
function constfuncs(){
  var funcs = [];
  for(var i = 0; i < 10; i++){
    funcs[i] = function(){ return i; };
  }
  return funcs;
}

var funcs = constfuncs();
funcs[5]()  //무엇이 반환될까?
```
* 설명 
  - 열개의 클로저를 생성하고, 생성한 클로저들을 배열에 저장
  - 모든 클로저는 같은 함수 호출 내에서 정의되고, 따라서 클로저들은 변수 i에 대한 접근을 공유
  - constfuncs() 실행이 끝나면, 변수 i의 갑은 10이고, 열개의 클로저 모두 이 값을 공유  
  따라서 반환된 배열에 있는 모든 함수들은 같은 값을 반환하는데, 이건 우리가 전혀 원하지 않는 값이다
  - 클로저와 연관된 유효범위 체인이 '살아 있다'는 사실을 기억해야한다.
  - 중첩 함수는 유효범위에 대한 내부 사본이나 변수 바인딩의 스냅샷 따위는 만들지 않는다.

```js
var outerArguments = arguments; //중첩함수에서 사용하기 위해 별도로 저장한다.
```

* 설명 
  - this는 자바스크립트 키워드이지 변수가 아니라는 점
  - 모든 함수 호출에는 this값이 있고, 바깥쪽 함수가 this값을 별도의 변수로 저장하지 않으면 클로저는 바깥쪽 함수의 this값에 접근할 수 없다.


```js
var outerArguments = arguments; //중첩함수에서 사용하기 위해 별도로 저장한다.
```
* 설명
  - arguments 바인딩 또한 비슷하다.
  - arguments는 키워드가 아니지만 모든 함수 호출에 자동으로 선언된다.
  - *클로저 함수는 자신만의 arguments를 가지고 있기 때문에,   
  바깥쪽 함수가 인자 배열을 다른 이름의 변수에 저장하지 않는 한,   
  클로저는 바깥쪽 함수의 인자 배열에 전근할 수 없다.*