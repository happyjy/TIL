# call(), apply(), bind()


## call(), apply()
## bind()


## call(), apply()
```js
f.call(o);
f.apply(o);

o.m = f;      //f를 o의 임시 메서드로 만든다.
o.m();        //아무 인자 없이 호출
delete o.m;   //임시 메서드를 제거
```

```js
f.call(o, 1, 2);

f.apply(o, [1,2]);
```

var biggest = Math.max.apply(Math, array_of_numbers);


```js
//객체 o의 메서드르 m을, 원본 메서드 호출 전후에
//로그 메시지를 나기는 버전으로 교체한다.
function trace(o, m){
  var original = o[m];                        //원본 메서드를 클로저에 기억
  o[m] = function(){                          //이제 새 메서드를 정의
    console.log(new Date(), "Entering:", m);    //메시지 로그
    var result = orginal.apply(this, arguments);  //원본 메서드 호출
    console.log(new Date(), "Exiting:", m);   //메시지 로그
    return result;
  }

}
```



## bind()

```js
function f(y) { return this.x + y}    //바인드되어야 하는 함수
var o = {x:1};      //바인드될 객체
var g = f.bind(o);  //g(x)를 호출하면 o.f(x)가 호출된다.
g(2)                //=>3
```

```js
//o의 메서드로서 f를 호출하는 함수를 반환한다. 인자 또한 모두 전달된다.
function bind(f, o){
  if (f.bind) return f.bind(o);    //bind메서드가 있으면 사용한다.
  else return functino {
    return f.apply(o, arguments);ssss
  }

}
``` 