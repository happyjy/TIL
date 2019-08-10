/**
 * * 예제로 input box 세개 만들어보기 
 */

//page1.js
// * 화면 구성 data 설정
//개발자들이 짜는 코드
//개발자들에게 가이드 하기 쉽게 하려면 GENERATOR 모듈로 표준화를 한다.

var page1 = ecount.Class(ecount.page, {
    ecPageId: "page1",
    init: function(){
        ecount.page.prototype.init.apply(this, arguments);
    },
    render: function(){
      ecount.page.prototype.render.apply(this, arguments);
    },
    onInitHeader: function(){},
    onInitContent: function(){
        // ge.createContent()
        return  {  type: "EcContents",
                        id: "EcContentsId",
                        child: [{
                            type: "EcForm",
                            child: [{type: "EcInput",id: "test"}
                                    ,{type: "EcInput",id: "test2"}
                                    ,{type: "EcInput",id: "test2"}]
                        }]
                }
    },
    onInitFooter: function(){},
    render: function(){
        ecount.page.prototype.render.apply(this, arguments);

    },
    onFooterTest: function(){
        //btn event가 호출이 될대 이함수가 호출이 되어 
        //id : test
        //첫번째 input에 "test" 값
    },
    onFooterAlert: function(){
        //2nd btn
        //id : Alert
        //2nd inut에 "ALERT" STRING 값 
    },
})

// {
//     header: {
//         type:"EcHeader",
//         id: "headerid",
//         child: [{type: "label", id: "iabelId"}]
//     },
//     contents: {
//         type: "EcContents",
//         id: "EcContentsId",
//         child: [{
//             type: "EcForm",
//             child: [{type: "EcInput",id: "test"}
//                     ,{type: "EcInput",id: "test2"}
//                     ,{type: "EcInput",id: "test2"}]
//         }]
//     },
//     footer: {}
// }
var p1 = new page1();
// p1.onititContent();
var parentNode = {};
parentNode.contents = document.querySelector(".contents");
p1.render(parentNode);