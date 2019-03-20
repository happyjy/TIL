
var widget = window["widget"] = {
    input: {}
};

var Class = function(parent, prototype){
    var fn = function(){
        this.init.apply(this, arguments);
    }
    if(parent){
        fn.prototype = new parent();
    }
    for(var p in prototype){
        fn.prototype[p] = prototype[p];
    }
    return fn;
};

/**
 * 
 * 컴포넌트 개발



 * 
 * 
 */
