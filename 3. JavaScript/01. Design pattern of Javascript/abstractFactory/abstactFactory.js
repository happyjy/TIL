var KingJoffery = (function(){
  function KingJoffery(){}
  KingJoffery.prototype.makeDecision = function(){
    console.log("This is KingJoffery makeDecision");
  }
  KingJoffery.prototype.marry = function(){
    console.log("This is KingJoffery marry");
  }
  return KingJoffery;
})();

var LordTywin = (function(){
  function LordTywin(){}
  LordTywin.prototype.makeDecision = function(){
    console.log("This is LordTywin makeDecision");
  }
  return LordTywin;
})();


var LannisterFactory = (function(){
function LannisterFactory(){}
  LannisterFactory.prototype.getKing = function (){
    return new KingJoffery();
  }
  LannisterFactory.prototype.getHandOfTheKing = function(){
    return new LordTywin();
  }
  return LannisterFactory;
})();

var TargaryenFactory = (function(){
function TargaryenFactory(){}
  TargaryenFactory.prototype.getKing = function (){
    return new KingAerys();
  }
  TargaryenFactory.prototype.getHandOfTheKing = function(){
    return new LoardConnigton();
  }
  return TargaryenFactory;
})();


//추상 팩토리 패턴을 사용하려면
// 지배 가문을 필요로 하는 클래스가 필요하다 
var CourtSession = (function(){
  function CourtSession(abstractFactory){
    this.abstractFactory = abstractFactory;
    this.COMPLAINT_THERESHOLD = 10;
  }
  CourtSession.prototype.complainPresented = function(complaint){
    if(complaint.severity < this.COMPLAINT_THERESHOLD){
      debugger;
      this.abstractFactory.getHandOfTheKing().makeDecision();
    }else{
      debugger;
      this.abstractFactory.getKing().makeDecision();
    }
  }
  return CourtSession;
})();

// TargaryenFactory에  Kingaerys, LoardConnigton function 이 아직 없어서 주석처리
// var CourtSession1 = new CourtSession(new TargaryenFactory());
// CourtSession1.complainPresented({ severity: 8 });
// CourtSession1.complainPresented({ severity: 12 });

var CourtSession2 = new CourtSession(new LannisterFactory());
CourtSession2.complainPresented({ severity: 8 });
CourtSession2.complainPresented({ severity: 12 });


/**
 * var KingJoffery = (function(){ })();
 * var LoadTywin = (function(){ })();
 * 
 * var LannisterFactory = (function(){
 * ... new KingJoffery();
 * ... new LoadTywin();
 * })()
 * 
 * var CourtSession = (function(){
 *  function CourtSession(abstractFactory){
 *    this.abstractFactory = abstractFactory;
 *  }
 * })()
 */