# partition by 

## 설명
> step1, 2, 3 로 설명

### step1
* 브랜드별로 재고 개수 파악하기
```
SELECT BRAND
    , COUNT(ITEM_ID) 
 FROM ITEMS
GROUP BY BRAND;
```
```
+--------------+---------------+
|  Brand       |   Count       | 
+--------------+---------------+
| H&M          |     50        |
+--------------+---------------+
| Hugo Boss    |     100       |
+--------------+---------------+
| No brand     |     22        |
+--------------+---------------+
```

### stpe2
* 브랜드, 아이템별 재고 파악하기
  - 아래와 같이 시도/ 에러가 나올 수 있다.
  - step3에서 partition by를 썻다
```
SELECT ITEM_NR
     , BRAND
     , COUNT(ITEM_ID) 
  FROM ITEMS
 GROUP BY BRAND;
```
```
=>  ORA-00979: not a GROUP BY expression 
```
### step3
```
 SELECT ITEM_NR
      , BRAND
      , COUNT(ITEM_ID) OVER (PARTITION BY BRAND) 
 FROM ITEMS;
```

```
Whic means:

COUNT(ITEM_ID) - get the number of items
OVER - Over the set of rows
(PARTITION BY BRAND) - that have the same brand
And the result is:

+--------------+---------------+----------+
|  Items       |  Brand        | Count()  |
+--------------+---------------+----------+
|  Item 1      |  Hugo Boss    |   100    | 
+--------------+---------------+----------+
|  Item 2      |  Hugo Boss    |   100    | 
+--------------+---------------+----------+
|  Item 3      |  No brand     |   22     | 
+--------------+---------------+----------+
|  Item 4      |  No brand     |   22     | 
+--------------+---------------+----------+
|  Item 5      |  H&M          |   50     | 
+--------------+---------------+----------+
```