require = (function(){ 

  const urlMap = {};

  var scriptLoader = function(key, callback){
    var script = document.createElement("script");
    script.src = urlMap[key].url;
    script.async = true;

    document.body.appendChild(script);
  }

  return {
    load: function(key, callback){
      //key => 로드 완료 된것인지 체크
      //미로드시 요청 -> callback()
      //로드시 -> callback()

      if(urlMap[key]){
        if(!urlMap[key].complete){
          scriptLoader(key, callback);
        }else{
          callback();
        }
      }else{
        // scriptLoader(key, callback);
      }



      // url이 여러개 arguments로 넘어 올때 로직
      // const urls = [].slice.call(arguments);
      // const callback = urls.pop();
      // urls.forEach(function(url){

      // });
      
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