//input.js

(function(){
    EcInput = ecount.Class(EcComponent, {
        template: "<input/>",
        init: function(){
            EcComponent.prototype.init.apply(this, arguments);
        },
        setTemplate: function(options){
            this.template = `<input type="text" id="${options.id}" name="${options.nmae}" 
            data-msg="${options.msg}" maxlength="${options.maxlength}"/>`;
        },
        render: function(){
            EcComponent.prototype.render.apply(this, arguments);
            console.log(EcComponent.options);
            if(this.onKeyDownHandler){
                this.$el.bind('keydown', this.onKeyDownHandler);
            }

            if(this.onFocusoutHandler){
                this.$el.focusout(this.onFocusoutHandler);
            }
        }
    });
})()