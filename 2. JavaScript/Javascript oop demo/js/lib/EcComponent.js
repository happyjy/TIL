//Eccomponent.js

(function(){
    EcComponent = ecount.Class(null, {
        init: function(options){
            if (!!options) {
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
            //observer pattern
            // if(this.onClick) {
            //     debugger;
            //     options.subscribe("click:" + this.options.pageId + ":" + this.options.id ,this.onClick.bind(this))
            // }
        },
        render: function(parentNode){
            var $el = this.$el = $(this.template, this.options);
            var childList = [];
            
            if(this.observerObj){
                this.observerObj.subscribe(this.options.id, function(){console.log("observer")});
            }
            /**
             * ::: 고민
             *  function을 지정해줘야하는데 
             * 개발자가 원하는 btn에 function을 줘야하는데 
             * 원하는 동작을 page1에 구현해야한다.........
             * 
             */

            // if(this.options){
            //     for(option in this.options){
            //         $el[0].setAttribute(option, this.options[option]);
            //     }
            // }
            
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
