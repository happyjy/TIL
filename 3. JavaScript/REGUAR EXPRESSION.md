# REGULAR EXPRESSION IN JAVASCRIPT

```
str.replace(regex, '') 
```

* str : 정규식으로 바꿀 문자열
* replace(regex, '') : 정규식에 해당하는 문자열을 공백으로 바꾼다.(2번째 인자)  
* regex : 정규식


## 정규식 
* ^ : 해당하는 문자열 제외
* - : 표현 범위 
* [] : 대괄호 범위 안에 있는 문자열을 검색
* flag : 기본 동작 제어
  - g (Global Flag) : 문자열 내의 모든 패턴을 찾는다.  
  정규 표현식은 매치되는 문자열을 찾으면 검색을 중단하지만, 이 Flag를 사용하면 매치되는 모든 문자열을 찾는다.
  - i (Ignore Case) : 문자열 대소문자 구분 안함
  - m (Multi Line) : 문자열 행이 바뀌어도 찾는다.





## 정규식 예
* 숫자만
```
'가나다123abcABC'.replace(/[^1-9]/g,"");
```

* 한글만 
```
'가나다123abcABC'.replace(/[^가-힣]/g,"");
```

* 영문만
```
'가나다123asdABC'.replace(/[^a-z,A-Z]/g,"");
```

### ref 
https://blog.sonim1.com/206 

