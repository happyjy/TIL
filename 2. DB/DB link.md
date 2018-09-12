# DB LINK DEF
> DB link는 한 데이터 베이스에 스키마 객체이고   
> 다른 데이터베이스 스키마에 접속하기 위해 사용된다.

# 설명
> 다른 데이터베이스 스키마에 접속하면 테이블, 뷰에 접근 할 수 있다.
```
@dblink

dblink : 데이터베이스 설정 한 이름
```

# 예
1. 가정 
* 두개 데이터베이스가 있다.
* 한개는 'local', 다른 하나 'remote'
* 나는 다른 데이터베이스 도메인 이다.

2. 'remote'이름으로 remote 스키마를 퍼블릭하게 사용하기 위해 정의한다.
```
CREATE PUBLIC DATABASE LINK remote 
   USING 'remote'; 
```

3. 'Local'스키마에서 'remote'스키마에 접근해서 remote에 속해 있는 테이블에 접근해서 update 한다.
```
UPDATE employees@remote
   SET salary=salary*1.1
   WHERE last_name = 'Baer';
```

---
1. 전체 DB LINK 조회 쿼리   
SELECT * FROM ALL_DB_LINKS;
2. DB LINK 생성 방법  
CREATE DATABASE LINK 링크명  
CONNET TO 계정 ID
IDENTIFIED BY 계정 PW
3. DB_LINK 삭제 방법  
DROP DATABASE LINK 링크명;


---
# ref
1. https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_5005.htm