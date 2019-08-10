//Eccomponent.js

(function(){
    EcComponent = ecount.Class(null, {
        init: function(options){
            if (!!options) {
              /**
               * study 아래 호출에 의한 여기에서 this 
               * * EcComponent.prototype.init.apply(this, arguments);
               * * this 
               *   - apply에 호출된 function의 첫번째 param
               */
                this.setTemplate(options);
                this["options"] = {};
                for( option in options ){
                    if(option === "child"){
                        this.child = options[option];
                    } else {
                        this["options"][option] = options[option];
                    }
                }
            }
        },
        render: function(parentNode){
            var $el = this.$el = $(this.template, this.options);
            var childList = [];
            
            if(this.observerObj){
                this.observerObj.subscribe(this.options.id, function(){console.log("observer")});
            }
            
            parentNode.append($el[0]);

            if(this.hasOwnProperty("child")){
                this.child.forEach(function(child, index){
                    var c = new window[child.type](child);
                    c.render($el);
                    childList.push(c);
                });
                this.child = childList;
            }
        },

        findChild: function(id) {
            return this.child.filter(function(component) {
                return component.options.id == id;
            })
        }
    })
})();
