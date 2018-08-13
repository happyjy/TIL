# Webpack

## Webpack 이란 ? 
> 서로 연관 관계가 있는 웹 자원들을 js, css, img와 같은 스태틱한 자원으로 변환해주는  
모듈 번틀러
> 번들링 하면 한개 또는 한개 이상의 파일을 만들어 낸다.

## Webpack 사용 이유
> 새로운 형태의 Web Task Manager
: 기존 Web Task Manager (Gulp, Grunt) 의 기능 + 모듈 의존성 관리


### Webpack 의 철학
> 초보자가 접근하기에 어려움 (bcz, unique syntax/ new philosophies)
1. Everything is Module
모든 웹 자원 (js, css, html) 이 모듈 형태로 로딩 가능
```
require(`myJSfile.js');
require('myCSSfile.css');
```

2. Load only “what” you need and “when” you need  
초기에 불필요한 것들을 모두 로딩하지 않고, 필요할 때 필요한 것만 로딩하여 사용  
(가능한 이유 : 모듈 번들러는 모든 모듈을 bundle.js (10MB-15MB)파일에 가지고 있다.  
then bundle.js를 생성한다. -Webpack은 다양한 구조물을 가지고 있고 쪼개-  
then load 한다. -app에서 asynchronously하게-)  


### Development Vs Production
> build : npm run bvuild to build prodection dundles  
> dev : webpack_dev_server
``` 
scripts: {
  //npm run bvuild to build prodection dundles
  "build" : "webpack --config webpack.config.prod.js",

  //npm run dev to getnerate developmetn bundles and run dev serve
  "dev" : "webpack_dev_server"
}
```

#webpack CLI Vs webpack-dev-server
> webpack이 제공하는 두개 interfaces  

1. Webpack CLI tool 
: the default interface(installed as part of Webpack itself)
: Webpack을 처음 배울때 cli를 사용하는 것을 추천한다.
```
Usage: 

OPTION 1: 
//Install it globally
npm install webpack --g
//Use it at the terminal 
$ webpack //<--Generates bundle using webpack.config.js

OPTION 2 :
//Install it locally & add it to package.json
npm install webpack --save
//Add it to package.json's script 
“scripts”: {
 “build”: “webpack --config webpack.config.prod.js -p”,
 ...
 }
//Use it by running the following:
"npm run build"

```

2. webpack-dev-server tool 
: A Node.js server(You need to install it separately)  
: 장점1 - Live Reloading & replacing(Hot Module Replacemnt-HMR)  
```
Usage: 

OPTION 1:
//Install it globally
npm install webpack-dev-server --save
//Use it at the terminal
$ webpack-dev-server --inline --hot
OPTION 2:
// Add it to package.json's script 

“scripts”: {
 “start”: “webpack-dev-server --inline --hot”,
 ...
 }
// Use it by running 
$ npm start
Open browser at:
http://localhost:8080
```

### Webpack 에 필요한 NPM 명령어
> npminit 웹팩 초기 설정에 필요한 명령어로 package.json 파일을 생성  
npminstall(i) 라이브러리 명 (여러개 한번에 가능)  
```
npm i jquery angular lodash ‐‐save
```


## Core Concept
> Entry
> OutPut
> Loaders
> Plugins


### 참고
> https://webpack.js.org/
> https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9
