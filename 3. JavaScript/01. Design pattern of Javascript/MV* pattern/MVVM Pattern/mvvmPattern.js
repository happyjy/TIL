
/**
 * <>Class structure
 * 
 * #Customer
 *   * add(){}
 *   * constructor(){}
 * #ViewModel
 *   * constructor(){}
 *   * addListener(target){}
 *   * removeListener(target){}
 *   * notify(field, data){}
 * #CustomerViewModel = class extends ViewModel
 *   * constructor(){}
 *   * validate(field, v = ''){}
 *   * save(){}
 * #CustomerView
 *   * constructor(){}
 *   * render(){}
 *   * update(field, v){}
 *   * 
 * #Binder
 *   * parse(v){}
 *   * addVM(k, m){}
 *   * bind(root){}
 */


/**
 * # 뷰모델과 뷰의 바인딩 문제
 * * 뷰가 뷰모델을 직접 가지고 있는 경우
 *   - 뷰에 뷰모델을 바인딩하는 과정이 전부 코드로 작성되어 있다.
 *   - 뷰무다 이 정도의 코딩을 하지 않으면 안된다는 의미
 * * 뷰모델과의 상호작용을 자동으로 ㅂ바인딩하는 방법이 있다면 뷰의 코드가 크게 줄어들 것
 *   - 해결 아이디어!
 *   - 1. 뷰를 순수하게 HTML로만 작성하고
 *   - 2. HTML5표준인 data-* 확장 스펙을 통해 뷰모데로가 연결되 수 있는 힌트를 제공해줄 수 있을 것
 *
 *
 */
  const Customer = class{
    static add(customer){Customer.list.add(customer);}
    constructor(){

      //간단히 필드를 정의함
      const fields = 'firstName,lastName,email,totalSales,isCompany'.split(',');
      fields.forEach(v=>this[v] = undefined);
    }
  };
  Customer.list = new Set();

  //뷰모델
  const ViewModel = class{
    constructor(){this.listeners = new Set();}
    addListener(target){this.listeners.add(target);}
    removeListener(target){this.listeners.delete(target);}
    notify(field, data){this.listeners.forEach(v=>v.update(field, data));}
  };

  const CustomerViewModel = class extends ViewModel{
    constructor(){
      super();
      this.model = new Customer();

      //뷰모델측 데이터 저장소
      const proxy = this.proxy = {};
      const fields = 'type,firstName,lastName,email';

      //프록시를 이용해 get, set제거
      return new Proxy(this, {

        get(self, k){

          //필드는 proxy가 대응
          if(fields.includes(k)) return proxy[k] || "";
          else if(k == 'typeOption') return ["선택안함", "개인", "회사"];
          else return self[k];
        },

        set(self, k, v){

          //필드는 proxy에 기록
          if(fields.includes(k)) self.notify(k, proxy[k] = v);
          return true;
        }
      });
    }
    validate(field, v = ''){
      switch(field){
      case'type':return !["개인", "회사"].includes(v) ? '고객 종류를 반드시 선택해주세요' : '';
      case'firstName':return !v.trim() ? '이름을 반드시 적어주세요' : '';
      case'lastName':return !v.trim() ? '성을 반드시 적어주세요' : '';
      case'email':return !v.trim() ? '이메일을 반드시 적어주세요' : '';
      }
    }
    save(){
      const fields = 'type,firstName,lastName,email'.split(',');

      //기존에는 this의 속성이지만 이제 proxy가 대응함
      if(fields.some(v=>this.validate(v, this.proxy[v]))) return;
      'firstName,lastName,email'.split(',')
          .forEach(v=>this.model[v] = this.proxy[v]);
      this.model.isCompany = this.proxy.type == '회사';
      Customer.add(this.model);
    }
  };

  //뷰
  const CustomerView = class{
    constructor(vm, stage){
      this.stage = stage;
      stage.innerHTML = "";
      this.vm = vm;
      this.vm.addListener(this);
    }
    render(){
      this.stage.innerHTML = `
        <style>.err{color:red;font-size:11px}</style>
        고객 종류:
        <select name="type">
        ${
          this.vm.typeOption.reduce(
            (str, v)=>str+=`<option value="${v}">${v}</option>`, ''
          )
        }
        </select>
        <div class="err" name="typeVali">${this.vm.validate('type')}</div>
        성: <input type="text" name="lastName" value="${this.vm.lastName}">
        <div class="err" name="lastNameVali">${this.vm.validate('lastName')}</div>
        이름: <input type="text" name="firstName" value="${this.vm.firstName}">
        <div class="err" name="firstNameVali">${this.vm.validate('firstName')}</div>
        이메일: <input type="text" name="email" value="${this.vm.email}">
        <div class="err" name="emailVali">${this.vm.validate('email')}</div>
        <button name="save">저장하기</button>
      `;
      'type,lastName,firstName,email'.split(',').forEach(v=>{
        this[v + 'Vali'] = this.stage.querySelector(`[name=${v}Vali]`);
        this[v] = this.stage.querySelector(`[name=${v}]`);
        const f =_=>this.vm[v] = this[v].value;
        this[v].addEventListener('change', f);
        this[v].addEventListener('keyup', f);
      });
      this.stage.querySelector('[name=save]').addEventListener('click', _=>this.vm.save());
    }
    update(field, v){
      const error = this.vm.validate(field, v);
      this[field + 'Vali'].innerHTML = error || '';
      if(v != this[field].value) this[field].value = v;
    }
  };
  // #
  // const vm = new CustomerViewModel();
  // const stage = document.querySelector('#stage');
  // const view = new CustomerView(vm, stage);     //뷰가 뷰모델을 직점 가지고 있는 경우
  // view.render();
  //뷰모델을 갱신해도 뷰에 반영된다!
  //vm.firstName = 'hika';


  /**
   * # 바인더
   * * 루트 엘리먼트에는 바인딩할 뷰모델 힌트가 VM값으로 주어지므로 이를 통해 얻은 뷰모델 클래스로 인스턴스를 생성할 것 임
   * * 결국 이전 MVC의 라우터처럼 뷰모델 클래스를 라우팅 데이블과 흡사한 상태로 바인딩 시스템에 미리 등록해야 한다는 의미!!!
   * * 그럼 파서와 뷰모델 등록 및 최초 엘리먼트의 뷰모델 초기화 까지를 한데모아 기초가 되는 Binder클래스를 작성해보자
   */
const Binder = class {
  //파서
  static parse(v){
    return new Map( !v ? null : v.split(',').reduce((arr, v)=>(arr.push(v.split('=')), arr), []));
  }
  
  constructor(){this.vm = new Map();}

  //뷰모델 등록
  addVM(k, vm){
    this.vm.set(k, _=>new vm());
  }

  //바인딩시작
  bind(root){
    const getVM = this.vm.get(Binder.parse(root.dataset.bind || '').get('vm'));
    if(!getVM) return;
    const vm = getVM(), stack = [];

    //리스너에 반응할 DOM저장소.
    //fields는 뷰모델 필드 갱신시, validators는 밸리데이터메세지에 반응할 엘리먼트들
    const fields = new Map(), validators = new Map();

    //뷰모델용 리스너(기존에는 뷰의 update메소드 역할)
    vm.addListener({update(field, v){
        const error = vm.validate(field, v);
        validators.get(field).innerHTML = error || '';
        field = fields.get(field);
        if(v != field.value) field.value = v;
    }});

    let el = root.firstElementChild, temp;
    do{
      //순회하며 자식이나 형제 발견시 스택에 추가!
      if(temp = el.firstElementChild) stack.push(temp);
      if(temp = el.nextElementSibling) stack.push(temp);

      //bind속성을 순회
      const target = el; //forEach콜백을 위한 자유 변수
      Binder.parse(el.dataset.bind || '').forEach((v, k)=>{
        switch(k){
          case 'prop':
            //기존처럼 뷰모델 속성과 연결하고 추적 리스터 등록
            const f =_=>vm[v] = target.value;
            target.addEventListener('change', f);
            target.addEventListener('keyup', f);

            //update시를 위한 fields에도 등록
            fields.set(v, target);
            break;

          case 'option':
            //간단히 select의 옵션을 채워줌
            target.innerHTML = vm[v].reduce((str, v)=>str+=`<option value="${v}">${v}</option>`, '');
            break;

          case'validate':
            //최초 밸리데이션 결과를 출력하고
            target.innerHTML = vm.validate(v);
            //update용 밸리데이터 대상에 등록한다.
            validators.set(v, target);
            break;

          case 'action':
            //뷰모델의 메소드에 연결한다.
            target.addEventListener('click', _=>vm[v]);
            break;
        }
      });
    }while(el = stack.pop()); //스택을 소비한다.
  }
};

const binder = new Binder();

//뷰모델 클래스 등록
binder.addVM('CustomerViewModel', CustomerViewModel);
//바인딩 시작!
binder.bind(document.querySelector('#stage'));