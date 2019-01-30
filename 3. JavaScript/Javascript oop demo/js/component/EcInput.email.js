//input.emailInput.js

(function(){
    EcInputEmail = ecount.Class(EcInput, {
        init: function(){
            // debugger;
            commonSetting(EcInput.prototype);
        },
        render: function(){
            debugger;
            EcInput.prototype.render.apply(this, arguments);
        },
        onFocusoutHandler: function(e){
            if(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e.target.value)){
                return true
            }else{
                alert(this.dataset["msg"]);
            }
        }
    });
})();

function commonSetting(options){
    if (!!options) {
        options.setTemplate(options);
        options["options"] = {};
        for( option in options ){
            if(option === "child"){
                options.child = options[option];
            } else {
                options["options"][option] = options[option];
            }
        }
    }     
}

