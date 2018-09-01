

1. Best way to Create Array
``` js
var myArr = [];

//or, create with elements if you know
var myArr2 = ['You', 'are', 'the', 'best'];
```
* new 키워드를 사용하지 않는다.
  - 이유 : Arrays in JavaScript work nothing like the arrays in Java, and use of the Java-like syntax will confuse you.
  - ref : https://yuiblog.com/blog/2006/11/13/javascript-we-hardly-new-ya/

2. Don't randomly insret by Index
> 선언한 배열 길이 보다 더 큰 인덱스에 선언하면 그 사이 에 있는 index elements에 **"undefined"**를 넣어 메모리 낭비를 함.

```js
var myArr = [1, 2, 3, 4];

> myArr.length;

myArr[68] = 69;
> myArr.length;
= 69

> myArr;
=[1, 2, 3, 4, undefined x 64, 69]
```

3. use right index to insert
> 반복문에서는 배열에서 양의 정수만 접근이 가능하다. 
> 양의정수가 아닌 값을 index에 넣으려면 => 객체를 생성한다.
```js

//양의정수가 아닌 값을 배열의 index 값으로 넣어보기
var myArr = [1,2,3,4];

myArr[169] = undefined  ;
myArr[2.5] = 3.5;
myArr['myDude'] = "thatJSDude";
myArr[-7]  = -7;

---
myArr.forEach(function(item, idx){
	console.log(item)
})

=> 1,2,3,4, undefined...

```

```js

var myObj = {};
myObj[-7] = 7;
myObj[68] = 69;
//=> Object {68: 69, -7: 7}

for(var i in myObj){
	console.log(i + ':' + myObj[i]);	
}
/*
68:69
VM314:2 -7:7
*/
```