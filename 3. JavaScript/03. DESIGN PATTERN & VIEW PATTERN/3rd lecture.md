



- 3회차 요약

  - 반복을 처리할 수 있는 composite pattern에 대해서 알아봄

    

- composite pattern은 recursive에 대한 이해가 필요하다  

- 이번강의는 composite pattern을 천천히 살펴 볼 거다

  - 그럼 recursive를 이해하고 recursive pattern을 이용하는 dp를 이해 할 수 있을 것이야

    

- DP는 
  https://youtu.be/umui-w3YrWw?list=PLBNdLLaRx_rLzsln__WwoOuGwt0ZnAmS5&t=26

  - 객체 지향적인 역할을 통해서 
    알고리즘을 제어문으로 기술하지 않고 
    객체 관계로 푸는 것으로 얘기 할 수 있다. 

  - composite pattern은 ast(추상트리)와 매칭이 된다

  - ... 폴더 파일 에 대한 설명

    

    

- LOOP PATTENR 
  https://youtu.be/umui-w3YrWw?list=PLBNdLLaRx_rLzsln__WwoOuGwt0ZnAmS5&t=102

  - 동일한 구조의 반복 Iteration: ITERATOR PATTERN
  - 알고리즘 전개에 따른 반복 Recursion: COMPOSITE, VISITOR PATTERN 



- TODO DOMAIN
  https://youtu.be/umui-w3YrWw?list=PLBNdLLaRx_rLzsln__WwoOuGwt0ZnAmS5&t=248	
  - TODO APP을 만들면서 배우는 "COMPOSITE PATTERN"
  - 클래스 보다는 클래스틀 쓰이는 곳에 더 관심이 있다.  
  - 모델링중... 
  - 엔티티 TASK, TASK LIST
- TASK 
  https://youtu.be/umui-w3YrWw?list=PLBNdLLaRx_rLzsln__WwoOuGwt0ZnAmS5&t=495
  - 의존성이 더 낮은 TASK를 디자인 
  - 의존성 낮 -> 기능이 별루 없
  - 수정됐을때 여파가 적다 
  - 개발할때는 쉬운 순서대로 하자.
  - 캡슐화에 대해서... 
- TaskList
  - 코드가 짤혀서 다른 회차 같은 강의로 전환 후 20:46분 부터 봄/ 201811.21 > 2018.03
  - https://youtu.be/Sb2hTWZKyAI?t=1239
  - for문도 if문이다(3단)
    - 3단 if문은 사람이 감당x





- TODO SUB ITEM

  - https://www.youtube.com/watch?v=Sb2hTWZKyAI&feature=youtu.be&t=1239

  - 모델링

    - 객체가 있는 배열
    - optional

  - 구현 
    https://youtu.be/Sb2hTWZKyAI?t=1959https://youtu.be/Sb2hTWZKyAI?t=1959

    - todo  하위에 바로 추가하는 것과, 한개 todo의 sub에 추가하는 것 행위가 일치하다

  - ![1575451213145](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1575451213145.png)

  - OOAD

    - 객체지향은 객체지향적으로 분석해야 성공시킨다.
    - "행위, 엔티티"가 뭔지 분석하는 연습을 해야한다.

  - TaskList class > byDate에 map이 추가가됨.

    - https://youtu.be/Sb2hTWZKyAI?t=2117
      - Task에 _getList를 사용
      - ![1575451173495](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1575451173495.png)

  - https://youtu.be/Sb2hTWZKyAI?t=2332

    - list와 task의 내부거래, 캡슐화

  - COMPOSITE pattern

    - https://youtu.be/Sb2hTWZKyAI?t=2372

    - 무한 DEPTH 구조에 구현에 대해서 설명  (재귀적인 개념!!!) 

    - mvc, mvvm패턴이 해결하려고 하는건? 

    - https://youtu.be/Sb2hTWZKyAI?t=2739

      - 복잡한 모델을 가지고 와서 앱 전체를표현하는 것 

      ![1575451958198](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1575451958198.png)

  - depth가 깊으면 stackoverflow를 일으키기 쉽다.

  - composite pattern 핵심

    - https://youtu.be/Sb2hTWZKyAI?t=2964
    - 같은 함수를 불러서 문제를 해결한다.(getResult가 getResult를 부른다.)

  - 훅 설명

    - https://youtu.be/Sb2hTWZKyAI?t=3018
    - 위 캡쳐 부모 클래스 Task 4개 function은 자식들이 구현해줘야한다.
      - _getResult, isComplete, sortTitle, sortDate

  - 위 캡쳐 코드는 template method pattern && composite pattern이 같이 쓰이고 있다.

  - TaskItem을 Task metho 4가지로 구현해 봅시다 

    - TaskItem

      ![1575452108517](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1575452108517.png)

    - TaskList

      ![1575452166268](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1575452166268.png)



- COMPOSITION RENDERING 

  - https://youtu.be/Sb2hTWZKyAI?t=3232
  - 현실세계 N단계가 대부분이단.
    - 대표적인예 html, markdown, graph, tree, 노드간의 조합(네비게이션 최적 경로)
    - 서버 개발자가 composition 으로 data를 넘겨주면 rendring 해주는곳에도 적용해야한다.
    - 이어 보기: https://youtu.be/Sb2hTWZKyAI?t=3574
  - composite pattern을 해야 고급 알고리즘을 해결 할 수 있다. 

  

  - sequence diagram 
    - composition이 왜 재귀를 일으키는지 확인해보기 
    - ![1576626303200](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1576626303200.png)

  

  - el setting 
    - ![1576626480189](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1576626480189.png)

- Task Class

- ![1576626631646](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1576626631646.png)

- TaskItem

  - ![1576626754545](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1576626754545.png)

- Renderer

  - constructor에 Task.byTitle 오타 -> Task.title 로 변경
  - ![1576626874526](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1576626874526.png)
  - add function
    - model render에 대해서 설명
      - 추가되는 data(new TaskItem(title, date))를 다시 그린다 라는 의미(this.render();)
      - data를 바꾸고 다시 그리는 것이다. (event 마다 반응하지 않는다.)
      - 그럼 느리지 않을까요? -> 그림그리는 곳에서 알아서 할꺼야. 
        - 있던 el을 재활용 해서 그릴건지, 다 날리고 다시 그릴건지 render에서 알아서 할 것 
        - 있던 el을 재활용 해서 그리는것? -> react.js
          - react data를 바꾸면 virtualDom에 있는 data만 바뀌고 
            실제 dom들은 증분을 계산해서 필요한 경우에만 제거하고 다시 만들지   
            아니면 update 해버린다. 
            -> 즉 이건 rendering 로직에 달려 있다. 
        - 증분 rendering을 계산해서 효율적으로 그리기 쉽지 않다면? 
          - 다지우고 다시 그린다. 
          - 좋은점: 언제나 화면이 data와 같다, 화면에 오류가 있을 수 없다. 
        - model rendering 을 쓰는 이유 
          - model대로 그리기만 하니까 if가 없어져서 model에 대한 갱신 로직만 계속 잡아주고 
            rendering은 일관성있게 추진 할 수 있다.
          - mv관련되 fw의 기본 
        - reduce를 권장하지 않는 이유? 
          - react 는 model render 기반으로 만들어 졌는데
            reduce를 사용하게 되면 데이터 변화를 수신해서 쓰게 된다. 
            그래서 "증분"으로 바뀐다. 
            원래 react는 증분이 아니다 . 
            그래서 그 상태를 복원하기가 어려워진다. 
          - 권장하지 않는 간단한 예
            - 예를 들어 두번째 탭에 슬라이드를 밀고 네번째 모달 열었다. 
              브라우저 닫았다 열면 복원이 안돼요 
              이유는: 데이터 그대로 그리지 않았기 때문에 
            - 그런데 model render는 데이터 변화가 일어날때마다 
              local storage에 다 밖아 놓고  브라우저 닫고 다시 열면 
              똑깥이 복원 된다. 
              -  model render에서는 tab만 바꿔도 다 지우고 다시 그리는데
              - 이게 싫으면 react fw 쓰며 돼 
              - 성능? renderer가 알아서 증분계산한다 . 우리가 신경 쓸일 x
              - 우리는 model 변경하고 render을 때린다. 
            - **[중요]model render가 우리가 배우는 mv 계열 프레임워크의 원리**
          - mv를 하는데 model render를 하지 않고 증분 render를 한
            - 증분 render
              - 사용자의 행위에 의해서 화면이 결정된다. 
              - 그래서 상태를 돌리기가 어렵다. 
              - **돌리기 위해서는 "command pattern"을 사용 해서 행동을 객체화 시키는 방법이 있다.** 
                - undo, redo에서 사용된다. 
            - **model render** 
              - **mv 프레임워크를 사용할때 증분해서 계산하는걸 잊어버리자** 
              - **내가 바꿀 component의 data를 갱신하고 render를 하자** 
              - **rendering도 다 지우고 다시 그리자** 
                **다시 그리는데 무거울 것 같아? -> react가 알아서 증분계산해서 똑똑하게 update한다.** 

- DomRenderer class
  - ![1577354458711](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1577354458711.png)
  - add, remove, toggle 모두 바뀌었을때 render가 있다. 
  - data바뀌고 render다 !
  - **render로직은**
    - list를 기준으로 composition 데이터를 돌면서 그림을 그리는것 하나만 짜면 된다. 



- rendering로직 

  - ![1577354661301](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1577354661301.png)

  - composition에 대응해야해서 

  - parent를 무조건 날린다. 

  - reduce패턴 - https://youtu.be/Sb2hTWZKyAI

    - 벡터를 스칼라화 한다 (벡터 값여러개, 스칼라 값1개)
    - reduce: 배열 method중 하나의 값으로 바꿔주는것
      - some, every도 잇는데 이건 boolean value로 바뀐다.
      - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      - **[중요]결론** 
        : reduce에 초기값을 element를 주면 배열을 돌면서 
        각배열에 값을 element에 설정하면서 
        각 배열 요소마다 처음에 설정한 el이 privouse value로 돌아오게 할 수 있고 
        결국 append child하면서  세팅이 완료된 element가 반환이 됩니다. 
        - 화면에서 
          el('nav'): reduce의 초기값

  - 결론 - https://youtu.be/Sb2hTWZKyAI?t=4865

  - composition에서는 도입 함수라고 한다. 

    - 도입함수, composition함수와 나뉘어진다. 

      - 도입함수: init 용도 

        ```js
        parent.appendChild('tiltle,date'.split(',').reduce(nav, c)=>(
        	nav.appendChild(
            	el('button', 'innerHHTML', c, 
        			'@fontWdight', this._sort === c ? 'bold' : 'normal',
                   	 'addEventListener', ['click', e=>(this._sort = Task[c], this.render())]), el('nav')); 
        ```

        

        - composition함수: loop에 해당하는 composition에 들어갈때는 composition 함수를 위임한다. 

        - this.render(parent, this._list, this.\_list.getResult(this.\_sort), 0);

  - composition 되는 원리 - https://youtu.be/Sb2hTWZKyAI?t=4919

  - 정리하기

  - 아래 코드에 대한 설명함 

    ```js
    this.render(parent, this._list, this._list.getResult(this._sort), 0);
    ```



- _render(base, parent,{item, childrend}, depth) function에 대해서 
  - = composition renderer
  - ![1577356164124](C:\Users\18085jaeyoon\AppData\Roaming\Typora\typora-user-images\1577356164124.png)
  - 정리하기 



