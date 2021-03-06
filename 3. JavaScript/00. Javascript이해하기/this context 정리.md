# 함수 실행 방법 별 this context

>  this를 사용하는 해당 함수를 어떻게 실행하느냐에 따라 바뀐다. 
>
>  0. anonymous function
>       참고: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
>  1. regular runction call
>  2. dot notation
>  3. call, apply, bind
>  4. 'new' keyword  
>      참고 : https://www.youtube.com/watch?v=ayyuU0xdbIU
>  5. Event Handler
>  6. this on the object's prototype chain
>  7. this with a getter or setter

## 0. anonymous function

* anonymouse function 안에 있는 this는 window를 가르킨다. 
* arrow function안에 있는 this는 encosing lexical context's this 

```js
var obj = {
  bar: function() {
    var x = (function(){return this})();
    return x;
  }
};

obj.bar() === window //true


var obj = {
  bar: function() {
    var x = (() => this)();
    return x;
  }
};

obj.bar() === obj	//true


  ```

## 1. Regular function call - 일반 함수 실행 방식
  ``` js
  function foo(){
    console.log(this);  //'this' === global object(브라우저 상에서 window객체)
  }
  ```


## 2. Dot Notation - 점 방식  
  : 점 앞에 있는 객체가 this이다.
  ``` js
  var age = 100;
  
  var ken = {
    age: 35,
    foo: function foo(){
      console.log(this.age);   //  35
    }
  }
  
  var wan = {
    age: 31,
    foo: ken.foo // foo: function (){console.log(this.age)}
   
  } 
  
  ken.foo(); //35
  wan.foo(); //31
  ```


## 3. Function.prototype.call, Function.prototype.bind, Function.prototype.apply  
  : call, bind, apply의 함수를 사용해서 호출할 function의 this는
  **[중요] 첫번재 인자로 넘겨준 값**
  : Dot Notation과 다르게 this의 값을 지정해 function을 실행해 줄 수 있다.

  ### 3.1 예제
  ``` js
  var age = 100;
  
  function foo(){
    console.log(this.age);
  }
  
  var ken = {
    age: 35
  }
  
  var wan = {
    age: 31
  } 
 
  foo();
  
  foo.call(ken); //35
  foo.apply(wan);  //31
  ```


  ### 3.2 예제
   ``` js
  var age = 100;
  
  function foo(a,b,c,d,e){
    console.log(this.age); //ken object value
    console.log(arguments);  //[1,2,3,4,5] : 유사배열
  }
  
  var ken = {
    age: 35
  }
  
  foo.call(ken, 1,2,3,4,5);
  foo.apply(ken, [1,2,3,4,5]); 
   ```

  ### 3.3 예제  
  ``` js
  var age = 100;
  
  function foo(){
   console.log(this.age);   // 34
   console.log(arguments);  // [1,2,3,4,5] : 유사배열
  }
  
  var ken = {
    age: 34
  }
  
  var bar = foo.bind(ken);
  
  bar(1,2,3,4,5);
  ```

  ## 4. 'new' keyword  
  : new 키워드로 생성한 함수 안 this는 새로운 객체가 할당된다.

  4.1 예제1
  ``` js
  function foo(){
    console.log(this);
  }
  
  new foo();        // foo {}
  ```

  4.2 예제2
  ``` js
  function foo(){
    // [중요]new 키워드를 썻을때 js 엔진은 3가지 일을 한다. (a1, a2, a3)
    // a1. this = {};  // [중요] js 엔진이 이와 같은 코드를 생성 -> 이유! : 프로토타입체인, 객체지향 프로그램을 하게 되면 좀더 이해할수 있다.
    this.name = '바닐라코딩';
    // a2. { name : '바닐라코딩' }
    // a3. return this;
  }
  
  var vanillaCoding = new foo();
  
  console.log(vanillaCoding);  //새로운 객체의 값이 this가 된다.
  
  // 새로운객체  => foo { name : '바닐라코딩' }
  ```


  4.3 예제3
``` js
  // A function used with 'new' keyword = Constructor function(생성자 함수)
  // 생성자 함수명 첫번째 문자는 대문자로 한다.
  function Person(name, age){
   this.name = name;
   this.age = age;
  }
  
  //called "instance"
  var ken = new Person('ken huh', 34);
  var wan = new Person('wan huh', 30);
  
  console.log(ken);  //{ name : 'ken huh', age: '34'}
  console.log(wan);  //{ name : 'wna huh', age: '30'}
```




  ## 5. Event Handler

``` js
let element = document.querySelectyor('#vanilla');

element.addEventListenr('click', function onClick (ev) {
  //this 대신에 target, currentTarget을 사용하자~ 
  console.log(this);  //함수가 어떻게 실행되느냐, 문맥에 따라서 바뀐다.
  console.log(ev.target);
  console.log(ev.currentTarget);
});
```



## 6. this on the object's prototype chain

```js
var o = {
  fn: function() { return this.a + this.b; }
};

var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p); // {"a": 1, "b": 4}
console.log(p.__proto__) // {fn:f} -> object o의 fn property function
console.log(p.fn()); // 5 //p.fn() === p.__proto__fn()


```



## 7. this with a getter or setter

``` js
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', { get: sum, enumerable: true, configurable: true });

console.log(o.average, o.sum); // 2, 6
console.log(o); 
/*
    {a: 1, b: 2, c: 3}
        a: 1
        average: (...)
        b: 2
        c: 3
        sum: (...)
        get average: ƒ average()
        get sum: ƒ sum()
        __proto__: Object
*/

```

