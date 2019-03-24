

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
}

var ecount = window.ecount = {};
var widget = window.widget = {
    input: {},
    button: {}
};

function define(controlType, id, name){
    var obj = {
        controlType: controlType,
        id: id,
        name: name
    };

    return {
        value: function(value){
            obj.value = value;
            return this;
        },
        handler: function(handler){
            obj.handler = handler;
            return this;
        },
        end: function(){
            return obj;
        }
    }
}


function create(items, $parent){
    items.forEach(function(item){
        var control = new window[item.controlType](item);
        control.render($parent);
    })
}