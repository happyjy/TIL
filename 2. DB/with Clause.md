# with Clause
: 다른 시스템 분석하다가 with 문장 쓰는 것을 봤음
> 특징 : inline view, temporary table처럼 처리 된다.
> 장점 : 반복 호출 되는 쿼리 가 있을때 'with' 문으로 만들면 반환 속도가 빠르다.

## 예제
 * inlin view로 사용 될때
```db
 SELECT e.ename AS employee_name,
       dc1.dept_count AS emp_dept_count,
       m.ename AS manager_name,
       dc2.dept_count AS mgr_dept_count
FROM   emp e
       JOIN (SELECT deptno, COUNT(*) AS dept_count
             FROM   emp
             GROUP BY deptno) dc1
         ON e.deptno = dc1.deptno
       JOIN emp m ON e.mgr = m.empno
       JOIN (SELECT deptno, COUNT(*) AS dept_count
             FROM   emp
             GROUP BY deptno) dc2
         ON m.deptno = dc2.deptno;
 ```

 ```DB
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

 ## 예제1
 > temporary table로 사용 될 때 
 ```
WITH 
  dept_costs AS (
    SELECT dname, SUM(sal) dept_total
    FROM   emp e, dept d
    WHERE  e.deptno = d.deptno
    GROUP BY dname),
  avg_cost AS (
    SELECT SUM(dept_total)/COUNT(*) avg
    FROM   dept_costs)
SELECT *
FROM   dept_costs
WHERE  dept_total > (SELECT avg FROM avg_cost)
ORDER BY dname;
 ```