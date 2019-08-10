/**
 * * 예제로 input box, button생성
 * * button 생성후 page1.js에서 button에 대한 event 처리 해주는 과정 추가
 * * input data-cid마다 validation test 추가
 */

var page1 = ecount.Class(ecount.page, {
    ecPageId: "page2",
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

/**
 * # study new page1()
 *   * new page1 수행 결과 
 *   - ecount.Class(ecount.page, { function(){}, ... }); 코드로 반환된 Klass의 constructor function을 수행
 * (this.init.apply(this, arguments);
 *   - new page1에 의해서 수행되는 Klass constructor의 function this는 new page1()의 값
 */
var p1 = new page1();

// p1.onititContent();
var parentNode = {};
parentNode.contents = document.querySelector(".contents");
parentNode.footer = document.querySelector(".footer");
p1.render(parentNode);

/**
 * # this를 사용하는 해당 삼수를 어떻게 실행하느냐에 따라 바뀐다.
 * 1. regular runction call
 * 2. dot notation
 * 3. call, apply, bind
 * 4. 'new' keyword
 * 
 * 
 * 
 * 1. Regular function call - 일반 함수 실행 방식
 * function foo(){
 *   console.log(this);  //'this' === global object(브라우저 상에서 window객체)
 * }
 * 
 * 
 * 2. Dot Notation - 점 방식..
 * : 점 앞에 있는 객체가 this이다.
 * var age = 100;
 * 
 * var ken = {
 *   age: 35,
 *   foo: function foo(){
 *     console.log(this.age);   //  35
 *   }
 * }
 * 
 * var wan = {
 *   age: 31,
 *   foo: ken.foo == foo: function (){console.log(this.age)}
 *  
 * } 
 * 
 * ken.foo(); //35
 * wan.foo(); //31
 * 
 * 3. Function.prototype.call, Function.prototype.bind, Function.prototype.apply
 * : call, bind, apply의 함수를 사용할 function의 this는 
 * [중요] "첫번재 인자로 넘겨준 값"
 * : Dot Notation과 다르게 this의 값을 지정해 function을 실행해 줄 수 있다.
 * *3.1 예제
 * var age = 100;
 * 
 * function foo(){
 *   console.log(this.age);
 * }
 * 
 * var ken = {
 *   age: 35
 * }
 * 
 * var wan = {
 *   age: 31
 * } 
 *
 * foo();
 * 
 * foo.call(ken); //31 
 * foo.apply(wan);  //35
 * 
 * * 3.2 예제
 * var age = 100;
 * 
 * function foo(a,b,c,d,e){
 *   console.log(this.age); //ken object value
 *   console.log(arguments); //1,2,3,4,5
 * }
 * 
 * var ken = {
 *  age: 35
 * }
 * 
 * foo.call(ken, 1,2,3,4,5);
 * //foo. apply(ken, [1,2,3,4,5]);  //[1,2,3,4,5] : 유사배열
 * 
 * * 3.3 예제
 * 
 * var age = 100;
 * 
 * function foo(){
 *  console.log(this.age);   // 34
 *  console.log(arguments);  // 1,2,3,4,5
 * }
 * 
 * var ken = {
 *   age: 34
 * }
 * 
 * var bar = foo.bind(ken);
 * 
 * bar(1,2,3,4,5);
 * 
 * 
 * 4. 'new' keyword
 * : new 키워드로 생선한 함수 안 this는 새로운 객체 할당된다.
 *
 * 4.1 예제1
 * function foo(){
 *   console.log(this);
 * }
 * 
 * new foo();
 * 
 * 4.2 예제2
 * function foo(){
 *   // [중요]new 키워드를 썻을때 js 엔진은 3가지 일을 한다. 
 *   // a1. this = {};  // [중요] js 엔진이 이와 같은 코드를 생성 -> 이유! : 프로토타입체인, 객체지향 프로그램을 하게 되면 좀더 이해할수 있다.
 *   this.name = '바닐라코딩';
 *   // a2. { name : '바닐라코딩' }
 *   // a3. return this;
 * }
 * 
 * var vanillaCoding = new foo();
 * 
 * console.log(vanillaCoding);  //새로운 객체의 값이 this가 된다.
 * 
 * // 새로운객체  => { name : '바닐라코딩' }
 * 
 * 4.3 예제3
 * : A function used with 'new' keyword = Constructor function(생성자 함수)
 * : 생성자 함수명 첫번째 문자는 대문자로 한다.
 * function Person(name, age){
 *  this.name = name;
 *  this.age = age;
 * }
 * 
 * 
 * //called "instance"
 * var ken = new Person('ken huh', 34);
 * var wan = new Person('wan hub', 30);
 * 
 * console.log(ken);  //{ name : 'ken huh', age: '30'}
 * console.log(wan);
 * 
 * 5. bonus session: Event Handler
 * 
 */