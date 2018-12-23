//page1.js

var page1 = ecount.Class(ecount.page, {
    ecPageId: "page1",
    init: function(){
        ecount.page.prototype.init.apply(this, arguments);
    },
    render: function(){
        ecount.page.prototype.render.apply(this, arguments);
    },
    onInitHeader: function(){

    },
    onInitContent: function(){
        return { type: "EcContents",
                   id: "EcContentsId",
                child: [{ type: "EcForm",  //, maxlength: "3"
                          child: [{type: "EcInputNumber", id: "inputId1"
                                , 'msg': ecount.resource.MSG0003
                                , 'data-input-type': 'inputData' 
                                , 'data-cid': "number"}
                                    ,{type: "EcInputAlphabet", id: "inputId2"
                                , 'msg': ecount.resource.MSG0004
                                , 'data-cid': "alphabet"}
                                   ,{type: "EcInputEmail", id: "inputId3"
                                   , 'msg': ecount.resource.MSG0005
                                   , 'data-cid': "email"}
                                   ,{type: "EcInput", id: "inputId4"
                                   , 'maxlength': '4'
                                   , 'data-cid': "maxlength3"}]
                       }]
               }
    },
    onInitFooter: function(){
        return  {  type: "EcFooter",
                     id: "EcFooterId",
                  child: [
                      {type: "EcButton", id: "test", pageId: this.ecPageId, text: "btn1"
                        , 'data-button-pageId': this.ecPageId  
                        , 'data-button-area': 'Footer'
                        , 'data-button-id': 'Test'
                        , 'data-cid': 'btn1'
                        , 'data-disabled': true}
                    , {type: "EcButton", id: "alert", pageId: this.ecPageId, text: "btn2"
                        , 'data-button-pageId': this.ecPageId  
                        , 'data-button-area': 'Footer'
                        , 'data-button-id': 'Alert'
                        , 'data-cid': 'btn2'}
                    ]
                }
    },
    onFooterTest: function(e){
        // document.getElementById(e.target.id).disabled = true;
        // setTimeout(() => {
        //     document.getElementById(e.target.id).disabled = false;
        // }, 3000);
    },
    onFooterAlert: function(){ 
        debugger;
    }
})

var p1 = new page1();
// p1.onititContent();
var parentNode = {};
parentNode.contents = document.querySelector(".contents");
parentNode.footer = document.querySelector(".footer");
p1.render(parentNode);