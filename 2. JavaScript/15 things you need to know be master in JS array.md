

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