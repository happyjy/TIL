//input.number.js

(function(){
    EcInputNumber = ecount.Class(EcInput, {
        init: function(){
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
        },
        render: function(){
            EcInput.prototype.render.apply(this, arguments);
            
            // this.$el.bind('keydown', function(e){
            //     var keyID = e.keyCode;
            //     if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
            //         return;
            //     else
            //         alert(this.dataset["msg"]);
            //         return false;
            // });

            // this.$el.bind('keyup', function(e){
            //     e.target.value = e.target.value.replace(/[^0-9]/g, "");
            // });
        },
        onKeyDownHandler: function(e){
            var keyID = e.keyCode;
            debugger;
            if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
                return;
            else
                alert(this.dataset["msg"]);
                return false;
        }
       
    });
})();

