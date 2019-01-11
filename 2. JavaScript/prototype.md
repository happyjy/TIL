# __proto__, prototype 관계
> __proto__ : 자기 자신을 만들어낸 객체 원형  
> prototype : 자기 자신을 원형으로 만들어질 객체에게 물려줄 속성



```js
var shape = function () {};
var p = {
    a: function () {
        console.log('aaa');
    }
};
shape.prototype.__proto__ = p;

var circle = new shape();
circle.a(); // aaa
console.log(shape.prototype === circle.__proto__); 
// true

shape.prototype // constructor객체 반환
circle.__proto__ // constructor객체 반환
```

# 함수 객체의 기본 프로퍼티
* length, prototype 프로퍼티(ECMAScript 명세서 공식)
* name, caller, arguments, __proto__(ECMAScript 명세서 공식 아님)
  - __proto__ 프로퍼티 : 모든 자바스크립트 객체는 자신의 프로토타입을 가리키는 내부 프로퍼티


# Function.prototype 객체의 프로토타입 객체는? 

* [중요]**모든 함수들의 부모 객체는 Function Prototype 객체**
* ECMAScript 명세서에는 Function.prototype은 함수라고 정의
- 자기 자신을 부모로 갖는 것일까? 
- [중요]**ECMAScript 명세서에는 예외적으로 Function.prototype 함수 객체의 부모는  
모든 객체의 조상격인 Object.prototype 객체라고 설명**

* [중요]**Fuction Prototype : 모든 함수들의 부모 역할을 하는 프로토타입 객체**
 - 위 의미는 즉, 모든 함수는 Function Prototype 객체가 가지고있는 프로퍼티나 메서드를 마치 자신의 것처럼 상속 받아 그대로 사용 가능
 - ECMAScript 명세서에서는 이러한 Function.prototype 객체가 가져야 하는 프로퍼티들을 다음과 같이 기술  
  : constructor 프로퍼티  
  : toString() 메서드  
  : apply(thisArg, argArray) 메서드  
  : call(thisArg, [, arg1 [, arg2, ]])메서드  
  : bind(thisArgm. [, arg1 [, arg2, ]])메서드


