//EcContents.js
(function(){
    EcContents = ecount.Class(EcComponent, {
        template: "<div/>",
        init: function(){
            EcComponent.prototype.init.apply(this, arguments);
        },
        setTemplate: function(options){
            this.template = `<div id="${options.id}" class="${options.class}">`;
        },
        render: function(){             
            EcComponent.prototype.render.apply(this, arguments);
        }
    });
})();