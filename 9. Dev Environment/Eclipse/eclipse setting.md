
# html 노란색 느낌표 아이콘 없애기 
> Preferences > Annotations > Warnkins option > show in 체크해제

# Tab to space, space to Tab
> Windows - > Preferences 메뉴 선택  
General → Editors → Text Editor 선택  
tab width 를 확인한 후에  Insert spaces for tabs 체크  


# 콘솔창 전화 막기
> Window > Preference > Run/Debug > console > 아래 2개 옵션 check 풀기
(1. Show when program writers to standard out/ 2. Show when program writers to standard error)

# 자동 validatino 막기 
> Windows > Preferences > validation  
Build 열의 체크를 일부 해제하면 도움이 된다.

# javascript Validator 옵션 제거 
> 프로젝트 설정 > builders > javascript Validator 옵션 제거

# console 버퍼 늘이기/ 가로 길이 제한하기
> Windows > Preferences > Run/Degug > console > fixed width console : 120/ Limit console output: 80000


# eclipse.ini
```
필요에 따라 아래의 설정정보를 수정할 수 있다.

메모리 설정의 경우, 각 컴퓨터의 메모리 용량에 따라 설정하여야한다. (1~2G : 256m, 2~3G, 512m, 4G~ : 1024m 권장)

Xverify:none 

클래스 검사 생략. eclipse 실행 시간 단축

XX:+UseParallelGC 

Parallel Collector를 사용. 병렬 가비지 컬렉션.

XX:-UseConcMarkSweepGC 

병행 mark-sweepGC 기능을 수행하여 GUI 응답 속도 처리

XX:PermSize=32M 

eclipse 클래스 로딩 기본 메모리

XX:MaxPermSize=128M 

eclipse 클래스 로딩 최대 메모리

Xms256m 

eclipse 실행시 잡는 최소 메모리

Xmx256m 

eclipse 실행시 잡는 최대 메모리

(예)-Xverify:none 

-XX:+UseParallelGC
-XX:-UseConcMarkSweepGC
-XX:PermSize=64M
-XX:MaxPermSize=512M
-XX:MaxNewSize=512M
-XX:NewSize=128M
-Xms1024m
-Xmx1024m 
```

# 플러그인 삭제/ 이클립스 실행시 로딩되는 플러그인 해제
> eclipse > preference > Install/Update 불필요한 플러그인 삭제  
> eclipse > preference > general > startup and shutdown 이클립스 실행시 로딩되는 플러그인 해제