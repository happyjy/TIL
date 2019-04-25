참고 Private 속성은 객체의 외부에서는 접근 할 수 없는 외부에 감춰진 속성이나 메소드를 의미한다. 이를 통해서 객체의 내부에서만 사용해야 하는 값이 노출됨으로서 생길 수 있는 오류를 줄일 수 있다. 자바와 같은 언어에서는 이러한 특성을 언어 문법 차원에서 지원하고 있다.


# 클로저 활용 예제 
> 첫번째 예제 : 배열에 클로저를 사용하지 않은 function을 저장 했을 때
> 두번째 예제 : 배열에 클로저가 적용된 function(내,외부 함수)를 저장 했을 때

```js
var arr = [];
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i
    }    
    console.log(arr[i]());
}


console.log("-------------");


for(var index in arr){ console.log(arr[index]())}

>>> 결과값
0
1
2
3
4
-------------
5
```



```js
var arr = [];
for(var i = 0; i < 5; i++){
    //POINT
    arr[i] = function(i){
        return function(){
            return i;
        }
    }(i)    
    console.log(arr[i]());
}

console.log("-------------");

for(var index in arr){ console.log(arr[index]())}

>>> 결과값
0
1
2
3
4
-------------
0
1
2
3
4
```
