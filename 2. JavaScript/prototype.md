

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