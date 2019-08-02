
# 목차 
## Prototype이란? 
## prototype기반 프로그래밍이란?
## 자바스크립트에서 사용되는 프로토타입
## 자바스크립트의 프로토타입(Prototype) 란?
## 자바스크립트의 프로토타입(Prototype) 프로퍼티 란?
## 자바스크립트의 프로토타입 체인(Prototype Chain)

## [작성중]__proto__, prototype 프로퍼티 
## [작성중]Prototype chain
## [작성중]상속
## [작성중]constructor 프로퍼티

## prototype, __proto__ 예제
## prototype의 공유 
# 추가 설명
* Constructor
---

# Prototype이란? 
## prototype기반 프로그래밍이란 

* 객체의 원형인 프로토타입을 이용하여 새로운 객체를 만들어내는 프로그래밍 기법
* 이렇게 만들어진 객체 역시 자기자신의 프로토타입을 갖는다.
* 새로운 객체의 원형을 이용하면 또 다른 새로운 객체를 만들어 낼수도 있으며 이런 구조로 객체를 확장하는 방식을 프로토타입 기반 프로그래밍이다.
* 객체의 원형인 프로토타입을 이용한 클로닝(Cloning: 복사)과 객체특성을 확장해 나가는 방식을 통해 새로운 객체를 생성

* 추가내용 
    * 이 프로토타입 기반 프로그래밍은 Class 기반 OOP 언어를 다루던 사람에게는 이해가 잘 안가는 부분 일수도 있다. 
    * Class 기반의 언어에서는 Class 안에 기술된 내용을 기반으로 인스턴스를 생성하여 객체를 사용한다. 
    * 자바스크립트의 프로토타입 객체의 확장은 <u>옵져버패턴</u>을 따른다. 
## 자바스크립트에서 사용되는 프로토타입
* Prototype Object : Prototype Property가 가리키고 있는
* Prototype Link(\_\_proto\_\_): 자기 자신을 만들어낸 객체의 원형을 의미하는


* prototype : 자기 자신을 원형으로 만들어질 객체에게 물려줄 속성
* \_\_proto\_\_ : 자기 자신을 만들어낸 객체 원형


## 자바스크립트의 프로토타입(Prototype) 란?
* 자바스크립트의 모든 객체는 자신을 생성한 객체 원형에 대한 숨겨진 연결을 갖는다.
* 이때 자기 자신을 생성하기 위해 사용된 객체원형을 프로토타입이란 한다.
* 자바스크립트의 모든 객체는 Object 객체의 프로토타입을 기반으로 확장 되었기때문에 이 연결의 끝은 Object 객체의 프로토타입 Object 다.
* 어떠한 객체가 만들어지기 위해 그 객체의 모태가 되는 녀석을 프로토타입이라고 한다. 
    * Java나 php에서 말하는 class가 바로 자바스크립트의 프로토타입과 동일한 의미일 것이다.

![ex_screenshot](./자바스크립트의프로토타입이란.png)

* <span style="color:red">\_\_proto\_\_ </span>
    * 설명하고 싶은 프로토 타입 
    * A라는 객체를 만들어내기 위해 사용된 객체원형에 대한 숨겨진 연결이다.
    * 해당객체의 프로토타입은 A라는 함수객체이며 이 객체의 생성자 역시 function A() 함수라는 것이다.
    * new Operator를 통해 만들어진 객체는 function A() 를 자신의 프로토타입으로 사용하여 만들어졌다는 말이다

* 대부분의 자바스크립트 기초가 부족한 사람들이 말하는 프로토타입은 애석하게도 __prototype 프로퍼티__ 이다

* 아래 캡처 확인
![ex_screenshot](./prototype_프로토타입관계도.png)

## 자바스크립트의 프로토타입(Prototype) 프로퍼티 란?
* <u>자바스크립트의 모든 객체는 생성과 동시에 자기자신이 생성될 당시의 정보를 취한 Prototype Object 라는 새로운 객체를 Cloning 하여 만들어낸다</u>
* 프로토타입이 객체를 만들어내기위한 원형이라면 이 Prototype Object 는 자기 자신의 분신이며 자신을 원형으로 만들어질 다른 객체가 참조할 프로토타입이 된다.  
즉 객체 자신을 이용할 다른 객체들이 프로토타입으로 사용할 객체가 Prototype Object

* 즉 위에서 언급한 \_\_proto\_\_라는 prototype 에 대한 link는 <u>상위에서 물려받은 객체의 프로토타입에 대한 정보(자기 자신을 만들어낸 객체 원형)</u>
* prototype 프로퍼티는 자신을 원형으로 만들어질 새로운 객체들 <u>즉 하위로 물려줄 연결에 대한 속성이다.</u>


```js
function foo(x) {
    this.x = x;
};

var A = new foo('hello'); 
console.log(A.x);
> hello

console.log(A.prototype.x)
> syntax error

```
* **prototype 프로퍼티는 Constructor가 가지는 프로퍼티** 이다.  
그리고 함수객체만 이 프로퍼티를 가지고 있다고 했다. 
* A객체는 함수객체가 아니다. foo 라는 원형을 이용하여 함수객체를 통해 만들어진 Object 객체에 확장된 단일 객체일 뿐이다.   
즉 A는 prototype 프로퍼티를 소유하고 있지 않기에 A.prototype.x가 syntax error 인 것이다. 
* 즉 프로토타입을 이해하려면 foo.prototype.x 는 OK, A.prototype.x 는 error 라는 사실을 반드시 이해하고 기억하고 있어야 한다.

```js
//#예제 1
var A = function () {
    this.x = function () {
         console.log('hello');
    };
};
A.x=function() {
    console.log('world');
};
var B = new A();
var C = new A();
B.x(); //> hello
C.x(); //> hello

//#예제 2.
var A = function () { };
A.x = function() {
    console.log('hello');
};
A.prototype.x = function () {
    console.log('world');
};
var B = new A();
var C = new A();
B.x(); //> world
C.x(); //> world

```

* 예제1, 예제2 에서 B,C 를 생성하기 위한 객체 원형 프로토타입은 A 이다. 

* 하지만 여기서 반드시 집고 넘어가야하는 사실은 B,C는 A 를 프로토타입으로 사용하기위해서 A의 prototype Object를 사용한다는 것이다. 
* 그리고 이 Prototype Object는 A 가 생성될 당시의 정보만을 가지기 때문에  
예제1에서 A의 Prototype Object가 알고 있는 x 는 function () {console.log('hello');} 가 된다.   
즉 A.x 를 아무리 수정하여도 A의 Prototype Object는 변경되지 않기 때문에 A 를 프로토타입으로 생성되는 B,C는 function () {console.log('hello');} 만 참조하는 것이다.

* 예제2 에서의 결과가 world 가 되는 이유도 같은 이유다. 
* A.prototype 은 A의 Prototype Object를 참조하는 녀석이기 때문에 A.prototype.x 를 정의한다는 것은 A의 Prototype Object를 직접 이용하게 되는 것이고 그에 따라서 A의 Prototype Object를 프로토타입으로 이용하여 만들어지는 B,C 가 알고 있는 x 는 function () {console.log('world');} 가 되는 것이다.

![ex_screenshot](./prototype_객체상속모델.png)

## 자바스크립트의 프로토타입 체인(Prototype Chain)
* 객체의 생성 과정에서 모태가 되는 프로토타입과의 연결고리가 이어져 상속관계를 통하여 상위 프로토타입으로 연속해서 이어지는 관계를 프로토타입 체인이라고 한다.   
이 연결은 __proto__ 를 따라 올라가게 된다.

* 프로토타입을 상속해서 만들어지는 객체들관의 연관관계를 의미한다. 
* 그림에서 __proto__ 프로퍼티들간 이어진 점선을 타고 가다보면 최종적으로 Object 객체의 prototype Object에 다다르는 것을 알수 있다.
* 그렇기 때문에 자바스크립트의 모든 객체는 Object 객체에서부터 파생되어 나온 자식들이라고 하는 것이다.

* 이러한 프로토타입 체인은 하위 객체에서 상위객체의 프로퍼티와 메소드를 상속받는다.
* 그리고 동일한 이름의 프로퍼티와 메소드를 재정의 하지 않는 이상 상위에서 정의한 내용을 그대로 물려받는다. 
* 위 그림을 잘 보면 B와 C 는 A prototype Object를 프로토타입으로 만들어졌음에도 불구하고 X 라는 프로퍼티가 존재하지 않는다.  
사실 "물려 받는다" 라는 말 자체가 꼼수인 것이다.  
즉 하위 객체는 상위 객체의 속성과 메소드를 상속 받는 것이 아니라 그것을 공유하고 있는 것이다.

# __proto__, prototype 프로퍼티 
# Prototype chain
# 상속
# constructor 프로퍼티














## prototype, __proto__ 예제
```js

var A = function () {
    this.x = function () {
         console.log('hello');
    };
};

A.x=function() {
    console.log('everyone');
};

A.prototype.x = function () {
     console.log('world');
};

var a = new A();

a.x(); // hello
a.__proto__.x() // world //a를 만든 객체원형(== A function prototype)의 x 프로퍼티
A.x(); // everyone // A function의 property
```

## prototype의 공유 
```js

var A = function () {
    this.x = function () {
         console.log('hello');
    };
};

A.prototype.x = function () {
     console.log('world');
};

var a = new A();
var b = new A();

a.__proto__.x(); // world
b.__proto__.x(); // world

// A prototype 을 변경 
A.prototype.x = function () {
     console.log('HELLO WORLD');
};
// a,b가 원형으로 만들어진 prototype을 링크로 공유 하고 있기 때문에 변경됐다.
a.__proto__.x(); // HELLO WORLD
b.__proto__.x(); // HELLO WORLD

```

# 추가 설명
* Constructor
    - 생성자constructor는 생성create하고 초기화initialize하는 함수 오브젝트입니다.
    - 각각의 생성자는 상속구현과 공유 프로퍼티 사용을 위해 연관된 프로토타입prototype 오브젝트를 갖습니다.

