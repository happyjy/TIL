# Dependency injection

## 스프링 DI 설정 방법
* 위 java 코드는 StudentRegisterService클래스에 StudentDao클래스를 주입하고 있다.
* 아래 xml(applicationContext.xml)에 빈을 등록하는 방법으로 빈등록시 의존성 주입하는 코드
  - 첫번째 등록한 studentDao 빈을 registerService id로 등록한 빈에 주입하고 있음
```java
public StudentRegisterService(StudentDao studentDao) { 
  this.studentDao = studentDao;
}
```

```xml
<bean id="studentDao" class="ems.member.dao.StudentDao" ></bean>
<bean id="registerService" class="ems.member.service.StudentRegisterService">
  <constructor-arg ref="studentDao" ></constructor-arg>
</bean>
```
