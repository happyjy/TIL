
/**
 * # 즉시 실행 함수로 모듈을 생성하는 방법
 */

/**
 * # __extends
 *  * 기본 프로토타입의 합수를 파생된 클래스에 복사하는 역할
 *  * 기본 프로토타입 : b
 *  * 파생된 클래스 : d
 *  * eg) __extends("파생된 클래스", "기본 프로토타입")
 */
var __extends = this.__extends || function(d, b){
  for( var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  function __(){ this.constructor = d; }
  __.prototype = b.prototype;
  d.prototype = new __();
}


/**
 * # figure out 
 * : BaseStructure가 function 일때 
 * BaseStruecture로 콘솔로 확인하면 "constructor"를 확인할 수 있다.
 * : BaseStructure.prototype을 콘솔로 확인하면 해당 function에 prototype을 확인
 */
var BaseStructure = (
  function() {
    function BaseStructure() {
      console("This is BaseStructure constructor");
    }

    BaseStructure.prototype.Init = function(){
      console.log("this is BaseStructure init function");
    }

    return BaseStructure;
  }
)();

/**
 * closer가 반환될 때 기본 구조가 castle로 전달된다.
 */
var Castle = (function(_super){
  debugger;
  console.dir("### _super : " + _super)
  __extends(Castle, _super);
  function Castle(name){
      this.name = name;
      _super.call(this);
    }  
  Castle.prototype.Build = function(){
    console.log("Castle built : " + this.name);
  }
  return Castle;
})(BaseStructure);

var BaseStructure = new BaseStructure();
var Castle = new Castle("Yoon");
Castle.Build(); // Castel build : Yoon
