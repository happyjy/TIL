//EcPage.js 
ecount.page = ecount.Class(null, {
    init: function(){
        window[this.ecPageId] = this;
    },
    render: function(parentNode){
        //observer pattern 시도 
        var observerObj = new ecount.Observable();


        /**
         * # study this 여기에서 this란 ? 
         * * render를 호출한 객체 
         * */
        //Contents 영역 
        this.contentsData = this.onInitContent();        
        this.contentsData.observerObj = observerObj
        /**
         * # study new EcContents
         *  * [중요]constructor 함수로 EcContents value 인 klass 값을 실행(this.init.apply(this, arguments); 실행)
         *  * [중요]아래 코드틑 EcComponent init function에서 this 프로퍼티에 값이 추가가 되는데 
         * contents.render코드에서 this의 값은 프로퍼티가 추가/변경된 값이 된다. 
         */
        var contents = new EcContents(this.contentsData);
        contents.render(parentNode.contents);
        this.contents = contents;

        //footer 영역
        this.footerData = this.onInitFooter();
        //observer pattern
        this.footerData.observerObj = observerObj;
        var footer = new EcFooter(this.footerData);
        footer.render(parentNode.footer);
        this.footer = footer;

        /**
         * event처리는 page에서 처리 해주는것이 적당할 것같아. 
         * 기존에 EcFramework에서 처리해주는 것을 EcPage에서
         */
        // var me = this;
        this.$el = $(parentNode.footer);
        this.$el.bind('click', function(e){
            if(e.target.dataset.buttonArea &&
                e.target.dataset.buttonId){
                var targetEvent = 'on'
                    + e.target.dataset.buttonArea
                    + e.target.dataset.buttonId;
                this[targetEvent](e);// me[targetEvent]();
            }
        }.bind(this));  // # jyoon/study this의 범위는 ecount.Class로 생성된 function
    },

    setTtile: function(){

    },
});
