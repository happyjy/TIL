require = (function(){ 

  const urlMap = {

  };

  return {
    laod: function(/* url, callback */){
      //url => 로드 완료 된것인지 체크
      //미로드시 요청 -> callback()
      //로드시 -> callback()
      const urls = [].slice.call(arguments);
      const callback = urls.pop();

      urls.forEach(function(url){

      });
      
    },
    define: function(config){
      for(var key in config){
        urlMap[key] = {
          url: config[key]
        };
      }
      console.log("### ecount.require.js: ", urlMap);
    }
  }
})();