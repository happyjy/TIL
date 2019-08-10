
//widget.generator
//define - controlType, id, name, title, groupid



var userData1 = define("EcInput", "input1", "input1")
    .value(1)
    .handler({
        "click": function(){
            alert(1);
        },
        "change": function(){}
    }).end();

var input1 = new EcInput(userData1);
input1.render();


var userData2 = define("widget.input", "input2", "input2")
    .value(2)
    .handler({
        "click": function(){
            alert(2);
        },
        "change": function(){}
    }).end();

var input2 = new EcInput(userData2);
input2.render();









// var input2 = new EcInput("input4", 5);
// input2.setHandler("change", function(){})
// input2.setHandler("mousedown", function(){})
// input2.render();
