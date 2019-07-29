

  
```js
function parent(){ }

function Class(parent, prototype) {	
    var fn = function (arg) {		
	this.init.apply(this, arguments);	// A
    }	
    
    // B
    fn.prototype = new parent();
    for (var p in prototype) {
        fn.prototype[p] = prototype[p];
    }
    return fn;
}

var child = Class(parent, {
	// C
	init: function(name, age, gender){		
		this.name = name;
		this.age = age;
		this.gender = gender;
	}, 
        print: function () {
        	console.log("this.name :" + this.name);
		console.log("this.age :" + this.age);
		console.log("this.gender :" + this.gender);
    	}	
});

var child1 = new child("child1", '10', 'man');	//D
console.log(child1.print());
var child2 = new child("child2", '10');		//D
console.log(child2.print());
var child3 = new child("child3");		//D
console.log(child3.print());
```

* 확인 할 부분
  - A : **생성자** - D부분에서 new 키워드로 만든 <u>생성자 함수</u>를 만들경우 바로 실행되는 함수 code A가 바로 실행된다.(마치 자바에서 생성자 처럼)
      : **apply, arguments** - new 키워드로 만든 <u>생성자 함수</u>에 갯수가 정해지지 않은 인자를 임으로 작성할 경우 function으로 전달하기 위해서 apply, arguments키워드를 이용했다.
  - B : **상속** - C에 선언된 객체 프로퍼티(init, print function)를 fn function prototype에 세팅한다.  
      : == <u>부모 function의 prototype을 자식 function prototype에 복사한다.</u>  
  - C : Class function 두번째 param으로 child 객체를 생성한다.
      : "C" 부근에 있는 init은 "A"라인의 코드에 의해서 호출이된다.(생성자함수에의해서 생성자==A 가 호출)  
  - D : child function에 인자를 넘긴다. 이때 <u>생성자가 수행된다.( this.init.apply(this, arguments); ) </u>  
      : 이유 - child funciton은 A code가 있는 fn funciton이기 때문이다.)
