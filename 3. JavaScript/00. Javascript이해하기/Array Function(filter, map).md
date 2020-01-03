# filter
> Array 함수로 filter 함수 안에 test를 통과한 Array elements를 Array로 반환

# map
> Array 함수로 모든 elements가 map의 function의 결과값을 반환

# filter, map을 동시에 사용 원하는 값으로 가공할 수 있다.

```js 
var arr = [{key: 1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}];
var returnValue = arr.filter(function(item){
                              return item.key > 1;
                            })
                      .map(function(item){
                              var obj = {};
                              obj.key = item.key;
                              obj.value = item.value * 2;
                              
                              return obj;
                            });

returnValue => [{key: 2, value: 40},{key: 3, value: 60}]
```

