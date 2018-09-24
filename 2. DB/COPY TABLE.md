# COPY TABLE

* By Copying all columns from another table

```
CREATE TABLE suppliers
AS (SELECT *
    FROM companies
    WHERE company_id < 5000);
```


* By Copying selected columns from another table
```
CREATE TABLE suppliers
  AS (SELECT company_id, address, city, state, zip
      FROM companies
      WHERE company_id < 5000);
```

* By Copying selected columns from multiple tables
```
CREATE TABLE suppliers
  AS (SELECT companies.company_id, companies.address, categories.category_type
      FROM companies, categories
      WHERE companies.company_id = categories.category_id
      AND companies.company_id < 5000);
```

* 데이터가 있는 것만 테이블을 복사 하고 싶을 때 
> [study] where condition에 1=2를 추가 한다. 

```
CREATE TABLE suppliers
  AS (SELECT *
      FROM companies WHERE 1=2);
```