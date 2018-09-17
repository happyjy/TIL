<<>> AS OF TIMESTAMP
#DEF 
: Database Backup and Recovery Basics
: Oracle Flashback Query: Recovering at the Row Level



# EXAMPLE [***]
* 특정 시간대 찾기
SELECT * 
  FROM EMP AS OF TIMESTAMP TO_TIMESTAMP('2005-04-04 09:30:00', 'YYYY-MM-DD HH:MI:SS')
   WHERE name = 'JOHN';


* 시스템 시간 기준으로 찾기
SELECT * 
  FROM CSPTFPM AS OF TIMESTAMP(SYSTIMESTAMP-INTERVAL '1' MINUTE) 
 WHERE 1=1 
   AND PLT_CD = '4120' 
   AND ITEM_CD = '301019';

* 조회 후 삽입 하기
INSERT INTO EMP 
    (SELECT * 
       FROM EMP AS OF TIMESTAMP TO_TIMESTAMP('2005-04-04 09:30:00', 'YYYY-MM-DD HH:MI:SS')
      WHERE name = 'JOHN');