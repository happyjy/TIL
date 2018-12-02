# call(), apply(), bind()


## call(), apply()
* call() 정의
* call()을 생성자 연결에 사용
* call()을 익명함수와 함께 쓰기 
* call()호출시 this에 특정 값을 넣어 동작하기
* call() 호출시 첫번째 인자값 넣지 않고 동작하기 
* call, apply함수의 비교(this에 특정 값 넣어 동작)



## call() 정의
> 주어진 this 값, 전달된 인수 와 함께 함수를 호출

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```

## call()을 생성자 연결에 사용
> function, method에 속해서 다른 객체를 호출한다.  
> function, method에 this 값을 전해준다.  
함수는 한번 쓰고 다른 객체에서 상속 받아 사용한다.(method를 다시 만들 필요 없이)
``` js
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);  //Product function을 재사용
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);  //Product function을 재사용
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```


## call()을 익명함수와 함께 쓰기 
```js
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
//### 결과 
//#0 Lion: Kinf
//#1 Whale: Fail
```

## call()호출시 this에 특정 값을 넣어 동작하기
> 

```js
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
```

## call() 호출시 첫번째 인자값 넣지 않고 동작하기 
> call로 호출될 function 안에 this의 bound는 global object이다  
> 하지만 use stric을 사용 하용하면 undefined가 나온다. 
```js
var sData = 'Wisen';
            
function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen 

``` 

```js            
'use strict';

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined            
```

## call, apply함수의 비교(this에 특정 값 넣어 동작)
```js
var obj = {name:"Jaeyoon"};
var greeting = function(a, b){
    return "welcome to " + a + " in " + b + " " + this.name;
};
console.log(greeting.call(obj,"Korea","Seoul"));	
//welcome to Korea in Seoul Jaeyoon

var obj = {name:"Jaeyoon"};
var greeting = function(a, b){
    return "welcome to " + a + " in " + b + " " + this.name;
};
console.log(greeting.apply(obj,["Korea","Seoul"]));		
//welcome to Korea in Seoul Jaeyoon
```






## bind()
> 함수와 객체를 서로 묶는 것이다.  
> bind()함수는 새 함수를 반환한다.(call, apply는 바로 동작`)
```js
function f(y) { return this.x + y}    //바인드되어야 하는 함수
var o = {x:1};      //바인드될 객체
var g = f.bind(o);  //g(x)를 호출하면 o.f(x)가 호출된다.
g(2)                //=>3
```

## bind()함수 구현 해보기 
```js
Function.prototype.bind = function(obj){
  //this와 인자 값을 변수에 저장함으로써 다음의 중첩 함수에서 사용할 수 있다.
  var me = this, boundArgs = arguments;

  //bind() 메서드의 반환 값은 함수다.
  return function(){
  //인자 목록을 작성하는데, 첫 번재 이후의 인자부터
  //나머지 모든 인자를 이 함수에 전달 한다.
  var args = [], i;
  for(i = 1; i<boundArgs.length; i++) args.push(boundArgs[i]);
  for(i = 0; i<arguments.length; i++) args.push(arguments[i]);
  
  //인자들을 포함하여 obj의 메서드로 me를 호출한다.
  return me.apply(obj, args);
}
```