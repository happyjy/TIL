

#폴리머란? 
> Web component 표준에 적합한 웹 어플리케이션 라이브러리
> DOM을 템플릿화 하여 재활용

## 탄생배경
* 자주 사용되거나 구조적 분기가 필요한 요소를  
다른 요소들과 충돌하지 않는 재활용 가능한 방법이 필요해서 탄생
* 분리 되어 있는 html, css, js를 하나로 묶어 쉽게 사용할 수 있다. -> 적은 코드로 덜 혼란 스럽게 코드 작성 가능

## Web component 
* 구성 요소(웹 컴포넌트를 지워하는 4가지 규격) 
  - Custom Elements : custom 태그를 통한 HTML element 생성
  - Shadow DOM : 컴포넌트의 DOM, CSS, JS를 감추는 캡슐화(encapsulation)와 별도의 범위(Scope)를 갖는 DOM 제공
    : 다큐먼트의 다른 부분과의 충돌에 대한 걱정 없이 스크립트와 스타일을 작성할 수 있습니다.
  - HTML Imports : 웹 문서 내에 외부 리소스를 포함(Import) 하기 위한 기능을 제공
  - Template : 로딩 시간에는 비활성화되는 마크업을 정의하고 이를 실행 시간에 복제할 수 있는 기능을 제공


## Web component tutorial(custom element, shadow dom, template&slot)
  * https://developer.mozilla.org/ko/docs/Web/Web_Components#%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC

### custom element
> 
