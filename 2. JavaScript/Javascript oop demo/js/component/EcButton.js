//button.js
(function(){
    EcButton = ecount.Class(null, {
        template: "<button/>",
        init: function(){
            EcComponent.prototype.init.apply(this, arguments);
        },
        setTemplate: function(options){
            this.tempalte = `<button id="${options.id}" 
            disabled="${options.disabled}"
            name="${options.name}">`;
        },
        render: function(){
            EcComponent.prototype.render.apply(this, arguments);
            if(this.$el[0].dataset.disabled){
                this.$el.bind('click', function(e){
                    this.disabled = true;
                    // var me = this;
                    setTimeout(() => {
                        this.disabled = false;
                    }, 2000);
                });
            }
        },
        onClick: function(){
            
        }
    })
})();