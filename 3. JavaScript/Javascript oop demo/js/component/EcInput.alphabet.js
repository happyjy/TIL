//input.alphabet.js

(function(){
    EcInputAlphabet = ecount.Class(EcInput, {
        init: function(id, name, className){
            EcInput.prototype.init.apply(this, arguments);
            // ecount.filter.setInputFilter(this.ele, function(value) {
            //     return /^[A-Za-z]*$/.test(value); 
            // });
        },
        render: function(){
            EcInput.prototype.render.apply(this, arguments);
            this.$el.bind('keydown', function(e){
                var keyID = e.keyCode;
                if ( (keyID >= 65 && keyID <= 90) || (keyID >= 97 && keyID <= 122) 
                    || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) 
                    return;
                else
                    alert(this.dataset["msg"]);
                    return false;
            });

            // this.$el.bind('keyup', function(e){
            //     e.target.value = e.target.value.replace(/[^A-Za-z]+$/, "");
            // });
        }
    });
})();

