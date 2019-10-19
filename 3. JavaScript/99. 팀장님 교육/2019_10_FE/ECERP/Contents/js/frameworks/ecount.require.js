require = (function(){ 

  const urlMap = {};

  var scriptLoader = function(key, callback){
    var script = document.createElement("script");
    script.src = urlMap[key].url;
    script.async = true;

    script.onreadystatechange = script.onload = function (evt) {
      var state = script.readyState;

      debugger;
      if ((evt && evt.type == "load") || /(loaded|complete)$/i.test(state)) {
        script.onreadystatechange = script.onload = null;
        callback();
      }
    };

    document.body.appendChild(script);
  }

  return {
    load: function(key, callback){
      //key => 로드 완료 된것인지 체크
      //미로드시 요청 -> callback()
      //로드시 -> callback()

      if(urlMap[key]){
        if(!urlMap[key].complete){
          scriptLoader(key, function(){
            urlMap[key].complete = true;
            callback();
          });
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
        if(!urlMap[key] ||
            urlMap[key].url != config[key]){
          urlMap[key] = {
            url: config[key]
          };
        }
      }
      console.log("### ecount.require.js > define: ", urlMap);
    }
  }
})();