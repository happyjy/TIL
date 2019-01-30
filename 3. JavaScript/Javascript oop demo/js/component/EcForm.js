//form.js
(function(){
    EcForm = ecount.Class(EcComponent, {
        template: "<form/>",
        init: function(){
            EcComponent.prototype.init.apply(this, arguments);
        },
        setTemplate: function(options){
            this.template = `<form id="${options.id}" class="${options.class}">`;
        },
        render: function(parentNode){             
            EcComponent.prototype.render.apply(this, arguments);
        }
    });
})();