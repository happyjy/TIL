/**
 *  클로저 구분으로 전체 모듈을 구현
 */

var Westeros;
(function(Westeros){
  
  (function(Structures){
    
    var Castle = (function(){
      function Castle(name){
        this.name = name;
      }
      Castle.prototype.Build = function(){
        console.log("Castle built : " + this.name);
      }
      return Castle;
    })();
    Structures.Castle = Castle;

  })(Westeros.Structures || (Westeros.Structures = {})); 
  var Structures = Westeros.Structures;

})(Westeros || (Westeros = {}));

/**
 * 단일 모듈 내에서 복수의 클래스르 정의 
 */

// var Westeros;
// (function(Westeros){
  
//   (function(Structures){
    
//     var Castle = (function(){
//       function Castle(name){
//         this.name = name;
//       }
//       Castle.prototype.Build = function(){
//         console.log("Castle built : " + this.name);
//       }
//       return Castle;
//     })();
//     Structures.Castle = Castle;

//     //복수개 클래스 정의
//     var Wall = (function(){
//       function Wall(){
//         console.log("Wall Constructured");
//       }

//       return Wall;
//     })();
//     Structures.Wall = Wall;

//   })(Westeros.Structures || (Westeros.Structures = {})); 
//   var Structures = Westeros.Structures;

// })(Westeros || (Westeros = {}));