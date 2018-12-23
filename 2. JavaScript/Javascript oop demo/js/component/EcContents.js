//EcContents.js
(function(){
    EcContents = ecount.Class(EcComponent, {
        template: "<div/>",
        init: function(){
          /**
           * # study 여기에서 this, arguments
           * * new EcEcontest(this.contentsData);
           *   - this = EcContents의 인스턴스 = klass = ecount.Class의 반환값 
           *   - arguments = this.contentsData
           */
            EcComponent.prototype.init.apply(this, arguments);
        },
        setTemplate: function(options){
            this.template = `<div id="${options.id}" class="${options.class}">`;
        },
        render: function(){    
          /**
           * # study  
           * contents.render(parentNode.contents);로 호출 됐을때 
           * 여기에서 this, arguemtns
           * * this 
           *   - contents = new 키워드로 EcContents의 인스턴스
           * */         
            EcComponent.prototype.render.apply(this, arguments);
        }
    });
})();