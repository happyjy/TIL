# with는 inline view, 임시 테이블처럼 사용된다.
> inline view : sql에서 from에서 사용된다/ 쿼리가 테이블처럼 사용될때-

> 참조할때 마다 재 요청하는 것보다는 임시테이블에서 데이터를 쉽게 찾아와서 subqeury에 반복적으로 참조하는것이 효율적일 것일 수 있다.  
> 확실하지 않으므로 상황에 맞게 성능 검사를 해봐야한다.

#with 예시1
``` db
SELECT e.ename AS employee_name,
       dc.dept_count AS emp_dept_count
  FROM emp e
  JOIN (SELECT deptno, COUNT(*) AS dept_count
         FROM emp
        GROUP BY deptno) dc
    ON e.deptno = dc.deptno;
```


위 문장을 with 로 표현 하면 다음과 같다.
```
WITH dept_count AS (
  SELECT deptno, COUNT(*) AS dept_count
  FROM   emp
  GROUP BY deptno)
SELECT e.ename AS employee_name,
       dc.dept_count AS emp_dept_count
FROM   emp e
       JOIN dept_count dc ON e.deptno = dc.deptno;
```

# with 예시2
>  같은 subquery를  반복적으로 선언하지 않아도 된다.
```
SELECT e.ename        AS employee_name,
       dc1.dept_count AS emp_dept_count,
       m.ename        AS manager_name,
       dc2.dept_count AS mgr_dept_count
  FROM emp e 
  JOIN (SELECT deptno
             , COUNT(*) AS dept_count
          FROM emp
         GROUP BY deptno) dc1
    ON e.deptno = dc1.deptno
  JOIN emp m ON e.mgr = m.empno
  JOIN (SELECT deptn
             , COUNT(*) AS dept_count
          FROM emp
         GROUP BY deptno) dc2
    ON m.deptno = dc2.deptno;
```
```
WITH dept_count AS (
  SELECT deptno, COUNT(*) AS dept_count
  FROM   emp
  GROUP BY deptno)
SELECT e.ename AS employee_name,
       dc1.dept_count AS emp_dept_count,
       m.ename AS manager_name,
       dc2.dept_count AS mgr_dept_count
FROM   emp e
       JOIN dept_count dc1 ON e.deptno = dc1.deptno
       JOIN emp m ON e.mgr = m.empno
       JOIN dept_count dc2 ON m.deptno = dc2.deptno;

```