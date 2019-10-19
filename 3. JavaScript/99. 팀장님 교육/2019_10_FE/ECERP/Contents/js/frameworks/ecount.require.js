
require = (function(){

  var urlMap = {};

  var scriptLoader = function(key, callback){
      var script = document.createElement("script");
      script.src = urlMap[key].url;
      script.async = true;        

      script.onreadystatechange = script.onload = function (evt) {
          var state = script.readyState;
          if ((evt && evt.type == "load") || /(loaded|complete)$/i.test(state)) {
              script.onreadystatechange = script.onload = null;
              callback();
          }
      };

      document.body.appendChild(script);
  }

  new Promise(function(resolve, reject){
      resolve(1);
  })
  .then(function(a){
      console.log(a);
      return Promise.resolve(2);
      // return new Promise(function(resolve, reject){
      //     resolve(2)
      // })
  })
  .then(function(a){
      console.log(a);
      return Promise.reject("error")
  })
  .catch(function(err){
      console.log(err)
  })



  function requestScript(key){
      return new Promise(function(resolve){
          if(urlMap[key]){
              if(!urlMap[key].complete){
                  scriptLoader(key, function(){
                      urlMap[key].complete = true;
                      resolve();
                  });
              }else{
                  resolve();
              }
          }else{
              resolve();
              // scriptLoader(url, callback);
          }
      })
  }

  return {
      load: function(key, callback){
          //url => 로드완료 된것 체크
          //미로드시 요청 -> callback()
          //로드시 -> callback()

          var urls = [].slice.call(arguments);
          var callback = urls.pop();
          var loadedCount = urls.length;
          var promise = [];
          urls.forEach(function(key){
              promise.push(requestScript(key))
          });
          Promise.all(promise).then(callback);
      },

      define: function(config){
          for(var key in config){
              if(!urlMap[key]/*처음등록 */ || 
                      urlMap[key].url != config[key]){
                  urlMap[key] = {
                      url: config[key]
                  };
              }
          }
          console.log(urlMap);
      }
  }
})();