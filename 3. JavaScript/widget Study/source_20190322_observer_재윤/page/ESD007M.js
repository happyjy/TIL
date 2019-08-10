//페이지 계층 
var esd006m = new EcInventoryPage({
    onInitHeader: function(header){

        

        var userData1 = define("EcInput", "input1", "input1")
            .value(1)
            .handler({
                "click": function(){
                    alert(1);
                },
                "change": function(){}
            }).end();

        header.push(userData1);
    },
    
    onIinitContents: function(contents){
        var userData1 = define("EcInput", "input2", "input2")
            .value(2)
            .handler({
                "click": function(){
                    alert(2);
                },
                "change": function(){}
            }).end();

        contents.push(userData1);
    },
    onInitFooter: function(footer){
        var userData1 = define("EcButton", "new", "new").end();
        footer.push(userData1);

        var userData1 = define("EcButton", "save", "save").end();
        footer.push(userData1);
    },
    onInitControl: function(cid, control){
        if(cid == "input1"){
            control.value(2);
        }
    },
    onLoadComplete: function(){
        this.header.getControl("input1").setValue(4444);
    },

    onInitLoading: function(loadedCount){
        $("body").append("<span>" + loadedCount + "</span>");
    },

    onClickButton: function(cid){

    },

//1. header, contents(getControl 메소드 구현), footer, ecButton  class
//2. footer에 new 버튼 추가
//3. new 버튼 클릭시 input2의 값을 4로 변경
    onfooternew: function(e){
        this.header.getControl("input1").setValue(1111);
    },

    onheaderbtn1: function(e){
        this.contents.getControl("input2").setValue(4000);
    },

    onChangeControl: function(){},



});








// pageFactory({
//     onInitHeader: function(header){
//         header.title("판매입력").useBookmark().add("options")
//         var userData1 = define("EcInput", "input1", "input1")
//             .value(1)
//             .handler({
//                 "click": function(){
//                     alert(1);
//                 },
//                 "change": function(){}
//             }).end();

//         header.push(userData1);
//     },
    
//     onIinitContents: function(contents){
//         var userData1 = define("EcInput", "input2", "input2")
//             .value(2)
//             .handler({
//                 "click": function(){
//                     alert(2);
//                 },
//                 "change": function(){}
//             }).end();

//         contents.push(userData1);
//     },
//     onInitFooter: function(){},
//     onInitControl: function(cid, control){
//         if(cid == "input1"){
//             control.value(2);
//         }
//     },
//     onLoadComplete: function(){
//         alert("complete.")
//     },

//     onInitLoading: function(loadedCount){
//         $("body").append("<span>" + loadedCount + "</span>");
//     },

//     onClickButton: function(cid){

//     },

// //1. header, contents(getControl 메소드 구현), footer, ecButton  class
// //2. footer에 new 버튼 추가
// //3. new 버튼 클릭시 input2의 값을 4로 변경
//     onFooterNew: function(event){
//         this.contents.getControl(event.id).setValue(4);
//     }

// });



// var header = [];
// var footer = [];

// var userData1 = define("EcInput", "input1", "input1")
//     .value(1)
//     .container("header")
//     .handler({
//         "click": function(){
//             alert(1);
//         },
//         "change": function(){}
//     }).end();

// header.push(header);

// var userData2 = define("EcInput", "input2", "input2")
//     .value(2)
//     .handler({
//         "click": function(){
//             alert(2);
//         },
//         "change": function(){}
//     }).end();


// create({header: [userData1], footer: [userData2]});






// var input2 = new EcInput("input4", 5);
// input2.setHandler("change", function(){})
// input2.setHandler("mousedown", function(){})
// input2.render();
