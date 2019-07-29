### 

* 확인 할 부분
  - "B" : 부모 객체에 자식객체에서 선언한 function을 부모 객체 prototype객체에 복사한다.
  - "A" : new 키워드로 만든 <u>생성자 함수</u>에 갯수가 정해지지 않은 인자를 임으로 작성할 경우에 대비한 코드(apply, arguments)  
  
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
## 상속과, apply에 대한 고찰
> 상속 받는 Class fucntion을 만든다.  
> 이때 new로 생성자 함수를 만들때 불규칙적인 인자를 넘길 수 있다.
이 문제를 apply를 사용해서 

* A : 생성자 함수로 만들어진 인스턴스에 init이름으로 된 function을 상속받는 코드가 있다.   
* B : C에 선언된 객체 프로퍼티(init, print function)를 fn function prototype에 세팅한다.  
    : == 부모 function의 prototype을 자식 function prototype에 복사한다.  
    : == 상속
* C : Class function 두번째 param으로 child 객체를 생성한다.   
* D : child function에 인자를 넘긴다. 이때 <u>생성자가 수행된다.( this.init.apply(this, arguments); ) </u>  

* 생각 follow
	- child를 생성자 함수로 만들때 인자를 규칙적으로 넘기지 않을때가 있다. ("D" 코드와 같이)
그래서 init을 호출할때 정해지지 않은 인자를  넘겨줘야한다.

	- 호출되어지는 init line : C  
: "C" 부근에 있는 init은 "A"라인의 코드에 의해서 호출이된다.(생성자함수에의해서 생성자==A 가 호출)  
: 이때 갯수가 정해지지 않은 인자를 넘겨줘야한다.  
: 그래서 "A"라인 코드와 같이 apply, arguments개념을 사용해서 코드를 작성할 수 있다.  

	- init을 호출하는 line : A  
: init은 객체는 생성자 함수를 실행할때 선언한 init("C" 부근의 init)이 fn.prototype에 선언이 된다.
