//framework.js
//event 
// (function(){
//     var targetAreaClass = 'footer'
//     var parent = document.querySelector('.'+'footer');
//     parent.addEventListener('click', event => {
//         //todo refactoring 필요 
//         //버튼이 속한 페이지에 생성한 function이름을 찾기 위한 코드
//         var preFix = 'on';        
//         var targetId = event.target.getAttribute("id");
//         targetAreaClass = targetAreaClass.charAt(0).toUpperCase() + targetAreaClass.slice(1);
//         targetId = targetId.charAt(0).toUpperCase() + targetId.slice(1);
//         var clickTarget = preFix + targetAreaClass + targetId;
//         var pageId = event.target.getAttribute("pageId");
        
//         //todo 고민 필요 : 어떻게 버튼이 속한 페이지를 찾아 클릭한 버튼의 function을 동작하게 할까? 
//         //현재 btn에 pageId attribute에 pageId를 추가해서 사용하고 있당
//         //observer pattern에 대해서 고민해보기 !!!
//         /**
//          * 20181220
//          * ### STUDY!!!  ===> todo 정확한 이해 필요 
//          * * window[pageId]["prototype"][clickTarget](); 
//          * 위 코드에서 prototype으로 접근했다는 의미
//          * - pageId(=page1) value의 prototype 은
//          *  ecounte.page를 상속받은 page1의 value(prototype을 상속받은 value)
//          * ===> 그래서 prototype으로 접근했다는 것은 new page1 인스턴스의 객체에 접근한 것이아니라 
//          * 상속받은 value : var page1 = ecount.Class(ecount.page, {})에 접근했다는 것 입니다.
//          *  */
//         // 
//         // window[pageId]["prototype"][clickTarget]();
//         window[pageId][clickTarget]();
//     });
// })();

(function(){

})();

(function(){
    this.ecount = {};
    this.ecount.filter = {};
    this.ecount.event = {};

    ecount.parent = function(){
        return {}
    };

    debugger;
    ecount.Class = function(parent, prototype) {	

        var Klass = function () {		
            this.init.apply(this, arguments);
            return this;  
            /**
             * # study return this 
             *   * 위 return this : ecount.Class function에 의해 생성된 function
             *   * [중요]현재 이 위치에 Klass function this : ecount.Class로 생성된 값을 new 키워드로 생성한 인스턴스
             *   * ecount.Class로 생성된 return value : 두번째 parameter에 의해서 상속 받은 값 
             */
        }	

        /**
         * # study - Klass.prorotype = new parent();
         *   * Klass.prototype = new parent();
         *   - [중요]prototype은 자신을 원형으로 만들어질 객체에 물려줄 속성
         *   - parent는 Klass의 프로토타입으로 지정
         *   - Klass function의 __proto__ 하위 두번째 속성
         * 
         *   * Klass.prototype[p]
         *   - ecount.Class function의 두번째 parameter
         *   - Klass function의 __proto__ 하위 첫번째 속성
         *   
         */
        if(!!parent) Klass.prototype = new parent();
        // Klass.prototype = new parent();
        for (var p in prototype) Klass.prototype[p] = prototype[p];

        return Klass;
    };
    
    ecount.getPageId = function(){
        return ;
    }

    ecount.filter.setInputFilter = function(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select"].forEach(function(event) {
            textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;                
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;                
            }
            });
        });
    }
    
    //Event 추가 
    ecount.Observable = function() {
        return {
            constructor: function(){
                this.observers = {};
            },
            subscribe: function(type, f) {
                //key 값으로 value를 바로 찾을 수 있는 구조로 
                // this.observers[type] = f;
                // this.observer.push(f);
            },
            unsubscribe: function(f) {                
                // this.observers = this.observers.filter(subscriber => subscriber !== f);
            },
            //obsever등록된 기능 동작
            notify: function(data) {                    
                this.observers.forEach(observer => observer(data));
                // this.observers.forEach(function(val, idx){
                //     console.log({val, idx, data});
                // })
            },
            notify: function(data) {                    
                this.observers.forEach(function(observer){
                    observer(data);
                });
            }
        }
    }
})()