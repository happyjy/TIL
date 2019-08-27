

# Jest 실습 환경 구성 

* npm init
  - 세팅할때 test command 설정에 따라서 npm [test command 설정명]으로 test 할 수 있다. 
* Jest 설치 
  - npm install --save-dev jest
  - [install jest Site](https://jestjs.io/docs/en/getting-started)
* babel-jest 사용 
  - yarn add --dev babel-jest @babel/core @babel/preset-env
  - babel.confing.js 파일 생성후 아래 ref site에서 코드 복붙
  - [Using Babel ref Site](https://jestjs.io/docs/en/getting-started#using-babel)
* 테스트 실행 
  - npm test
  - npm test -- --watchAll
  - pacakge.json에 "script" 부분을 보면 "test"라고 되어 있어 가능한것(npm test command 설정)