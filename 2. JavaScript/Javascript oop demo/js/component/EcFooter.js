//EcFooter.js
(function(){
    EcFooter = ecount.Class(EcComponent, {
        template: "<div/>",
        init: function(){
            EcComponent.prototype.init.apply(this, arguments);
            this.observerObj = arguments[0].observerObj;
        },
        setTemplate: function(options){
            this.template = `<div id="${options.id}" class="${options.class}">`;
        },
        render: function(){             
            EcComponent.prototype.render.apply(this, arguments);
        }
    });
})();