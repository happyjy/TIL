ecount.class = function(parent, ownPrototype){
  var createNamespace = function (namespace, target) {
    var namespace = namespace ? namespace.split(".") : "";
    var inst = target || window;

    for (var i = 0; i < namespace.length; i++) {
        if (typeof inst[namespace[i]] === "undefined") {
            inst[namespace[i]] = {};
        }
        inst = inst[namespace[i]];
    }
    return inst;
  }

  var ctor = function(){}
  var klass = function(){
    debugger;
    this.init.apply(this, arguments);
  };
  
  if(parent != null){
    var parentObject = createNamespace(parent);
    ctor.prototype = parentObject.prototpye;
    klass.prototype = new ctor();
    ctor.prototype = null;      //부모가 가진 것을 chaning
  }

  for(var prop in ownPrototype){
    klass.prototype[prop] = ownPrototype[prop];
  }

  return klass;
}

ecount.page = ecount.class(null, {
  init: function(){
    console.log("### ecount.page.protptype > init")
    this.viewBag = options.viewBag;

    this.onInitHeader();
    this.onInitContents();
    this.onInitFooter();
  }
})

ecount.page.factory = function(parent, pageId, page){
  
  //1. parent 코드 로드 확인
  //2. 공통 스크립트 버전 확인
  //required file 버전 정보(파일 뒤 숫자) 확인 
  //3. page instance 생성

  new Promise(function(resolve, reject){
    if(parent == "ecount.page"){
      resolve();
    }else{
      require.load(parent, resolve);
    }
  })
  .then(function(resolve){
    return new Promise(function(resolve, reject){
      // require.load(parent, resolve);
      require.load("ecount.control", "ecount.layout", resolve);
    })
  })
  .then(function(){
    var pageInsatance = new (ecount.class(parent, page))({
      viewBag: window.viewBag
    });
    console.log(pageInsatance);
  });

  // require.load(parent, function(){
  //   require.load("ecount.control", "ecount.layout", function(){

  //   });
  // });
}