#Webpack

##Webpack 이란 ? 
> 서로 연관 관계가 있는 웹 자원들을 js, css, img와 같은 스태틱한 자원으로 변환해주는
모듈 번틀러
> 번들링 하면 한개 또는 한개 이상의 파일을 만들어 낸다.

##Webpack 사용 이유
> 새로운 형태의 Web Task Manager
: 기존 Web Task Manager (Gulp, Grunt) 의 기능 + 모듈 의존성 관리


### Webpack 의 철학

1. Everything is Module
모든 웹 자원 (js, css, html) 이 모듈 형태로 로딩 가능
```
require('base.css');
require('main.js');
```

2. Load only “what” you need and “when” you need
초기에 불필요한 것들을 모두 로딩하지 않고, 필요할 때 필요한 것만 로딩하여 사용

### Webpack 에 필요한 NPM 명령어
> npminit 웹팩 초기 설정에 필요한 명령어로 package.json 파일을 생성
npminstall(i) 라이브러리 명 (여러개 한번에 가능)
```
npm i jquery angular lodash ‐‐save
```


##Core Concept
> Entry
> OutPut
> Loaders
> Plugins