var EcInput = class {
    constructor(options){
        this.handler = {};
        this.id = options.id;

        if(options.handler){
            // for(var handler in options.handler){
            //     this.handler[handler] = options.handler[handler];
            // }
            $.extend(this.handler, options.handler);
        }
        this.template = "<input type='text' name='" + options.name + "' value='" + options.value + "'/>";
    }
    setHandler(handlerName, handler){
        this.handler[handlerName] = handler;
    }
    render($parent){
        this.$el = $(this.template);
        // $el.change(this.handler["mousedown"].bind(this));
        // $el.change(this.handler["change"].bind(this));
        if(this.handler["click"]){
            this.$el.click(function(){
                this.delegator.triggerEvent("control.click", {
                    cid: this.cid,
                    value: vlaue
                })
            });
        }
        this.$el.appendTo($parent);
    }

    setValue(value){
        this.$el.val(value);
    }
}







// var input = $("<input type='text' name='input' value='2'/>");
// input.change(function(){
//     alert(this.value);
// });
// $("body").append(input);

// var input = $("<input type='text' name='input' value='2'/>");
// input.change(function(){
//     alert(this.value);
// });
// $("body").append(input);
// var input = $("<input type='text' name='input' value='2'/>");
// input.change(function(){
//     alert(this.value);
// });
// $("body").append(input);
// var input = $("<input type='text' name='input' value='2'/>");
// input.change(function(){
//     alert(this.value);
// });
// $("body").append(input);


// var radio = $('<label><input type="radio" name="search_type" value="all" checked />나이</label><label><input type="radio" name="search_type" value="name" />이름</label><label><input type="radio" name="search_type" value="id" />아이디</label>');
// radio.change(function(){
//     alert(this.value);
// });
// $("body").append(radio);



/**
 * 
 컴포넌트 - 재사용이 가능한 최소 단위
 * 
 */


//클래스 설계
//input, radio

//랜더링
//change event

//