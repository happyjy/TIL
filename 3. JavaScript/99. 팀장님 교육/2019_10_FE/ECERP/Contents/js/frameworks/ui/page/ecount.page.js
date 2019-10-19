ecount.page = class {

}



ecount.page.factory = function(parent, pageId, property){
  
  // require("ecount.control.js", "ecount.layout.js", function(){});
  //1. parent 코드 로드 확인
  //2. 공통 스크립트 버전 확인
  //required file 버전 정보(파일 뒤 숫자) 확인 
  //3. page instance 생성
  

  debugger
  new Promise(function(resolve, reject){
    require.load(parent, resolve)
  })
  .then(function(resolve){
    require.load("ecount.control", "ecount.layout", resolve);
  })
  .then(function(){
    console.log(1);
  })

  require.load(parent, function(){
    require.load("ecount.control", "ecount.layout", function(){

    });
  });
}