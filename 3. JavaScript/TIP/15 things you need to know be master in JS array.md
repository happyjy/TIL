# 15 things you need to know be a master in JS Array

## index
1. Best way to create Array
2. Don't randomly insert by index
3. use right index to insert
4. push multiple
5. unshift multiple
6. Don't blindly set length
7. IndexOf: type and instance sensitive
8. IndexOf Extra parameter
9. slice splice
10. delete dont delete
11. use build in function as callBack
12. real length by reduce
13. isArray
14. Array like object
15. Array methods in string


plus. map, forEach, filter, some, every  
sort, reverse (not added)  
join, concat (not added)  



# 1. Best way to Create Array
``` js
var myArr = [];

//or, create with elements if you know
var myArr2 = ['You', 'are', 'the', 'best'];
```
* new 키워드를 사용하지 않는다.
  - 이유 : Arrays in JavaScript work nothing like the arrays in Java, and use of the Java-like syntax will confuse you.
  - ref : https://yuiblog.com/blog/2006/11/13/javascript-we-hardly-new-ya/

# 2. Don't randomly insret by Index
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

# 3. use right index to insert
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
-7:7
*/
```

# 4.  push multiple
> 1. push return value : 배열의 길이  
> 2. 한번에 여러 값을 push 가능, but 배열을 값으로 push로 추가시 배열 그 자체가 추가된다.

``` js
var family= ['william', 'kate'];
family.push('prince George', 'princess Nevada');
 = 4
> family;
  = ["william", "kate", "prince George", "princess Nevada"]

//don't insert an array, if u dont mean it
family.push(['children', 'of', 'duke']);

> family
  = ["william", "kate", "prince George", "princess Nevada", Array[3] ]

>family.length;
  = 5  

//2중 배열 개념 처럼 사용할 수 있다.
> family[4]
 = (3) ["children", "of", "duke"]
> fmaily[5][1]
 = of

```


# 5. unshift multiple
> 1. 배열 첫번째에 인자를 추가/ 동시에 한개 이상이상 인자를 추가가능
> 2. 배열을 인자로 추가시 하나의 인자값으로 인지(이중배열로 접근가능)

```js
var bigFamily = ['Dad', 'uncle', 'me without gf'];
bigFamily.unshift("Dad's gf");
 = 4
> bigFamily;
  = ["Dad's gf", "Dad", "uncle", "me without gf"]

bigFamily.unshift('grandPa', 'grandMa');
 = 6
bigFamily;
  = ['grandPa', 'grandMa', "Dad's gf", "Dad", "uncle", "me without gf"]
```

```js
//be careful to unshift array. it will be just one element
bigFamily.unshift(["Uncle's gf", 'her daughter']);

bigFamily
  = [ Array[2], "grandPa", "grandMa", "Dad's gf", "Dad", "uncle", "me without gf"]
> bigFamily.length;
  = 7
  
```

# 6. Don't blindly set length
> length 키워드는 읽는 목적으로만 사용하자  
(length로 배열의 길이를 조절하지 않는다. )

```js
var myArr = ['javaScript', 'is', 'my', 'favorite', 'language' ];
> myArr.length;
  = 5  

myArr.length = 8;
> myArr;
  = ["javaScript", "is", "my", "favorite", "language", undefined × 3] //three undefined elements inserted

myArr.length = 4;
> myArr;
  = ["javaScript", "is", "my", "favorite"] //removed 4 elements

``` 


# 7. IndexOf: type and instace sensitive
> IndexOf : elements, instance 비교해서 위치 값을 반환  
> ***[중요]세번째 예시 : {b:2}는 비교 대상에 동일한 것이 있어 보이지만 두개의 값은 각각 다른 instance 이기때문에 찾지 못한다.

``` js
[1,2,3,4].indexOf(3);
 = 2
 //'3' is a string where 3 is number
[1,2,3,4].indexOf('3');
 = -1

[{a:1}, {b:2}].indexOf({b:2});
 = -1

 //similarly
 [[1], [2], [3]].indexOf([3])
 = -1
```

> 세번째 예시문제를 해결하기 위해서는 같은 refernce 값을 가지고 있어야한다.(메모리에 할당된 값)
```js
var myObj = {a:1}, 
    urObj = {b:2};

[myObj, urObj].indexOf(urObj);
 = 1 

```


# 8. indexOf extra fromIndex
> indexOf 함수의 두번째 인자값 : 두번째 인자값 이후 부터 찾고자하는 값(첫번재 인자 값)을 찾는다.
> lastIndexOf 함수도 있다. (상황에 맞게 알맞게 쓰자.)
```
[1,2,3,4,5,4,3,2,1].indexOf(3)
= 2

[1,2,3,4,5,4,3,2,1].indexOf(3, 4)
= 6

[1,2,3,4,5,4,3,2,1].indexOf(3, 7)
= -1
``` 

# 9. slice & splice
> slice : 지정한 위치 이하의 elements를 만든다(원래 배열은 바뀌지 않는다.)
> splice : 지정한 위치 이하의 elemtns를 만든다(원래 배열은 바뀐다.)

``` js 
var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];

GFs.slice(2);
 = ['summer', 'fall', 'rain', 'harvest']

GFs.slice(2, 2);
 = ['summer', 'fall'] 

GFs
 = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest']; 
```

``` js
//splic

var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];

GFs.splice(2);
 = ['summer', 'fall', 'rain', 'harvest']
GFs 
 = ['Winter', 'Spring']

 var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];
GFs.splice(2, 2);
 = ['summer', 'fall'] 

var GFs = ['Winter', 'Spring', 'summer', 'fall', 'rain', 'harvest'];
GFs.splice(2, 2, 'Texas GF', 'Florida GF', 'Hawai GF')
 = ["summer", "fall"]

 GFs
  =["Winter", "Spring", "Texas GF", "Florida GF", "Hawai GF", "rain", "harvest"] 
  ```


  # 10. delete dont delete
  > delete는 배열에 빈 공백만 생기게 한다. 
  > splice, slice를 사용하자

``` js
var myArr = [1,2,3,4,5,6,7];
delete myArr[3]
 = true
myArr
 = [1, 2, 3, empty, 5, 6, 7]
 ```

# 11.use build in function
> [이해필요]Functional Programming to the Rescue  
참고 : https://code.tutsplus.com/tutorials/what-they-didnt-tell-you-about-es5s-array-extras--net-28263
```js
> ["Happy", 0, "New", "", "Year", false].filter(Boolean);
  = ["Happy", "New", "Year"]

```
 
## 예시 reduce
reduce cache the value. for example u want to get the sum of all the element. alternatively, you can initially

```
[1, 2, 3, 4].reduce(function(sum, el, idx, arr){
  return sum + el;
})
 = 10

[1, 2, 3, 4].reduce(function(sum, el, idx, arr){
  return sum + el;
}, 100)
 = 110
 ```

# 12. real length by reduce
> talk about reduce here

``` js 
 ["hello", , , , , "javaScript"].reduce(function(count){ 
    return count + 1; 
  }, 0);
  = 2 
```

# 13. check array
> isArray 키워드로 확인하자  
typeof로는 객체, 배열 모두 "object"로 확인된다.
```js 
> typeof []
  = "object"
> typeof {}
  = "object"  

> Array.isArray([]);
  = true
> Array.isArray({});
  = false
```

# 14. deal with Array-like objects
``` js 
function foo(){
  console.log(arguments, 'len', arguments.length, '2nd', arguments[1])
}

foo(1, 2, 3,4)
 = [1, 2, 3, 4] "len" 4 "2nd" 2 
```

```js 

function foo(){
  console.log(Array.isArray(arguments));
  arguments.push(5);
  console.log(arguments, 'len', arguments.length, '2nd', arguments[1])
}
foo(1, 2, 3,4)
 = false
 = TypeError: Object #<Object> has no method 'push'
```  

``` js
function foo(){
  var args = Array.prototype.slice.call(arguments);
  args.push(5);
  console.log(args, 'len', args.length, '2nd', args[1])
}

foo(1, 2, 3,4)
 = [1, 2, 3, 4, 5] "len" 5 "2nd" 2
 ```

# 15. array method in string
```js 
var dd = 'that JS Dude';

dd.filter(function (el, idx){
  return idx>7;
})
 = TypeError: Object that JS Dude has no method 'filter'
  

[].filter.call(dd, function(el, idx){
 return idx>7;
})
 = ["D", "u", "d", "e"]
 ```
  
 # +Basic Array method
> callback function of map, filter, some, every, forEach has three parameters: elem, index, arr.  
And you can optionally pass "this" as second argument of these Array method.

